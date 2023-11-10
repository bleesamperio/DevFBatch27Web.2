import { useState } from "react"
import ToDoItem from "./ToDoItem";
const ToDoList = () => {
    const [inputValue, setInputValue] = useState('')
    const [tareas, setTareas] = useState([])

    const handleAdd = ()=>{
        if (inputValue.trim()) {
            /** metodo push para setTareas 
            const tareasTemporal = [...tareas]
            tareasTemporal.push(inputValue)
            setTareas(setTareas)*/
            
            setTareas(...tareas, inputValue)
            setInputValue('')
        }
    }


    return (
    <div>
    <h1>Lista de Tareas</h1>
    <input
        type="text"
        value={inputValue}
        onChange={(evento) => setInputValue(evento.target.value)}
    />
    <button
        className="add-button" onClick={handleAdd}
    >
        Agregar
    </button>
    <ul>
        <ToDoItem todo='Item Dinamico' handleDelete={(e)=> console.log('Borre item')}/>
        <li>
        Item 1
        <button>Eliminar</button>
        </li>
        <li>
        Item 2
        <button>Eliminar</button>
        </li>
        <li>
        Item 3
        <button>Eliminar</button>
        </li>
    </ul>
    </div>
)
}
export default ToDoList