function adivinarElNumero(){
    let numero = 1;
    let numeroAdivinar = Math.floor(Math.random() * 10 + 1);
    let numeroIntentos= 0;
    console.log(numeroAdivinar);
    while(numero != numeroAdivinar && numero > 0 || !Number.isInteger(numero)){
            numero = parseInt(prompt("Introduzca un numero del 1 al 10, salir (-1)"));
            if(Number.isInteger(numero)){
                numeroIntentos ++
                if(numero < (numeroAdivinar/2) && numero != numeroAdivinar && numero > 0){
                    alert("mayor");  
                }else if(numero < numeroAdivinar && numero != numeroAdivinar && numero > 0){
                    alert("mayor");
                }else if( numero > numeroAdivinar && numero != numeroAdivinar && numero > 0){
                    alert("menor");
                }
            }else{
                alert("Invalido");
            }
            
    } 
    if(numero < 0 ){
        document.write("GAME OVER..¡¡¡ Haz intentado "+ numeroIntentos + " veces" );
    }else{
        document.write("GANASTE..¡¡ adivinaste en " + numeroIntentos + " cantidad de intentos: ");  
    }
}

function primerDiaDelAñoEsMiercoles(){
    let primerValor = parseInt(prompt("Introduzca un año"));
    let segundoValor = parseInt(prompt("Introduzca un año"));
    
    for(let i = primerValor; i<= segundoValor; i++){
        let date = new Date(i, 0, 1);
        let dia = date.getDay();
        if(dia == 3){
            document.write("El año "+ i + " el 1 es miercoles <br>" );
        }
    }
}

function palabraPentavocalica(){
    let palabra = prompt("Introduce una palabra y te dire si es pentavocalica");
    let vocales = /[aàáäeèéëiíìïoòóöuúùü]/gi;
    let arrayPalabras = palabra.split("");
    let numeroCoincidencias = 0;

    for(let i = 0 ; i< arrayPalabras.length; i ++){
        let numeroVocales = arrayPalabras[i].match(vocales);
        if(numeroVocales != null){
            numeroCoincidencias++
        }
    }

    if(numeroCoincidencias == 5){
        document.write("la palabra es pentavocalica");
    }else{
        document.write("la palabra NO es pentavocalica");
    }
}