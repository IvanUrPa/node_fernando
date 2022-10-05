// * Callback tradicional
setTimeout(function(){
    console.log('Hola Mundo')
}, 1000);


// * Callback con función de flecha
setTimeout(() =>{
    console.log('Hola Mundo 2')
}, 3000);


// * callback como parametro
const getUsuarioByID = (id, callback) => {
    const user = {
        id,
        nombre: 'Ivancho'
    }
    setTimeout(()=> {
        callback(user)
    }, 1500)
}

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
});