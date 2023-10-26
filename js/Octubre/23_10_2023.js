function comprobacionLongitud(){
    let text1 = prompt("introduce un primer texto");
    let text2 = prompt("introduce un segundo texto");

    if(text1.length === text2.length){
        document.write("<p> texto uno: "+ text1 + "("+text1.length+")"+" y texto dos: "+ text2 + "("+text2.length+")"+" tienen la misma longitud");
    }else{
        document.write("<p> texto uno: "+ text1 + "("+text1.length+")"+" y texto dos: "+ text2 + "("+text2.length+")"+" no tienen la misma longitud");
    }
}

function cantidadVecesLetraDentroString(){
    let text = prompt("introduce una frase");
    let letra = prompt("introduce una letra");
    let contador = 0;

    for(let i=0; i<text.length ; i++){
        if(text.charAt(i)== letra){
            contador++;
        }
    }
    document.write("El texto: "+ text);
    if(contador <= 4 && contador >=2){
        document.write(" contiene "+ contador + " veces la letra: "+ letra);
    }else{
        document.write(" contiene "+ contador + " veces la letra: "+ letra);
    }
}

function eliminarPosicionDelString(){
    let text = prompt("introduce una frase");
    let numeroPosicion = parseInt(prompt("introduce un numero"));
    let arrayText = text.split("");
    
    if(numeroPosicion < text.length){
        arrayText.splice(numeroPosicion , 1);
        document.write("El texto original: "+ text+" se convierte a: "+ arrayText);
    }else{
        document.write("El numero ingresado es muy grande, intenta con un numero menor");
    }    
}

function informeString(){
    let text = prompt("introduce una frase");
    
    let vocales = /[aàáäeèéëiíìïoòóöuúùü]/gi;
    let textSinEspacios= text.replace(/ +/g, ' ').trim();
    let arrayPalabras = textSinEspacios.split(" ");

    document.write(
        "LETRA: " + text + " <br>"+
        "Mayusculas: " + text.toUpperCase()+ " <br>"+
        "Minusculas: " + text.toLocaleLowerCase()+ " <br>"+
        "Longitud: " + text.length+ " <br>"+
        "Numero de palabras: " + arrayPalabras.length + " <br>"+
        "Las vocales son: " + text.match(vocales)+ " <br>"+
        "El numero de vocales: " + text.match(vocales).length+ " <br>"
        );

    document.write("El text reducido es: <br>" );
    for(let i=0; i< text.length; i++){
        document.write(text.slice(i,text.length)+"<br>" );
    }

}

function minutosParaLaMediaNoche(){
    let hora = prompt("Introduce una hora formato hh:mm");
    let hhmm = hora.split(":")
    let horas = parseInt(hhmm[0]);
    let minutos = parseInt(hhmm[1]);
    let minutosMediaNoche = 1440;
    let totalMinutos = (horas*60) + minutos;
    let total = Math.abs( totalMinutos - minutosMediaNoche);

    if( horas == 0 && minutos == 0){
        document.write("Es año nuevo..¡¡¡");
    }else{
        document.write("hora: "+ hora + " para las 00:00 falta: "+ total + " minutos");
    }
}



