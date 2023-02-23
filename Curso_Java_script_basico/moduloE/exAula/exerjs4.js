function contar(){
    var inicio = document.getElementById('fim').value
    var fim = document.getElementById('fim').value
    var pulo = document.getElementById('fim').value
    var res = document.getElementById('res')
    inicio = Number(inicio)
    fim = Number(fim)
    pulo = Number(pulo)

    for(inicio=inicio;inicio<=fim;inicio++){
       console.log(inicio)
    }

   // document.getElementById('res').innerHTML = `${inicio}/ ${pulo}/ ${pulo}/`
    
}