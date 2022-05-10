//console.log('hola mundo')

let miPrimeraVariable = 'Mi primera variable!'
//console.log(miPrimeraVariable);

miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);


// Boolean
let miBoolean = true
let miOtroBoolean = false

//Números

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

//console.log(miBoolean, miNumero, miNumero2, miPrimeraVariable, miNumero3);

//UNDEFINE
let undef
//console.log(undef);

//NULL
let nulo = null
//console.log(nulo);

//OBJETO
const miPrimerObjeto = {}//vacio

const miObjeto = {
    unNumero: 12,
    unString: 'Esto es una cadena de caracteres',
    unaCondicion: true,
}
//console.log(miObjeto);
//console.log(miObjeto.unNumero);

//ARREGLO
/*
const arrVacio = []//vacio
const arr = [1, 2, 'Hoola', miObjeto]
//console.log(arrVacio, arr);

arr.push(5)
//console.log(arr);

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('hola')
arrVacio.push(miPrimeraVariable)
//console.log(arrVacio);

const suma = 1 + 2
const resta = 1 - 2
const multiplicar = 2 * 3
const dividir = 9 / 3
//console.log(suma, resta, multiplicar, dividir);

const modulo = 10 % 3
//console.log(modulo);

let num = 5
//num++
//num--
num += 5
num -= 5
num *= 5
num /= 2*/

//console.log(num);



//operadores de compraración

//Igualdad estricta
const resultado1 = 5 === 6
//console.log(resultado1);

//Igualdad no estricta (strings pueden ser iguales a numeros si el valor es el mismo)

const resultado2 = 5 == 5
//console.log(resultado2);
const resultado3 = 5 == '5'
//console.log(resultado3);

const resultado4 = 5 < 6
const resultado5 = 5 < 4
//console.log(resultado4, resultado5);

const resultado6 = 5 > 6
const resultado7 = 5 > 4
//console.log(resultado6, resultado7);

const resultado8 = 5 <= 5
const resultado9 = 5 <= 6
//console.log(resultado8, resultado9);

const resultado10 = 5 >= 5
const resultado11 = 5 >= 6
//console.log(resultado10, resultado11);

const resultado12 = 5 !== 6
const resultado13 = 5 != '5'
//console.log(resultado12, resultado13 );

//operadores de lógicos

//or ||, and &&, not !

//const resultadoOr = false || true
//console.log(resultadoOr);

const resultadoAnd = false && true
//console.log(resultadoAnd);

const resultadoNot = !false
//console.log(resultadoNot);

const resultadoOr = false || false || 'Hola' || 'Mundo'
//console.log(resultadoOr);

//CONTROL DE FLUJO

//if
/*const edad = 35
if (edad < 36 && edad > 34) {
    console.log('Si lo es');
}else{
    console.log('No lo es')
}*/

//while
/*let x = 0
while (x < 5) {
    //console.log(x)
    x++
}*/
//console.log('terminando el loop!')

//let y = true
//while (y < 5) {
//console.log(y)
//y = false
//}
//console.log('terminando el loop!')

//SWITCH
/*let y = 2 

switch (y) {
    case 1: {
        console.log('yo soy caso 1');
        break;
    }
    case 2: {
        console.log('happy');
        break;
    }
    case 3:
        console.log('sad');
        break;

    default:
        console.log('yo estoy');
        break;
}*/

//FOR

/*for(let i = 0; i < 10; i++){
console.log(i);
}*/

//ACCESO ARREGLOS

//const numeros = [1, 2, 3, 'Hola', 5]

//console.log(numeros[0])

//for(let i = 0; i < numeros.length; i++){
//   console.log(numeros [i]);
//}

/*function iterar() {
    const numeros = [1, 2, 3, 'Hola', 5]
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

iterar()
iterar()*/
/*function iterar2(arg1) {
    for (let i = 0; i < numeros.length; i++) {
        console.log(arg1[i]);
    }
}

const numeros = [1, 2, 3, 4, 5]
const nombres = ['Pedro', 'Juan', 'Felipe', 'Red', 'Ash']

iterar2(nombres)
iterar2(numeros)
*/
function suma(a, b){
    return a + b;
}

const resultadoSuma1 = suma(1,2)
const resultadoSuma2 = suma(5,6)
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)
console.log('resultado', resultadoSuma3);