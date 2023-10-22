function TablaCreacionRombo(){
    //funcion que recibe parametros de numero de col y dibuja un rombo por pantalla
    let columnas = parseInt(prompt("Ingrese numero impar de columnas"));
    let table= document.createElement("table");
    let filas = (columnas);
    let casillasEnBlanco = Math.trunc(columnas/2);
    let mitadTabla = Math.floor(filas/2);

    for(let i=0; i<filas; i++){
        let fil = document.createElement("tr");
        fil.style.border = "1px Solid Black";

        for(let j=0; j<columnas; j++){
            let td = document.createElement("td");
            td.style.border = "1px Solid Black";
            td.style.width = "20px"; 
            td.style.height = "20px";

            if(j >= casillasEnBlanco && j < columnas - casillasEnBlanco){
                td.style.backgroundColor = "red"
            }
            
            fil.appendChild(td);
          }
          if(i < mitadTabla){
            casillasEnBlanco --;
          }else{
            casillasEnBlanco ++;
          }

            table.appendChild(fil);
            
        }
        document.body.appendChild(table)
    }
    
function ExtraerExtension(){
    //funcion que recibe un nombre de archivo.extension se encarga de retornar solo la extension
    let nameFile = prompt("Ingrese un nombre de archivo (index.html)");
    let arrayExtension = nameFile.split('.');
    
    document.write("<p> el nombre del archivo es: "+ nameFile +" la extension es: "+arrayExtension.pop())
}

function ContarNumeroDeVocales(){
    //funcion que cuenta las vocales (A y B) de uns string y retorna si tiene la misma cantidad o no
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