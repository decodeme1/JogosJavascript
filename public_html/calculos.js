function randomizarOperadores(){
    //zerando o input do res
    document.getElementById("n5").value = "";
    //declaracao e random das variaveis operadoras.
    var operadores = ["+", "-", "*", "/"];
    var ranOp = Math.floor((Math.random()*3));
    //troca da variavel no html
    document.getElementById("n2").innerHTML = operadores[ranOp];
    //randomizar n1 e n2 = numeros a serem calculados.
    var ranVar1 = Math.floor((Math.random()*100)+1);
    var ranVar2 = Math.floor((Math.random()*100)+1);
    
    document.getElementById("n1").innerHTML = ranVar1;
    document.getElementById("n3").innerHTML = ranVar2;
    
}

function calcularNum(){
    //resgate de variaveis
    var n1 = parseInt(document.getElementById("n1").innerHTML);
    var n3 = parseInt(document.getElementById("n3").innerHTML);
    var operador = document.getElementById("n2").innerHTML;
    var res = parseInt(document.getElementById("n5").value);
    
    switch(operador){
        case "+":
            if(n1+n3 == res){
                alert("Resultado correto !");
                break;
            }else if(n1+n3!=res){
                alert("Resultado incorreto !");
                break;
            }
        case "-":
            if(n1-n3 == res){
                alert("Resultado correto !");
                break;
            }else if(n1-n3!=res){
                alert("Resultado incorreto !");
                break;
            }    
        case "*":
            if(n1*n3 == res){
                alert("Resultado correto !");
                break;
            }else if(n1*n3!=res){
                alert("Resultado incorreto !");
                break;
            }
        case "/":
            if(n1/n3 == res){
                alert("Resultado correto !");
                break;
            }else if(n1/n3!=res){
                alert("Resultado incorreto !");
                break;
            }
    }
    randomizarOperadores();
    
}