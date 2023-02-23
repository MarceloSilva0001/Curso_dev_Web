  function contar(){
     var inicio = document.getElementById('inicio').value
     var fim = document.getElementById('fim').value
     var pulo = document.getElementById('pulo').value
     var res = document.getElementById('res')

     inicio = Number(inicio)
     fim = Number(fim)
     pulo = Number(pulo)

   //  res.innerHTML = `${inicio}/ ${fim}/ ${pulo}`

    if(pulo >= 2){
         for(inicio=inicio;inicio<=fim;inicio+=pulo){
          res.innerHTML +=inicio+'&#x1F449';
            }
    }else{
         for(inicio=inicio;inicio<=fim;inicio++){
          res.innerHTML +=inicio+'&#x1F449';
           }
    }
}

function tabuada(){
     var tabuada = document.querySelector('div.tabuada')
     var num = document.getElementById('num').value
     num = Number(num)

     tabuada.innerHTML =  'num'
}