import { useState } from "react"

const ToDoList = () => {
    const[inputValue, setImputValue] = useState('')




return (
    <div>
        <h1>Lista de tareas</h1>
        <input 
        type="text" 
        value={inputValue} 
        onChange={(evento)=>setImputValue(evento.target.value)}
        />
    </div>
)
}

export default ToDoList