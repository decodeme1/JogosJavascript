function randomizar(){
    var r1 = Math.floor((Math.random()*100)+1);
    
    document.getElementById("n1").innerHTML = r1;
    document.getElementById("n2").value= "";
    
}

function tentarImitar() {
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;
    
    
    
    if(n1 == n2){
        alert("Número verificado corretamente!");
    }else{
        alert("Você não obteve sucesso em verificar o número, não permitimos robôs no nosso site.");
    }
    
    randomizar();
}