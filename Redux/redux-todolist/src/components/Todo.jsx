import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import AddForm from "./AddForm";
export default function Todo(){
    const todos = useSelector((state) => state.todo.todos); // Correct access
    console.log(todos);
    const dispatch = useDispatch()
    const clickHandler =(id )=>{
        console.log ("delete",id );
        dispatch(deleteTodo(id ))
    }


    return(
        <div>
            <AddForm/>
            <h2>Todo List App</h2>
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}
                <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                </li>
            ))}
            </ul> 

        </div>
    );
}