
function obtenerDataActual(){
    let fecha = new Date();
    // Fecha
    let mes = (fecha.getMonth() == 9) ? 10 : 0 ;
    document.write("La fecha de hoy es: "+ fecha.getDate() + " del mes "+ mes + " del año "+ fecha.getFullYear()+ "<br>" );
    let numeroSemana= Math.ceil((fecha - new Date(2023,0,1)) / 604800000); 

    document.write("el numero de la semana "+ numeroSemana+" <br>");
    let numeroDiasHastaHoy = Math.floor((fecha - new Date(2023,0,1)) / 86400000);
    console.log("semanas"+numeroDiasHastaHoy/7);
    let porcentajeDias = (numeroDiasHastaHoy*100/365).toFixed(2)
    document.write("el % de dias transcurridos del año es: " + porcentajeDias + " % <br>");
    let porcentajeDiasPendientes = (100 - porcentajeDias).toFixed(2) ;
    document.write("el % de dias pendientes del año es: " + porcentajeDiasPendientes + " % <br>");
    //Hora
    document.write("La hora es: " + fecha.getHours() +":"+ fecha.getMinutes()+ ":"+fecha.getSeconds()+ "<br>");
    let totalMinutos = (fecha.getHours()*60 )+ fecha.getMinutes() + (fecha.getSeconds() / 60);
    console.log(totalMinutos);
    let porcentajeMinutosDeHoy = ((totalMinutos * 100) / 1440).toFixed(2);
    document.write("% de dia transcurrido: "+ porcentajeMinutosDeHoy +"% <br>" );
    let porcentajePendienteMinutosDeHoy = (100 - porcentajeMinutosDeHoy).toFixed(2);
    document.write("% de dia transcurrido: "+ porcentajePendienteMinutosDeHoy +"% <br>" );


}

//8 o 13 cifras si nos proporcionan menos de 8 rellenas a 8, mas de 8 rellenar al 13 con ceros
// se calcula por la derecha hacia la izquierda y se multiplica el primero * 3 y el de atras 
// *1 y (pares *1 y impares * 3)asi sucesivamente al final sumar y el resultado sera la diferencia al siguiente 
// es decir si es 88 al 90 la diferencia es 2 ese sera el octavo numero 
//out -> numero correcte o numero incorrecte 

function verificadorDeCodigoDeBarras(){
    let codigoBarras = prompt("Válide el codigo de barras, longitud max 13");
    let sumaDigitos= 0;
    let clave = 0;
    
    if(codigoBarras.length > 13){
        document.write("Codigo de barras incorrecto supera la longitud maxima (13 digitos)");
    }else{
        if(codigoBarras.length < 8){
            codigoBarras = codigoBarras.padStart(8,'0');
            console.log(codigoBarras);
        }else if (codigoBarras.length > 8 && codigoBarras.length < 13) {
            codigoBarras = codigoBarras.padStart(13,'0');    
        }
        
        sumaDigitos= sumaNumeros(codigoBarras);
        if(sumaDigitos > 0){
            clave = calculoClave(sumaDigitos);
        }else{
            clave = 0;
        }
        let posicion = codigoBarras.length-1;
        if(clave == codigoBarras.charAt(posicion)){
            document.write("Codigo de barras correcto");
        }else{
            document.write("Codigo de barras incorrecto");
        }
    }
}

function sumaNumeros(codigoBarras){
    let suma = 0;
    let array = codigoBarras.split('');
    let arrayInvertidoCodigo = array.reverse();
    console.log(arrayInvertidoCodigo);
        for(let i = 1 ; i < arrayInvertidoCodigo.length  ; i++){
            if( i%2 == 0){
                 suma = (parseInt(arrayInvertidoCodigo[i]) * 1) + suma;
            }else{
                 suma = (parseInt(arrayInvertidoCodigo[i]) * 3) + suma;
                 
            }
        }
    return suma;
}
function calculoClave(suma){
    let contador = 1;
    let resultado = 0;
    while(true){
        let multiplo = contador++ * 10;
        if(multiplo > suma){
            resultado = suma - multiplo;
            if(resultado<0){
                break;
            }
        }  
    }
    return Math.abs(resultado);
}








