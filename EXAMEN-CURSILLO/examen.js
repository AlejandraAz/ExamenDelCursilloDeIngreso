//1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

// Teniendo una variable numérica que representa el número de lados de una figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.

// 2- Mejorar el ejercicio anterior con manejo de errores:

// Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, verifique que el número de lados sea válido (mayor o igual a cero). Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando que el número de lados no es correcto.

// 3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

// Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
//  (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .

// IMPORTANTE: resolver el enunciado de la forma que creas conveniente, si deseas organizarlo usando una o mas funciones o escribir el código directamente



let numDeLados = parseInt(prompt('Ingrese el número de lados de la figura:'));
let largoDeLados = parseInt(prompt('Ingrese el largo de los lados de la figura geometrica'));



function figuraGeometrica(numDeLados,largoDeLados) {
    if(isNaN(numDeLados) || numDeLados < 0 || isNaN(largoDeLados) || largoDeLados < 0){
        alert('⚠️ Debes ingresar números positivos enteros.')
    }

    switch (true) {
        case numDeLados === 0:
            let perimetroCirculo = (2 * Math.PI * largoDeLados);
            alert(`La figura geometrica es un: CIRCULO , y su perimetro es: ${perimetroCirculo.toFixed(2)}`)
            break;
            case numDeLados === 3:
                let perimetroTriangulo = (3 * largoDeLados)
                alert(`Es un TRIANGULO, y su perimetro es: ${perimetroTriangulo}`)
                break;
                case numDeLados === 4:
                    let perimetroCuadrado = (4 * largoDeLados)
                    alert(`Es un CUADRADO, y su perimetro es: ${perimetroCuadrado}`)
                break;
                case numDeLados === 5:
                    let perimetroPentagono = (5 * largoDeLados)
                    alert(`Es un PENTAGONO, y su perimetro es: ${perimetroPentagono}`)
                break;
                case numDeLados === 6:
                    let perimetroHex = (6 * largoDeLados)
                    alert(`Es un HEXAGONO, y su perimetro es: ${perimetroHex}`)
                break;
                case numDeLados > 6:
                    let perimetro = (numDeLados * largoDeLados)
                    alert(`Es un POLIGONO, y su perimetro es: ${perimetro}`)
                break;
                default:
                    alert('No existe tal figura')
                    break;
    }
}

figuraGeometrica(numDeLados,largoDeLados);






