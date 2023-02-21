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
    //recebe a escolha do checbox e armazena na variavel
    var fsex = document.getElementsByName('sexo')

    // Fazendo a subtração do valor ano atual menos o ano de nascimento, e armazeando dentro da variavel idade
    var idade = ano - Number(fano.value)

    //Atribuidno a variavel genero uma valor de string vazio
    var genero = ''

    //como no getElementById, que seleciona uma tag que existe a guarda na variavel, "document.createElement('tag')", cria uma tag e armazena ela dentro de uma variavel como fazemos como é feito da outra forma, resumindo ele cria uma tag
    var img = document.createElement('img')

    //Aqui está sendo atruibuido um id para a tag que foi criada com o "createElement('img')", como nas tag normais é importante o id para identificação e como é foi criada atraves do js, pelo js colocamos o id vinculado a tag
    img.setAttribute('id','foto')

    //essa condição valida se oque está amarzenado no na variavel fsex na primeira possição [0] é o atributo masculuno.
    //Como se interpreta essa parte? é assim: se estiver marcado o check box da possição 0 que é a primeira faz esse bloco. 
        if(fsex[0].checked){
            genero =  'Homem'
            if(idade >= 0 && idade < 12){
    //aqui a tag 'img' que criamos pelo js, recebe setAttribute, que significa atribuição de elemento, abre parestes('o atributo vai ser o 'src') de imagem e depois coloca se , para separar e passa o caminho da imagem.
               img.setAttribute('src', 'm.criança.jpg')
    // se o bloco for true, vai alterar a cor do back ground.
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
    //aqui dentro da tag res dentro do html vai mostrar essas informações
    res.innerHTML = 'Detectamos um '+genero+' com '+idade+' anos.'
    // aqui está sendo adicionado um elemento que no caso vai ser a tag de imagem, a div com id res, bem parecido como fazemos quando vamos mostrar texto.
    res.appendChild(img)
 }
}