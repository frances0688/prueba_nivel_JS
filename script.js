// 1. Ejercicio 1 (1pts) Se debe trabajar con una variable que contiene la
// información: “The Bridge 2023” Muestra por consola la longitud de la variable
// Utilizando esta variable muestra por consola solo “The Bridge”
const varName = 'The Bridge 2023';
console.log('variable length: ' + varName.length);
console.log(varName.substring(0,10))


// 2. Ejercicio 2 (2pts) Define una variable culpable que sea de tipo booleano.
// Crea una condición en la que sí culpable es verdadero se muestre por consola
// “Es culpable” y sino que muestre por consola “No es culpable”
const guilty = true;
guilty ? console.log('Es culpable') : console.log('No es culpable')


// 3. Ejercicio 3 (2pts) Crea una función que pasándole por argumento un nombre
// me devuelva "Hola" y el nombre que le he pasado. Ejemplo: Llamó a la función
// saludar(“Sofía”) y me muestra por consola: "Hola soy Sofía". Si la función no
// recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con
// un string'
function greeting(name) {
    if (typeof name !== 'string') {
        console.log('Function must be executed with a string')
    } else {
        console.log(`Hello, I'm ${name}`)
    }
}


// 5. Ejercicio 5 (2pts) Dada la siguiente array: [1,2,3,4,5,6,7,8,9,10]; crea
// una función que devuelva solo los números pares. Resultado esperado: [2, 4, 6,
// 8, 10]
function onlyEven(arr) {
    let evenNums = [];
    arr.forEach(el => {
        if (el%2==0 ){
            evenNums.push(el);
        }
    });
    return evenNums;
}


// 6. Ejercicio 6 DOM (2 pts) Cambiar el contenido de un elemento HTML: Cambia
// el contenido de un elemento <p> HTML con el id "miParrafo" por el texto "Nuevo
// texto". Cambia el color y el grosor de la letra del párrafo con el id
// "miParrafo". El color debe ser rojo y el grosor debe ser negrita. Crea una
// lista desordenada en el HTML vacía con el id "miLista". Después añádele desde
// javascript un elemento de <li> a la lista. El nuevo elemento debe contener el
// texto "Nuevo elemento de lista". Crea una función que muestre una alerta con
// el mensaje "¡Has hecho clic en el botón!" cuando se haga clic en el botón
// con el id "miBoton".
let paragraph = document.getElementById('myParagraph');

paragraph.innerHTML = 'New Text';
paragraph.style.color = 'red';
paragraph.style.fontWeight = 'bold';

let myList = document.getElementById('myList')
let newListItem = document.createElement("li");
newListItem.textContent = 'New list element';
myList.appendChild(newListItem);

let btn = document.getElementById('myButton');
function btnAlert (e) {
    alert("You've clicked on the button!")
}

btn.addEventListener('click', btnAlert)