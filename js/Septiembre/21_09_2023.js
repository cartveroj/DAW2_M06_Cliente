function entradaDatos(){
    let valor = prompt("Introduce un numero del 1 al 10");
    
    if(valor >= 1 && valor <= 10){
        console.log(`tabla de multiplicar ${valor}`);
        tablaDeMultiplicar(valor);
    }else{
        alert("no es numero correcto intentalo nuevamente");
        
    }
}

function tablaDeMultiplicar( valor ){
    for( let numero = 1 ; numero <=10; numero ++){
        let resultado = numero*valor;
        console.log(valor+ " X " + numero +" = "+ resultado);
    }
}

function fibonacci(){
    let numero = document.getElementById("data").value;
    // document.getElementById("texto").innerHTML = "valor: "+ datos;


        let b= 1;
        let c = 1;
        if(numero == 1){
            console.log(`Fibo [${0}] = ${b}`);    
        }else{
            console.log(`Fibo [${0}] = ${b}`);
            for(let i = 1; i <numero; i++){
                console.log(`Fibo [${i}] = ${c}`);
                c = b+c;
                b = c-b;
                
            }
        }
        
       
    }

