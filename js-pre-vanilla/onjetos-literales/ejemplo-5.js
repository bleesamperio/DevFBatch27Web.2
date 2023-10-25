/**Desestructuracion de objetos como parametros*/

function imprimirInformacion({nombre, edad}) {
    console.log(`Nombre: ${nombre}, $Edad: ${edad}`);    
}

const persona = {
    nombre: "Enrique",
    Edad: 20,
    Ciudad: "Ragnarok"
}

imprimirInformacion(persona)

/**En este caso estamos pasando un objeto como argumento a la funcion "imprimirInformacion", y luego desestructuramos el objeto directamente en los parametros de la funcion para acceder a las propiedades dentro de la funcion*/