/** Crear una promesa y consumirla para llevarle un helado a un amigo si la heladeria esta abierta*/

let heladeriaAbierta = false
/**Formas de usar proesas
 * 1.- Crear las reglas de las promesa. No puede tocar hacerlo o no.
*/

const traerHelado = new Promise(function (resolve, reject) {
    //Logica de la promesa
    if (heladeriaAbierta){
        resolve("Ten, te traje un helado porque estaba abierta la heladeria")
    } else(
        reject("No te traje el helado, porque no estaba abierta la heladeria")
    )
})

//2.- Recibir una promesa como respuesta. 
traerHelado.then(function (response) {
    //Codigo...
    console.log(response);
}).catch(function (error) {
    console.error("Heladeria: " + error);
})