/**Desestructuracion anidada */

const persona = {
    nombere: undefined,
    Edad: 20,
    Ciudad: "La mejor ciudad",
    direccion: {
        calle:"Calle principal",
        colonia: "Colonia Bonita",
    }
}

//Desestructuracion anidada
const {nombere = "Luna", direccion: {calle}} = persona
console.log(nombre);