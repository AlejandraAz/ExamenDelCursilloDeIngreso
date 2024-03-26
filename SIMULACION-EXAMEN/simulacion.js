// Ejercicio:

//Crear una función que reciba como parámetro una nota y retorne una de 
// estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

// Nota es menor a 4 - LIBRE
// Nota es menor a 7 y no es LIBRE - REGULAR 
// Nota mayor que 6  - PROMOCIONADO.


let nota = parseInt(prompt('Ingrese la nota obtenida:'));

function Califaciones(nota) {
    
    if(isNaN(nota) || nota <= 0 || nota > 10){
        alert('Dato ingresado incorrecto ⚠️');
    }
    else if(nota < 4){
        alert(`Tu nota es ${nota} tu condición es: LIBRE.`)
    }else if(nota >= 4 && nota < 6){
        alert(`Tu nota es ${nota} tu condición es: REGULAR.`)
    }else {
        alert(`Tu nota es ${nota} tu condición es: PROMOCIONADO.`)
    }
}
Califaciones(nota);

