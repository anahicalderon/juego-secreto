let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



//Desafío

//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada 
//"lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
//'Java', 'Ruby' y 'GoLang

lenguajesDeProgramacion.push( 'Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la 
//lista "lenguagesDeProgramacion.

function mostrarLenguajes(){
    console.log(lenguajesDeProgramacion);  
}

mostrarLenguajes();

//Crea una función que muestre en la consola todos los elementos de la 
//lista "lenguagesDeProgramacion en orden inverso.

function reverseArray(){
    let array1 = lenguajesDeProgramacion.reverse();
    console.log(array1);
}

reverseArray();

//Crea una función que calcule el promedio de los elementos en una 
//lista de números.

let numeros = [5,6,9,8,7,4]; 
let numeros2 = [5,1,3,4,1,2]; 

function promedioNumeros(){
let sumaTotal = numeros.reduce((total,numero) => {
    return total + numero / numeros.length
}, 0);
console.log(sumaTotal);
}

promedioNumeros();

//Crea una función que muestre en la consola el número más grande 
//y el número más pequeño en una lista.

function mayorMenor(){
    let pequeno = Math.min(...numeros);
    console.log(pequeno);
    let grande = Math.max(...numeros);
    console.log(grande);
}

mayorMenor();


//Crea una función que devuelva la suma de todos los elementos en una lista

function sumaNumeros(){
    let sumaTotal = numeros.reduce((total,numero) => {
        return total + numero
    }, 0);
    console.log(sumaTotal);
    }

    sumaNumeros()

    //Crea una función que devuelva la posición en la lista donde se 
    //encuentra un elemento pasado como parámetro, o -1 si no existe 
    //en la lista.

    function position(numero){
        if(numeros.includes(numero)){
            let posicion = numeros.indexOf(numero);
            console.log(posicion)
        }else{
            console.log("-1")
        }
    }

    position(1);

    //Crea una función que reciba dos listas de números del mismo 
    //tamaño y devuelva una nueva lista con la suma de los elementos 
    //uno a uno.

    function sumaArrays(){
        let array3 = numeros.concat(numeros2);
        console.log(array3);
        let suma = array3.reduce((total,numero) => {
            return total + numero
        }, 0);
        console.log(suma)
    }

    sumaArrays();

    //Crea una función que reciba una lista de números y devuelva una 
    //nueva lista con el cuadrado de cada número.

    function cuadradoNumeros(){
        numeros.forEach(numero => console.log(numero));
    }

    cuadradoNumeros();