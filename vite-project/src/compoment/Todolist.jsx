import { useState ,useEffect} from "react";


export default function Todolist(){
    const [userInput,setUserInput] = useState ("");

    function changement(e) {
        setUserInput(e.target.value)
        
    }
    //  async function valideFormulaire() {
    //     if (userInput === "") {
    //         return setMessage({ succes: false, content: "titre"})
            
    //     }
    //     const reponse = await fetch('/api/todos',{
    //         method: "POST",
    //         body: JSON.stringify({ title: userInput }),
    //         headers: {
    //             'content-Type': 'application/json',
    //         }

    //     })

    //   const data = await reponse.json()
      
    //   return setMessage({ succes: true , content: "tache ajouté"})
        
        
    // }
    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const response = await fetch('https://api.example.com/tasks'); 
            const data = await response.json();
            setTasks(data);
          } catch (error) {
            console.error('Erreur lors de la récupération des tâches:', error);
          }
        };
        
        fetchTasks(); 

      }, []); 


    return(

        <div style ={{
            display: "flex",
            flexDirection:"column",
            gap:"10px",
            padding: "10px",
        }}>
            <input style ={{
                padding:"10px"
            }} type="text" onChange={changement} />
            <button onClick={valideFormulaire}>button</button>
            <p style={{
              color :message.succes ? "green" : 'red'
            }}>{message.content}</p>
        </div>
    )
   
   
}

// Exercice:
// 1. Créer une variable d'état: message: {success:boolean, message:string}
// 2. L'afficher dans le JSX
// 3. Quand l'utilisateur clique:
    // 3.1 Test: Si l'input est vide afficher le message "Message Obligtoire"
    // 3.2 Envoyer la requete, afficher un message de succés

    // Exercice:
// Utiliser le useEffect et fetch pour récuperer les listes de tache
// Stocker les liste de taches dans une variable d'état
// Utiliser un boucle pour afficher chaque liste de taches



