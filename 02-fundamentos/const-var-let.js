var nombre = 'Juan';// estas son variables de tipo global
if (true) {
    var nombre = 'Manuel';
}
console.log(nombre);

//**//
let nombre2 = 'Ivan';// nueva forma de declarar variables en un entrono
if (true) {
    let nombre2 = 'Ruben';// esta variable no se muestra por que no utiliza en el mismo ambiente
}

console.log(nombre2);

//**//
const nombre3 = 'Jesus';// se usa cuando el valor siempre sera constante y no cambia
if (true) {
    const nombre3 = 'Ivan';// esta variable no se muestra por que no utiliza en el mismo ambiente
}

console.log(nombre3);