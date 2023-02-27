//Adicionando uma tag <p> e atribuidondo ela a outra tag
/*
var t = document.getElementById('t')
var txt = document.createElement("p")
txt.textContent = 'Lista'
t.appendChild(txt)

//Criando um imput que adciona na Lista
*/

/*
function inicia() {

    if(txt == ""){
        window.alert('Digite algo para adicionar a lista');
    }else{
    //Ao clicar no button adicionar que tem o id "adc" podemos coletar esse clica com essa chamada de função.
        document.getElementById("adc").addEventListener("click", function(){

        //atribuinido o valor de do input a variavel txt
            var txt = document.getElementById("txt");

        //atribuinido o id da Ul a uma variavel de mesmo nome
            var list = document.getElementById("list");

        //cria uma tag "Li" em js
            var li = document.createElement("li");

        //pega o contúdo do var do input e guardando dentro do variavel criada "Li"
            li.textContent =   txt.value;
        
        //atrelando o "li" que tem o conteúdo, dentro da lista "ul"
            list.appendChild(li);
        //O input vai iniciar zerado após clica em button
            txt.value = ''
        //Faz com que o curso já fique dentro do input após clica em adicionar.
        txt.focus();
    });
  }
}
//incia a função "incia"
window.addEventListener("load",inicia);
*/
function teste(){
    //atribuinido o valor de do input a variavel txt
    var txt = document.getElementById("txt");

    //atribuinido o id da Ul a uma variavel de mesmo nome
    var list = document.getElementById("list");

    //cria uma tag "Li" em js
    var li =  document.createElement("li");

    //pega o contúdo do var do input e guardando dentro do variavel criada "Li"
    li.textContent = txt.value;

    //atrelando o "li" que tem o conteúdo, dentro da lista "ul
    list.appendChild(li);
    
    //Faz com que o curso já fique dentro do input após clica em adicionar.
    txt.focus();

    //O input vai iniciar zerado após clica em button
    txt.value = ''
    
}