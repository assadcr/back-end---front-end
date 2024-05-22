import express from "express"
import { TodoModel } from "../database/todo-list.js";

export const todosRoute = express.Router();

// but généram realiser un crud sur les todos

//exercice 1 :
// créer une route sur la methode post avec l'url '/'
todosRoute.post('/', async (req,res) => {
    const data = req.body
    if (!title) {
        return res.status(400).json({error : 'titre obligatoire'})
      
    }
    const newTodolist = new TodoModel({
        title: title,
        createdAt : new date ()
    })
    const todoListAjouter = await newTodolist.save()
    return rep.json({todo : todoListAjouter})
})
// recuperer les donnes du body title ;
// tester si dans le bodyc ya title:
// so title retourne 400 avec erreur
// sinon retour message ok



// exercice 3 :
//1.ajouter un route sur 'api/todos/id',
todosRoute.get('/:id', async (req,rep) =>{

    //2.recuprer l'id depuis les parametre d'url
    const todoID = req.params.id;
    //3.utuliser le model pour récuperer la todo avec son id
    const todo = await TodoModel.findById(todoID).exec();
    //4.si la todo n'existe pas retourner 404
    if (!todo) {
        return rep.status(404).json ({error: "todo introuvable"})
    }
    //5.si la todo exist retourner la todo
    return rep.json(todo)
})


// Exercice 4:


// 1. Créer la route '/api/todos/id'  avec la method PUT
todosRoute.put('/:id', async (req,res) =>{
    // 2. Récuperer l'id dans les paramètre d'url
    const id = req.params.id;
    // 3. Récuperer le titre dans les body de la requete
    const title = req.body.title;
    if (!title) {
        return res.status(404).json ({error : "erreur"})
        
    }
    // 4. Récuperer la todo avec son id
    const todo = await TodoModel.findById(id).exec();
    
    // 4.1 Si elle existe pas, retourner 404
    if (!todo) {
        return rep.status(404).json({error: "todo introuvable"})
    }
    
    // 4.2 Si elle existe;
    // 4.2.1: Mettre a jour le titre de la todolist
        todo.title = newTitle;
        await todo.save();
        
        // 4.2.1: Retourner la todolist 
        return res.json(todo)

    })
   
  // Exercice 5:
  
  // 1. Ajouter un route Delete avec id dans les paramètre
  todosRoute.delete('/:id', async (req,res) =>{
      // 2. Récuperer la tache avec ID
      const id = id = req.tache.id
      // fonction qui s'excute sur la classe
      const todo = await TodoModel.findById(id)
      
      // 3. 404 si ell n'existe pas
      if(!todo) {
          return rep.status(404).json({error: "introuvable"})
          
        }
        // 4. La supprimer si elle existe methode dde 'lobject todo
        await todo.deleteOne()
        // 5. Retourner un message.
    return res.json({ message: 'Todo deleted successfully' })
});

 // CRUD poiur ajouter des taches aux listes
 // CREATE: Ajouter une tache a une liste
  

     todosRoute.post('/id/todo',async(req,res) =>{
            const todoListID = req.aparams.id;
            const todoTitle = req.body.title;

            const todoList = await TodoModel.findById(todoListID)
            if (!todoList) {
                return rep.status(404).json ({error : "todolist introuvable"})
                
            }
            todoList.todos.push({title: todoTitle})
            await todoList.save();

            return rep.json(todoList)
        }) 

        todosRoute.put('/listId/:todoID',async(req,res) =>{
            const {listId ,todoID} = req.params;
            const {title, isDone} = req.body;
            const todoList = await TodoModel.findById(listID);
            if (!todoList){
                return rep.status(404).json({error: "TodoLisT supprimée"})}
        })
  
           

        
        todosRoute.post('/listID/:todoID', async (req,rep) =>{
                
        })

        todosRoute.get('/listID/:todoID', async (req,rep) =>{
                
        })

        todosRoute.put('/listID/:todoID', async (req,rep) =>{   
                
        })


        todosRoute.delete('/listID/:todoID', async (req,rep) =>{
                const todoList = await TodoModel.findById(listID)
                if (!todoList) {
                    return rep.status(404).json({error: "todolist introuvable"})

                }
                const todo = todoList.todos.id(todoID)
                
        })
        