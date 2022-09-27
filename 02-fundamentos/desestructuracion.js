// Creacion de objeto
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 50,
    getNombre() { //creación de metodo
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
console.log (deadpool.getNombre()) //usando el template literal

// otra opcion distinta al template literal
/*
const nombre   = deadpool.nombre
const apellido = deadpool.apellido
const poder    = deadpool.poder

console.log(nombre, apellido, poder)
*/

// otra opcion con desestructuracion
/*
const {nombre, apellido, poder } = deadpool

console.log(nombre, apellido, poder)
*/

// otra opcion de desestructuracion
/*
const {nombre, apellido, poder, edad = 0 } = deadpool

console.log(nombre, apellido, poder, edad)
*/

// otra opcion mediante funcion
/*
function imprimeHeroe( heroe ) {
    const {nombre, apellido, poder, edad = 0 } = deadpool
    console.log(nombre, apellido, poder, edad)
}

imprimeHeroe(deadpool)
*/

// otra opcion mediante funcion desestructuracion
function imprimeHeroe({nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad)
}

imprimeHeroe(deadpool)

// Desestructura de arreglos opcion 1
const heroes = ['Deadpool', 'Superman', 'Batman']
const h1 = heroes[0]
const h2 = heroes[1]
const h3 = heroes[2]

console.log(h1, h2, h3)

// Desestructura de arreglos opcion 2
const heroes2 = ['Deadpool', 'Superman', 'Batman']
const [, , h6] = heroes2

console.log(h6)