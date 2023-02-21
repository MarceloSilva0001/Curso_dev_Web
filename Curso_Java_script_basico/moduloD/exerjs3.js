<<<<<<< HEAD
function anodenascimento(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.getElementById('res')
    
//fano.value.lenght, valida se o usuario não digitou nada, com isso o valor fica como zero
//fano.value > ano, valida se ano digitado é maior que o ano atual....
 if(fano.value.lenght == 0 || fano.value > ano){
    window.alert('erro')
 }else{
   // window.alert('else')
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero =  'Homem'
            if(idade >= 0 && idade < 12){
               img.setAttribute('src', 'm.criança.jpg')
               document.body.style.background = 'rgba(0, 38, 255, 0.616)'
            }else if(idade >=12 && idade < 18){
                img.setAttribute('src', 'm.adolecente10.15.jpg')
            }else if(idade >=18 && idade < 30){
                img.setAttribute('src', 'm.jovem.jpg')
            }else if(idade >=30 && idade < 130){
                img.setAttribute('src', 'm.velho.jpg')
            }else{
                img.setAttribute('src', 'caveira.jpg')
            }
        }else if(fsex[1].checked){
            genero =  'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'f.criança.jpg')
                document.body.style.background = 'rgba(255, 0, 191, 0.932)'
            }else if(idade >=12 && idade < 18){
                img.setAttribute('src', 'f.adolecente10.15.jpg')
            }else if(idade >=18 && idade < 30){
                img.setAttribute('src', 'f.jovem.jpg')
            }else if(idade >=30 && idade < 130){
                img.setAttribute('src', 'f.velha.jpg')
            }else{
                img.setAttribute('src', 'caveira.jpg')
            }
        }
    res.innerHTML = 'Detectamos um '+genero+' com '+idade+' anos.'
    res.appendChild(img)

 }
=======
function anodenascimento(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.getElementById('res')
    
//fano.value.lenght, valida se o usuario não digitou nada, com isso o valor fica como zero
//fano.value > ano, valida se ano digitado é maior que o ano atual....
 if(fano.value.lenght == 0 || fano.value > ano){
    window.alert('erro')
 }else{
   // window.alert('else')
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero =  'Homem'
            if(idade >= 0 && idade < 12){
               img.setAttribute('src', 'm.criança.jpg')
               document.body.style.background = 'rgba(0, 38, 255, 0.616)'
            }else if(idade >=12 && idade < 18){
                img.setAttribute('src', 'm.adolecente10.15.jpg')
            }else if(idade >=18 && idade < 30){
                img.setAttribute('src', 'm.jovem.jpg')
            }else if(idade >=30 && idade < 130){
                img.setAttribute('src', 'm.velho.jpg')
            }else{
                img.setAttribute('src', 'caveira.jpg')
            }
        }else if(fsex[1].checked){
            genero =  'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'f.criança.jpg')
                document.body.style.background = 'rgba(255, 0, 191, 0.932)'
            }else if(idade >=12 && idade < 18){
                img.setAttribute('src', 'f.adolecente10.15.jpg')
            }else if(idade >=18 && idade < 30){
                img.setAttribute('src', 'f.jovem.jpg')
            }else if(idade >=30 && idade < 130){
                img.setAttribute('src', 'f.velha.jpg')
            }else{
                img.setAttribute('src', 'caveira.jpg')
            }
        }
    res.innerHTML = 'Detectamos um '+genero+' com '+idade+' anos.'
    res.appendChild(img)

 }
>>>>>>> 7e77c439770988818e6794984f065c51f5c3682d
}