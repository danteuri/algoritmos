
//Ejercicio 1
function meses123() {
    let meses123 = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    console.log(meses123);
}
//Ejercicio 2
function elpepe(){
var valores = [true, 5, false, "hola", "adios", 2];
var aux = [];
for (let i = 0; i < valores.length; i++){
    if(typeof(valores[i]) == "string"){
        aux.push(valores[i]);
    }
}
console.log(valores);
}