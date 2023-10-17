function entradaDatos(){
    let numeroUno = parseInt(prompt("Introduce un numero"));
    let numeroDos = parseInt(prompt("Introduce otro numero"));
    let valor = 100;
/* se calcula el valor absoluto de la diferencia para calcular 
el valor mas cercano a 100 */
    let diferenciaUno = Math.abs(valor - numeroUno);
    let diferenciaDos = Math.abs(valor - numeroDos);

    if(diferenciaUno < diferenciaDos){
        console.log("El numero más cercano al 100 es: " + numeroUno);
    }else{
        console.log("El numero más cercano al 100 es: " + numeroDos);
    }
    
}

function entradaHoraMinSeg(){
    let hora = parseInt(prompt("Introduce la hora"));
    let minutos = parseInt(prompt("Introduce los minutos"));
    let segundos = parseInt(prompt("Introduce los segundos"));
    let segundosMasUnSegundo = segundos + 1;
    let data = new Date();
    console.log(data);

    data.setHours(hora);
    data.setMinutes(minutos);
    data.setSeconds(segundosMasUnSegundo);

    console.log("HH:MM:SS: "+data.getHours()+":"+
    data.getMinutes()+":"+data.getSeconds());
}

function entradaFecha(){
    let año = parseInt(prompt("Introduce el año"));
    let mes = parseInt(prompt("Introduce el mes"));
    let dia = parseInt(prompt("Introduce el dia"));

    let date = new Date(año, mes, dia);
    console.log(date);
    if(año != date.getFullYear() || 
        mes != date.getMonth() || 
        dia != date.getDay()){
        console.log("la fecha introducida es incorrecta");
    }else{
        console.log("La fecha introducida es correcta");
    }
    

}

function entradaDias(){
    let dias = parseInt(prompt("Introduce un numero de dias"));

    let años = Math.floor(dias/365);
    let meses = Math.floor((dias%365)/30);
    let dia = Math.floor((dias%365)%30);
    
    console.log("años "+años);
    console.log("meses "+meses);
    console.log("dias "+dia);
}