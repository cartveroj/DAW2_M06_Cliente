function TablaCreacionRombo(){

    let columnas = parseInt(prompt("Ingrese numero impar de columnas"));
    let table= document.createElement("table");
    let filas = (columnas);
    let casillasEnBlanco = Math.trunc(columnas/2);
    let casillasEnBlancoDos = Math.trunc(columnas/2);
    let mitadTabla = filas/2;

    for(let i=0; i<filas; i++){
        let fil = document.createElement("tr");
        fil.style.border = "1px Solid Black";

        for(let j=0; j<columnas; j++){
            let td = document.createElement("td");
            td.style.border = "1px Solid Black";
            td.style.width = "20px"; 
            td.style.height = "20px";

            if(i <= mitadTabla){
                if(j >= casillasEnBlanco && j < columnas - casillasEnBlanco){
                    td.style.backgroundColor = "red"
                }
            }else{
                if( j <= casillasEnBlancoDos && j > columnas - casillasEnBlancoDos){
                    td.style.backgroundColor = "red"
                }
            }
            
            fil.appendChild(td);
          }
            casillasEnBlanco --;
            casillasEnBlancoDos ++;
            
            table.appendChild(fil);
            
        }
        document.body.appendChild(table)
    }
    
function ExtraerExtension(){
    let nameFile = prompt("Ingrese un nombre de archivo (index.html)");
    let separador=".";
    let arrayExtension = nameFile.split(separador);
    arrayExtension.pop();

    document.write("<p> el nombre del archivo es: "+ arrayExtension.length)
    // for (var i = 0; i < arrayExtension.length; i++) {
    //     document.write(arrayExtension[i]+ " / ");
    //   }

}

function ContarNumeroDeVocales(){
    let texto = prompt("Introduzca un texto").toUpperCase();
    let vocalA = "A";
    let vocalB = "B";
    let contadorA = 0;
    let contadorB = 0;
    for(let i = 0; i<texto.length; i++){
        if(texto.charAt(i) == vocalA){
            contadorA ++;
        }else if(texto.charAt(i) == vocalB){
            contadorB ++;
        }
    }

    document.write("<p> El texto introducido: "+ texto.toLowerCase());
    if(contadorA != contadorB){
        document.write("<p> No tienen el mismo numero de vocales 'a': " + contadorA + " y 'b' : "+ contadorB);
    }else{
        document.write("<p> Tienen el mismo numero de vocales 'a': " + contadorA + " y 'b' : "+ contadorB);
    }

}