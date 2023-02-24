 
  function contar(){
     var inicio = document.getElementById('inicio').value
     var fim = document.getElementById('fim').value
     var pulo = document.getElementById('pulo').value
     var res = document.getElementById('res')

     inicio = Number(inicio)
     fim = Number(fim)
     pulo = Number(pulo)

   //  res.innerHTML = `${inicio}/ ${fim}/ ${pulo}`
     if(fim>inicio){
          if(pulo <= 0){
               window.alert('O Pulo Não pode dica vazio ou Ser menor que 1')
          }else if(pulo >= 2){
               for(inicio=inicio;inicio<=fim;inicio+=pulo){
                    res.innerHTML +=inicio+'&#x1F449';
                    }
          }else{
               for(inicio=inicio;inicio<=fim;inicio++){
                    res.innerHTML +=inicio+'&#x1F449';
                    }
          }
     }else{
          window.alert('Digite um valor de FIM maior do que o de INICIO')
     }
}

function tabuada(){
     var tabuada = document.querySelector('div.tabuada')
     var num = document.getElementById('num').value
     num = Number(num)
     
          for(i = 1;i <=10; i++){tabuada.innerHTML += `${num} x ${i} = ${i*num} <br>`}
     }
          
          
                                                                 

 /*
var i = 2
for(num = 1; num <=10;num++){
     console.log(i+' x '+num+' = '+i*num)
}*/