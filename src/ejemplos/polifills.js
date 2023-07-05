const users = [
{
    id: 1,
    nombre: 'fede',
    edad: 34
},
{
    id: 2,
    nombre: 'juan',
    edad: 23
},
{
    id: 3,
    nombre: 'pepe',
    edad: 50
}
];

//const resultado = users.find( (user) => user.nombre === 'juan'); // itera el array de principio a fin el array
//console.log(resultado);

function encontrar(arr, fn) { // como el find
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (fn(current) === true) {
            return current
        }
    }
}

function filtrar(arr, fn){ // es como el filter
    let filter = []
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (fn(current) === true) {
            filter.push(current)
        }
    }
    return filter
}

const resultado = encontrar(users, (user) => user.nombre === 'juan');
console.log(resultado);
const resultado1 = filtrar(users, (user) => user.nombre === 'juan');
console.log(resultado1);

//crear metodos para arrays

Array.prototype.encontrar = function encontrar(fn) { 
    for (let i = 0; i < this.length; i++) {
        let current = this[i]
        if (fn(current) === true) {
            return current
        }
    }
}

console.log(users.encontrar((user) => user.id === 2));

