// lancer un serveur avec expresss sur le port 3005

import express from "express";
import mongoose from "mongoose";
import { TodoModel } from "./database/todo-list.js";
import { todosRoute } from "./routes/todos-route.js";


const MONGODB_URI = "mongodb://127.0.0.1:27017/todos";
const port = 3005;

const app = express();

app.use('/api/todos/', todosRoute);


app.listen(port, () => {
    console.log(`Serveur lancé`);
  console.log(` http://localhost:${port}`);
  

  mongoose.connect(MONGODB_URI).then(()=>{
    console.log(`base de données connectée`);
  }).catch((err) => {
    console.log(`base de donnés non connectée`);
    console.log(err);
  })
});



app.get('/api/ping',(req,res) => {
  return res.json({message:"pong"})
})