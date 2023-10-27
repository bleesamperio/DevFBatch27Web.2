//Las promesas son objetos que representan un valor que puede estar disponible en un tiempo indefinido. Por naturaleza, son estructuras asincronas. 

//1.- Crear las estructura de una promesa
const promesa = new Promise(function(resolve, reject){
    //LAs promesas contienen dos metodos
    resolve()
    reject()
})

//2.- Consumir la promesa
promesa.then(function (response) {
    //Codigo
    console.log(response);
}).catch(function (error) {
    console.error(error)
})