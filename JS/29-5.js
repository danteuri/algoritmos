
//Ejercicio 1
function meses123() {
    let meses123 = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    for(let i= 0; i < meses123.length; i++){
        console.log(meses123[i]);
    }
}
//Ejercicio 2
function elpepe(){
var valores = [true, 5, false, "hola", "adios", 2];
var aux = [];
var posicion = 0;
var valor = "";

for (let i = 0; i < valores.length; i++){
    if(typeof(valores[i]) == "string"){
        aux.push(valores[i]);
    }
}

for (let  i = 0; i < aux.length -1; i++) {
    if (aux[i].length > aux[i+1].length && i+1 < aux.length) {
        posicion = i;
        valor = aux[i + 1];
    }
}

console.log("el mayor es "+valor);

if (valores[3].length > valores[4].length) {
    console.log("hola es mayor");
}
else{
    console.log("adios es mayor");
}
}

//Ejercicio 3
function esta(){
var numero1 = 5;
var numero2 = 8;
    if(numero1 < numero2) {
        console.log("numero1 no es mayor que numero2");
    }
    if(numero1 > 0) {
        console.log("numero2 es positivo");
    }
    if(numero1 > 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
    if (numero1 + 1 <= numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
    }
}

//Ejercicio 4
function alanhacked() {

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];
var dni, letra_in, letra_calculada;

 function input_dni() {
     dni = parseInt(prompt('Introduce el número del DNI menor a 8 digitos'));
               letra_in = prompt('Introduce el numero divisor').toUpperCase();

               if ((dni > 0) && (dni <= 99999999)) {
                   letra_calculada = letras[dni%23];
                   if (letra_in == letra_calculada) {
                       document.getElementById('resultado').innerHTML = "<p style='color:red;font-size:1.6em'>El dni es " + dni + " con letra " + letra_calculada + '</p>';
                       console.log('El dni es ' + dni + ' con letra ' + letra_calculada);
                   } else {
                       console.log('La letra ' + letra_in + ' no coincide con la calculada → ' + letra_calculada) ;
                   }
               } else {
                   console.log('No es correcto el valor introducido');
               }
           }
           input_dni();
}

//Ejercicio 5

function ejercicio5 (){
    var num = parseInt(prompt('ingresar numero factorial'));
    var aux = 1;
    for(let i= num; i > 0;i--){ 
        aux = aux * i; 
    }
        console.log(aux); 
        console.log(as)
}

//Ejercicio 6

function Ejercicio6() {
    var num = parseInt(prompt('Ingresa un numero entero que sea par o impar'));
    if ((num % 2) != 0) {
        console.log('el numero ingresado es impar')
    }
    else{
        console.log('su numero ingresado es par')
    }
}

//Ejercicio 7
//Definir una función que muestre información sobre una cadena de texto que se le pasa
//como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
//está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
function Ejercicio7() {
    var cadena = parseInt(prompt('Introduce tu cadena de texto'))
    let minuscula = 0;
    let mayuscula = 0;
   
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charCodeAt(i) > 64 && cadena.charCodeAt(i) < 91) {
            mayuscula++;
        } else if (cadena.charCodeAt(i) > 96 && cadena.charCodeAt(i) < 122){
            minuscula++;
        }
    }

    if (mayuscula > 0 && minuscula > 0) {
        console.log("Es una mezcla de ambas.");
    }else if (mayuscula == 0 && minuscula > 0) {
        console.log("Formado sólo por minúsculas.");
    }else if (mayuscula > 0 && minuscula == 0) {
        console.log("Formado sólo por mayusculas.");
    }
}
