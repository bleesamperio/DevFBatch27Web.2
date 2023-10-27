/**En base a "esDiaLaborable". definir si "Nos sabemos la de chambear | trabajar o Descansar" */

const esDiaLaborable = false

//Espected Output/Salida esperada en la consola: "Trabajar" o "Descanar"

/*const mensaje = (esDiaLaborable === true) ? "Se chambea" : "A echar la hueva"
console.log(mensaje);*/

//ACORTAR CODIGO

const mensaje = esDiaLaborable ? "Se chambea" : "A echar la hueva"
console.log(mensaje);
/** NOTA: Existen 6 valores falsy....
 * A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string), and false of course.
 */