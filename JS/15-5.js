let nume = 556;
function ejemplo(params) {
    let inp = document.querySelector("#enter");
    let p = document.querySelector("#salida");
    let divImg = document.querySelector("#img");
    divImg.innerHTML = '<img src="../IV/descarga.jpg" alt="error"/>'
    let valor = inp.value;
    p.innerText = valor;
    console.log(p.value);
    console.log(valor);
    console.dir(inp);
    console.log(nume);
    let r = nume;
    console.log(r);
}
