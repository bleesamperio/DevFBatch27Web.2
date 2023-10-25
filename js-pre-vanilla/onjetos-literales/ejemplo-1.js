/**La desestructuracion de objetos literales en JSON, te permite extraer propiedades de un objeto y asignarlas a variables/constantes individuales de manera mas conveniente*/

const persona = {
    nombere: "Cinthya",
    Edad: 20,
    Ciudad: "La mejor ciudad"
}

//Desestructuracion

let {nombere, Edad, ciudad} = persona

console.log(Edad);