// funcion tradicional
function sumar (a,b) {
    return a + b
}

console.log(sumar(5,10))


// funcion con flecha
const sumar2 = (c, d) => {
    return c + d
}

console.log(sumar2(21, 5))

// otra forma de expresar funcion flecha
const sumar3 = (e, f) => e + f

console.log(sumar3(11, 4))


// funcion flecha sin retorno de variables
const saludo = () => 'Hola Ivancho'

console.log(saludo())