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

        const handleDelete = (indiceTarea)=>{
            setTareas(tareas.filter((tarea, indice)=> indice!== indiceTarea))
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
                {tareas.map((tarea, indice)=>(
                    <ToDoItem todo={tarea} handleDelete={() => handleDelete(indice)} key={indice} />
                ))}
            </ul>
        </div>
    )
}
export default ToDoList