import { useState } from "react"
const ToDoList = () => {

const handleAdd = ()=>{
    console.log('agregue:', inputValue);
}
const [inputValue, setInputValue] = useState('')
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