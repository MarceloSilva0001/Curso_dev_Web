 function contar(){
     var inicio = document.getElementById('fim')
     var fim = document.getElementById('fim')
     var pulo = document.getElementById('fim')
     var res = document.getElementById('res')
     inicio = Number(inicio)
     fim = Number(fim.value)
     pulo = Number(pulo.value)
    var inicio = 1
    var fim = 10

    if(pulo >= 2){
         for(inicio=inicio;inicio<=fim;inicio+=pulo){
               document.getElementById('res').innerHTML += inicio + '<br>'+'&#x1F449'
            }
    }else{
         for(inicio=inicio;inicio<=fim;inicio++){
            document.getElementById('res').innerHTML += inicio + ' '+'&#x1F449'
           }
    }
}