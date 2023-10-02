// JavaScript source code
function saludo(){
    alert("hola mon");
}

function saludoInicial() {
    alert("hola a todos..¡¡¡")
}

function encima() {
    alert("Que divertido..¡¡");
}

function arrastrame() {
    alert("nos vemos en el infierno");
}

function mensaje() {
    let datos = document.getElementById("data").value;
    document.getElementById("demo").innerHTML = "bienvenida: " + datos;

}

function tabla() {
    let numero = document.getElementById("numero").value;
    console.log(numero);
    for (var valor = 1; valor <= 10; valor++) {
        var resultado = valor * numero;
        console.log(valor+"x"+ numero +"= "+resultado);
    }
    
}