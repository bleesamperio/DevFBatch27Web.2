/**Definir valores por defecto*/

const persona = {
    nombere: undefined,
    Edad: 20,
    Ciudad: "La mejor ciudad"
}

let {edad = 30, nombre = "Usuario"/*Valor por default*/} = persona

console.log(edad);