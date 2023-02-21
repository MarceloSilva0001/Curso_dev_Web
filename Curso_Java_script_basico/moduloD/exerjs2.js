function carregar(){
    //essas duas varaiveis estão revabendo a informação do id que está vinculado a tag HTML
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var ex = document.getElementsByClassName('ex')

    //"nem Date()" essa função pegamos o os dados de data, como dia, horario, minutos, mês, milesimo.
    //Logo após armazenamos em uma variavel, como essa data abaixo
    var data = new Date()

    //"data.gethours" quanto colocamos a varaivel data. ela tras algumas opções, uma delas é a de horas foi passada como .getHorus()
    var hora = data.getHours()

    //Mostrando o horario atual no id "msg" com innerHtml
    msg.innerHTML = `${hora} Horas`

    //Essa função condicional, faz com que em determinado horario aparece uma diferente imagem e cor de fundo, porem podemos sempre colocar mais dentro deo bloco de imagem
    if(hora >= 0 && hora < 12){

    //Essa declaração indica que o id img que foi declarado dentro da tag img, vai receber essa imagem manhã se a declração do bloco for verdadeira
        img.src = 'manhã.jpg'
    //Essa declaração indica que o o fundo principal vai alterar a cor se o bloco for veradeiro
        document.body.style.background = 'green'
    }else if(hora >= 12 && hora < 18){
    //Essa declaração indica que o id img que foi declarado dentro da tag img, vai receber essa imagem tarde se a declração do bloco for verdadeira
        img.src = 'tarde.jpg'
    //Essa declaração indica que o o fundo principal vai alterar a cor se o bloco for veradeiro
        document.body.style.background = 'orange'
    }else{
     //Essa declaração indica que o id img que foi declarado dentro da tag img, vai receber essa imagem noite se a declração do bloco for verdadeira
        img.src = 'noite.jpg'
    //Essa declaração indica que o o fundo principal vai alterar a cor se o bloco for veradeiro
        document.body.style.background = 'rgb(14, 112, 168)'
    }
}