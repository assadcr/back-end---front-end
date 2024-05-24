import express from "express";
import { UserModel } from "../database/user";
import bcrypt from "bcrypt";
import jsonwebtoen, { JsonWebTokenError } from "jsonwebtoken";


const SECRET_KEY = "azerty"

// * Créer un nouveau routeur express pour les utilisateurs
export const usersRouter = express.Router();

// * Route pour l'inscription des utilisateurs
usersRouter.post("/inscription", async (req, res) => {
  console.log(req.body);

  // * Étape 1: Tester les données reçues
  const { email, password, username } = req.body;

  // Vérifier si l'email contient un "@", si le nom d'utilisateur n'est pas vide et si le mot de passe a au moins 6 caractères
  if (!email.includes("@") || username === "" || password.length < 6) {
    return res.status(400).json({ error: "incorrect data" });
  }

  // * Étape 2: Vérifier si l'utilisateur existe déjà
  // Rechercher un utilisateur avec l'email fourni dans la base de données
  const userFromDB = await UserModel.find({ email: email });
  console.log(userFromDB);

  // Si un utilisateur avec cet email existe déjà, retourner une erreur
  if (userFromDB.length > 0) {
    return res.status(401).json({ error: "this user already exists" });
  }

  // * Étape 3: Hasher le mot de passe
  // Hacher le mot de passe avec un coût de 6 pour la fonction bcrypt
  const hashedPassword = await bcrypt.hash(password, 6);
  console.log(hashedPassword);

  // * Étape 4: Enregistrer le nouvel utilisateur dans la base de données
  // Créer une nouvelle instance du modèle User avec les données fournies
  const newUser = new UserModel({
    email,
    hashedPassword,
    username,
  });

  // Sauvegarder le nouvel utilisateur dans la base de données et récupérer l'utilisateur sauvegardé
  const user = await newUser.save();
  console.log(user);

  // Retourner les informations de l'utilisateur sauvegardé dans la réponse
  return res.json({
    user: {
      email: user.email,
      username: user.username,
      id: user._id,
    },
  });
});

// Exercice:
//Créer un route: /api/user/connexion
//Verifier si l'email et le mot de passe on ete réçu dans le coprs de la requete sinon retourner un erreur
//Récuperer l'utilisateur depuis la base de données avec son mail, retourner un erreur si il n'existe pas
//Verifier si le mot de passe est correcte (utiliser la methode compare de bcrypt)
//Retourner l'utilisateur dans la réponse

usersRouter.post("/api/user/connexion", async (req,res) => {
     const {email,password} = req.body
     if (!email || !password) {
        return rep.status(400).json ({ erreur: "données incorrecte"})
        
     }
     if (!email.includes('@') || password.length < 6) {
        return rep.status(400).json ({ erreur: "données incorrecte"})
        
     }
     const [userFromDB] = await UserModel.find({ email:email})
     if (!userFromDB) {
        return rep.status(404).json({ erreur: "utulisateur pas inscrit"})  
     }
     const isPasswordValid = await bcrypt.compare(password, userFromDB, hashedPassword)
     if (!isPasswordValid) {
        return rep.status(401).json({ erreur : "donnés incorrecte"})
        
     }
     const access_token = jsonwebtoen.sign({id : userFromDB._id}, SECRET_KEY);

     return rep.json({ user : userFromDB,access_token})
})

usersRouter.get('/me', async (req,rep) =>{
    const access_token = req.header.authorization;

    const token = access_token.split(' ')[1]
    const verifiedToken = jsonWebToken.verify(access_token,SECRET_KEY);

     if (!verifiedToken) {
        return rep.status(401).json({ erreur: "token invalide"})
     }
     const user = await UserModel.findByid( verifiedToken.id);
     
     return rep.json({user})
})