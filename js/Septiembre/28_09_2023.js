function calculoNumero(){
    let base = prompt("Introduce un numero base");
    let exponente = prompt("Introduce el numero exponente");
    
    console.time("pow");
    let resultado = Math.pow(base, exponente);
    console.log("pow"+resultado);
    console.timeEnd("pow");

    console.time("start");
    let resultadoFor;
    if(exponente > 2){
        for(let i=0; i<exponente; i++){
            resultadoFor= base*base;
        }
    }else if(exponente == 0){
        resultadoFor=1;
    }else if(exponente == 1){
        resultadoFor=base;
    }
    
    console.log( "start "+ resultadoFor);
    console.timeEnd("start");

}  

function estadisticas(){
    let numeroA = parseInt(prompt("Introduce el primer valor"));
    let numeroB = parseInt(prompt("Introduce el segundo valor"));
    let numeroC = parseInt(prompt("Introduce el tercer valor"));

    let arrayNumero = [];

    arrayNumero.push(numeroA, numeroB, numeroC);

    arrayNumero.sort();

    console.log("menor "+ Math.min(...arrayNumero));
    console.log("mediano "+ arrayNumero[Math.round(arrayNumero.length/2)]);
    console.log("mayor "+ Math.max(...arrayNumero));
    let suma = 0;
    for(let i=0; i<arrayNumero.length; i++){
        suma = suma + arrayNumero[i];
    }
    let promedio = suma/parseInt(arrayNumero.length);
    console.log("promedio "+ Math.round(promedio));
    console.log("promedio con decimales " + promedio.toFixed(2));
    
}

