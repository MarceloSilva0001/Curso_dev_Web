function gerar(){
   var num = document.querySelector('#num')
    n = Number(num.value)
   var tab = document.querySelector('#tab')
   var at = document.querySelector('#at')
    at  = Number(at.value)
    tab.innerHTML = ''
    
    if(at>0){
        for(var c = n; c <= at;c++){
        // Essa declaração cria uma tag e atribuida a variavel res, a tag aqui foi a option, que é usada no select
            const res = document.createElement('option')
        //Aqui foi estamos mandando mostra na dentro do option. esse (.text) é como se estive escrevendo dentro da tag como em uma tag p entre os espaços de maior e menor que abrem e fecham  tags
            res.text += `${n} x ${c} = ${n*c}`
        //para que apaece na tela, como no innerHtml, que mostra uma tag que ja está no html, como essa foi criada, ela está sendo vinculada ao id(tab), o appendChild(var), faz com que a tag criada se vincule a uma tag que exite no html, porem ela está armazenada na variavel é claro, é importante ler o código para entender.
            tab.appendChild(res)
        } 
    }else{
       alert(`O valor final deve ser (1) ou mais`)
        at = 1
    }
        
}