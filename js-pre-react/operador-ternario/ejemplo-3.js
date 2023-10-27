//Retornar un valor en una funcion
function esPAR(numero){
    //En base a una condicion de operador ternario, retornar: "Es par" o "Es impar"
    return (numero % 2 === 0) ? "Es par" : "Es impar"
}

console.log(esPAR(50));