import { useState,useEffect,createContext} from "react";
import './App.css';
import {BrowserRouter, Link, Route, Routes }from "react-router-dom";

import Home from"./pages/home.jsx";
import Connexion from "./pages/connexion.jsx";
import Inscription from "./pages/inscription.jsx";
import Profile from "./pages/Profile.jsx";





function App() {

  
  const [user,setUser] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem('acces_token')
    async function getUser (){
      if (!token) return
      const reponse = await fetch ('/api/users/me',{
        headers:{
          authoeization: "Bearer" + token
        }
      }) 
      const data = await reponse.json ()
      setUser(data.user)
      
    }
    
    getUser()
    
  }, [])
  
  return (
    
    <>

    <BrowserRouter>
    <nav>
            <Link to={"/"}>Accueil</Link>
              <Link to={"/inscription"}>Inscription</Link>
              <Link to={"/connexion"}>Connexion</Link>
              <Link to={"/profile"}>Profile</Link>
          
          </nav>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/inscription" element={<Inscription />}/>
          <Route path="/connexion" element={<Connexion />}/>
          <Route path="/profile" element={<Profile />}/>
         

          
          </Routes>
          </BrowserRouter>
        
    </>
        );
        
}
  


        
    
      
      
      export default App;
// Implementer la déconnexion
// Ajouter un bouton dans la navbar, qui quand on clique dessus:
// Supprimer le token de localStorage
// Mettre la variable d'état user a null
