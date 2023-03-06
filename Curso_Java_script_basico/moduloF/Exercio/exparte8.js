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
    //adiciona o valor contido no input "num" ao vetor chamado valores, o ,push adiiona o valor na ultima posição do vetor, então sempre que adicionarem valor no input, ele vai para ultima posição do vertor pois colocamos o nome do vetor ".push"
    valores.push(Number(num.value));

    //Criando uma tag option 
    var option = document.createElement("option");

    //atribuindo o tipo de elemento a tag option, que vai ser o conteudo que ela recebe, o conteudo é o valor num que está no input
    option.text = `Adicionado: ${num.value}`;

    //atrelando a opção a lista a uma elemento, nesse caso o select
    reslist.appendChild(option);

    }else{
    window.alert("Valor inválido ou já encontrado na lista")
    }
    //faz o input receber o valor "nada"
    num.value = '';
    //faz com que após clica no adicionar o cursor volte ao compo de input
    num.focus();

}




