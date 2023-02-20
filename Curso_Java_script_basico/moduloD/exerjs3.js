function anodenascimento(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.getElementById('res')
    
//fano.value.lenght, valida se o usuario não digitou nada, com isso o valor fica como zero
//fano.value > ano, valida se ano digitado é maior que o ano atual
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
                img.attribute('src', '../midia/moduloD/idade/f.criança.jpg')
            }else if(idade >=12 && idade < 18){

            }else if(idade >=18 && idade < 30){

            }else if(idade >=30 && idade < 50){

            }
        }else if(fsex[1].checked){
            genero =  'Mulher'
            if(idade >= 0 && idade < 12){
                
            }else if(idade >=12 && idade < 18){

            }else if(idade >=18 && idade < 30){

            }else if(idade >=30 && idade < 50){

            }
        }
        res. innerHTML = genero+idade
 }
}