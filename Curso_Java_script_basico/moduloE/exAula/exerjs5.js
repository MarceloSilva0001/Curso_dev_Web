function contar(){
    var i = document.getElementById('i').value
    var p = document.getElementById('p').value
    var f = document.getElementById('f').value

    var res = document.getElementById('res')
    i = Number(i)
    p = Number(p)
    f = Number(f)

    if(i <= 0 || p <= 0 || f <=0){
        res.innerHTML =    'Nenhum campo pode estar vazio Ou ter o valor 0'
    }else if(i<f){
        for(var c = i; c <= f; c += p){
            res.innerHTML += ` > ${c} `
        }
        res.innerHTML += `\u{1F3C1}`
        res.innerHTML += `<br>--------------------------------<br>`
    }else{
        for(var c = i; c >= f; c -= p ){
            res.innerHTML += ` > ${c} `
        }
        res.innerHTML += `\u{1F3C1}`
        res.innerHTML += `<br>--------------------------------<br>`
    }
}