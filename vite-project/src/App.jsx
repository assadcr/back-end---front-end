import {useEffect} from "react";
import './App.css';
import Todolist from "./compoment/Todolist.jsx";

function App() {

  useEffect(()=> 
    {
    async function getPing(){
     const reponse = await fetch('/api/ping');
     console.log(reponse);
     const data = await reponse.json()
     console.log(data);















     

    }
    getPing()

  }, [])

  return(
   <div>
    <h1>Hello Douc's</h1>
    <Todolist>
      
    </Todolist>
   </div>
  )
   
  
}

export default App;

