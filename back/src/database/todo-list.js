// definir un schema 
import mongoose from "mongoose";

const TodoListSchema = mongoose.Schema({
    title: {type:String, required: true},
    createdAT: {type: Date},
    todos:[
        {
            title: { type:String , required : true},
            isDone : { type: Boolean, required: true , default:false}
        }
    ]
})
// et exporté le model pour etre utulisé ailleurs le todolist represente la base de donnes et le moogoose et le model
// res retourner quelque chose et req recuperer quelque chose
export const TodoModel = mongoose.model("todolist", TodoListSchema)
