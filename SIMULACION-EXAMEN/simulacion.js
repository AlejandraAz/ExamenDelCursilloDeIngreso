// Ejercicio:

//Crear una función que reciba como parámetro una nota y retorne una de 
// estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

// Nota es menor a 4 - LIBRE
// Nota es menor a 7 y no es LIBRE - REGULAR 
// Nota mayor que 6  - PROMOCIONADO.


let nota1 = parseInt(prompt('Ingrese la primer nota obtenida:'));
let nota2 = parseInt(prompt('Ingrese la segunda  nota obtenida:'));
let nota3 = parseInt(prompt('Ingrese la tercer nota obtenida:'));
let promedio = (nota1 + nota2 + nota3) / 3;

function Califaciones(nota1,nota2,nota3) {
    
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) 
    || nota1 <= 0 || nota1 > 10 
    || nota2 <= 0 || nota2 > 10
    || nota3 <= 0 || nota3 > 10){
        alert('Dato ingresado incorrecto ⚠️');
    }
    else if(promedio < 4 ){
        alert(`Tu promedio es ${promedio.toFixed(0)}, tu condición es: LIBRE.`)
        return promedio
    }else if(promedio >= 4 && promedio < 6){
        alert(`Tu promedio es ${promedio.toFixed(0)}, tu condición es: REGULAR.`)
        return promedio
    }else {
        alert(`Tu promedio es ${promedio.toFixed(0)}, tu condición es: PROMOCIONADO.`)
        return promedio
    }
}
Califaciones(nota1,nota2,nota3);

