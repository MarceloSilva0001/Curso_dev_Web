    var reslist = document.getElementById("res");
    var res2 = document.getElementById("re2");
    var num =  document.getElementById("num");
    let valores = [];

function  isNumero(n){
    if(Number(n)>=1 && Number(n) <= 100){
        return true;
    }else{
    return false;
    }
}

function  inlist(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    //só vai adicionar se o valor estiver o numero em num && e só vai adcionar se ele "!" não estiver na lista
    if(isNumero(num.value) && !inlist(num.value, valores)){
        window.alert("Tudo ok")
    }else{
        window.alert("Valor inválido ou já encontrado na lista")
    }
}

    
   
    
