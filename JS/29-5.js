
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
     dni = parseInt(prompt('Introduce el número del DNI'));
               letra_in = prompt('Introduce la letra').toUpperCase();

               if ((dni >= 0) && (dni <= 99999999)) {
                   letra_calculada = letras[dni%23];
                   if (letra_in == letra_calculada) {
                       document.getElementById('resultado').innerHTML = "<p style='color:red;font-size:1.6em'>El dni es " + dni + " con letra " + letra_calculada + '</p>';
                       alert('El dni es ' + dni + ' con letra ' + letra_calculada);
                   } else {
                       alert('La letra ' + letra_in + ' no coincide con la calculada → ' + letra_calculada) ;
                   }
               } else {
                   alert('No es correcto el valor introducido');
               }
           }
           input_dni();
        <div id="resultado"></div>
}