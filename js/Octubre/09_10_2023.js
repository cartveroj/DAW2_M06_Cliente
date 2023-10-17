function entradaDuracionLlamada(){
    let horas = parseInt(prompt("introduce horas"));
    let minutos = parseInt(prompt("introduce minutos"));
    let segundos = parseInt(prompt("introduce segundos"));

    let totalHr = horas * 3600;
    let totalMin = minutos * 60;
    let totalSumaSegundos = (segundos + totalHr + totalMin)/60;

    let costeEstLlamada = 0.10;
    let totalGasto = costeEstLlamada + totalSumaSegundos * 0.05;
        
    console.log(totalGasto.toFixed(2));

}

function entradaValoresToRGB(){
    let valor1 = parseInt(prompt("introduce un valor1 (R) entre 0-255"));
    let valor2 = parseInt(prompt("introduce valor2 (G) entre 0-255"));
    let valor3 = parseInt(prompt("introduce valor3 (B) entre 0-255"));

    let hexadecimal = valor1.toString(16).padStart(2,'0')+
                     valor2.toString(16).padStart(2,'0')+
                     valor3.toString(16).padStart(2,'0');
    console.log( `(R=${valor1},G=${valor2},B=${valor3}) = #`+hexadecimal.toUpperCase());
}

function calculoCambioDinero(){
    let valor1 = parseFloat(prompt("Introduce precio producto formato 0.00 euros"));
    let valor2 = parseFloat(prompt("Introduce dinero del cliente formato 0.00 euros"));

    let diferencia = valor2-valor1;
    const arrayValores = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];
    let textRespuesta = "";

    for(let i=0; i< arrayValores.length; i++){
        let tipoEfectivo = arrayValores[i];
        resultado = Math.floor(diferencia/tipoEfectivo);
        if(resultado > 0){
            if(tipoEfectivo >= 5){
                textRespuesta= resultado+" billetes de: "+ tipoEfectivo;
            }else{
                textRespuesta= resultado+" monedas de: "+ tipoEfectivo;
            }
            console.log(textRespuesta);
            diferencia = (diferencia - resultado * tipoEfectivo).toFixed(2);
        }
    }

    console.log(`preu= ${valor1} dineroCliente= ${valor2}`);
    console.log(`Total cambio: ${valor2-valor1}`);

}