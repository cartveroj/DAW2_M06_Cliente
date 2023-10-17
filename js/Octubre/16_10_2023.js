function createTableDinamica(){
let columnas = prompt("Ingrese numero de columnas");
let filas = prompt("Ingrese numero de filas");
//let text = prompt("Introduce un valor para la tabla");


let table= document.createElement("table");
for(let i=0; i<filas; i++){
    let fil = document.createElement("tr");
    fil.style.border = "1px Solid Black";
    for(let j=0; j<columnas; j++){
        let td = document.createElement("td");
        td.style.border = "1px Solid Black";
        let text= document.createTextNode("1.2");
        
        td.appendChild(text);
        fil.appendChild(td);
        
    }
    table.appendChild(fil);
}

document.body.appendChild(table)
}

function createTablaMultiplicar(){
    //tabla de multiplica
    let columnas = prompt("Ingrese numero de columnas");
    let filas = prompt("Ingrese numero de filas");
    let table= document.createElement("table");
    let text1 = "";
for(let i=1; i<=filas; i++){
    let fil = document.createElement("tr");
    fil.style.border = "1px Solid Black";
    for(let j=1; j<=columnas; j++){
        let td = document.createElement("td");
        td.style.border = "1px Solid Black";
        td.style.width = "20px"; 
        td.style.height = "20px";
        
        text1= document.createTextNode(`${i*j}`);
        
        fil.appendChild(td);
        td.appendChild(text1);
        
        
        
    }

    table.appendChild(fil);
}

document.body.appendChild(table)

}

function createPiramide(){
    /*td.style.width = "20px" ; td.style.height = "20px"
        td.style.backgroundColor = "red"
    */

    let columnas = parseInt(prompt("Ingrese numero impar de columnas"));
    let table= document.createElement("table");
    let filas = (columnas/2);
    let casillasEnBlanco = Math.trunc(columnas/2);

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
        casillasEnBlanco --;
        table.appendChild(fil);
    }
    document.body.appendChild(table)
}

