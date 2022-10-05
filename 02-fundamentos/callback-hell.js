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

// * Funcion para traer la informacion de un empleado
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id )?.nombre;
    if (empleado) {
        // ! null en caso de que no exista algun error
        callback (null, empleado);
    } else {
        callback (`Empleado con id ${id} no existe`);
    }
}

// * Mismo resultado que la función de arriba
/*
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id );
    if (empleado) {
        // ! null en caso de que no exista algun error
        callback (null, empleado.nombre);
    } else {
        callback (`Empleado con id ${id} no existe`);
    }
}
*/

// * Funcion para traer el sueldo del empleado
const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    if (salario) {
        callback (null, salario)
    } else {
        callback (`Empleado con id ${id} no tiene salario asignado`);
    }
}

const id = 3;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('Error!');
            return console.log(err);
    }
    getSalario(id,(err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    })
})

