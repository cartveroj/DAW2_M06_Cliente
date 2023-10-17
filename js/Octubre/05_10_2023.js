
function conversionTemperatura(){
    let valoresC = parseInt(prompt("Introduce un valor"));
    let tipo = prompt("Que quieres F (Farenheit) o C (Celcius)");
    if(tipo.toUpperCase() === "C"){
        let gradosCelcius = (valoresC-32)/(9/5);
        console.log(`${valoresC}ºF son: ${gradosCelcius}ºC`);
    }else if(tipo.toUpperCase() === "F"){
        let gradosFarenheit = (9/5)*valoresC + 32;
        console.log(`${valoresC}ºC son: ${gradosFarenheit}ºF`);
    }else{
        console.log(`${tipo} no se acepta ese tipo de valor`)
    }
}

function conversionBiOctHex(){
    let valores = parseInt(prompt("Introduce un valor para convertir a Binario, hexadecimal y octal")); 
    let binario = 2;
    let octal = 8;
    let hexa = 16;
    
    calculoBinario(valores, binario);

    calculoOctagonal(valores, octal);

    calculoHexa(valores, hexa);
       
}

function calculoBinario(numero, base){
    let binario = "";
    while(numero > 0){
        binario = numero%base + binario;
        numero = Math.floor(numero/base);
    }
    console.log("El numero binario es "+ binario)
}

function calculoOctagonal(numero, base){
    let octagonal = "";
    while(numero > 0){
            octagonal = numero%base + octagonal;
            numero = Math.floor(numero/base);
    }
    console.log("El numero octagonal es "+ octagonal);
}

function calculoHexa(numero, base){
    let valorHexadecimal = "0123456789ABCDEF";
    let residuo = 1;
    let hexadecimal ="";
    while(numero > 0){
        residuo = numero%base;
        hexadecimal = valorHexadecimal.charAt(residuo) + hexadecimal;
        numero=Math.floor(numero/base);
    }

    console.log("El numero hexadecimal "+ hexadecimal);
    
}