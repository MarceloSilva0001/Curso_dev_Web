    var reslist = document.getElementById("res");
    var res2 = document.getElementById("re2");
    var num =  document.getElementById("num");
    //declaração de vetor
    let valores = [];
    //a função verifica se o valor que está dentro de num está dentre 1 e 100
function  isNumero(n){
    if(Number(n)>=1 && Number(n) <= 100){
        return true;
    }else{
    return false;
    }
}
    //Essa função verifica se o valor está dentro de vetor, se o valor digitado for diferente de -1(valor dado quando o valor digitado não tem idice valido, indice valido começa apartir de 0 e vai somando)
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

    
   
    
