
//Ejercicio 1
function meses123() {
    let meses123 = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    console.log(meses123);
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

for(let  i = 0; i < aux.length -1; i++) {
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