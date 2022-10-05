//Lista de empleados (arreglo)
const empleados = [
    {
        id: 1,
        nombre: 'Ivan'
    },
    {
        id: 2,
        nombre: 'Ruben'
    },
    {
        id: 3,
        nombre: 'Carlos'
    }
];

//Lista de salarios empleados
const salarios = [
    {
        id: 1,
        salario: '1000'
    },
    {
        id: 2,
        salario: '1500'
    }
];

// * Sustituir funcion por promesa
/*const getEmpleado = (id, callback) => {

    // ? resolve se ejecuta si todo esta correcto, reject se usa si ocurre algun error
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id )?.nombre;
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe el empleado con el id ${id}`);
        }
    });
    return promesa;
}*/

// * Codigo optimizado de la promesa
const getEmpleado = (id, callback) => {

    // ? resolve se ejecuta si todo esta correcto, reject se usa si ocurre algun error
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id )?.nombre;
        // ! Ternario o if simplificado
        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con el id ${id}`);
    });
}

// Promesa para el salario
const getSalario = (id, callback) => {

    // ? resolve se ejecuta si todo esta correcto, reject se usa si ocurre algun error
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id )?.salario;
        // ! Ternario o if simplificado
        (salario)
            ? resolve(salario)
            : reject(`No hay salario asignado para el empleado con el id ${id}`);
    });
}

const id = 3;

// Opcion 1
/* getEmpleado(id)
.then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));
*/

// * Opcion 2
getEmpleado(id)
.then(empleado => {
    getSalario(id)
        .then(salario => {
            console.log('El empleado:', empleado, 'tiene un salario de:', salario);
        })
        .catch(err => console.log(err))
})
.catch(err => console.log(err))