//Adicionando uma tag <p> e atribuidondo ela a outra tag
var t = document.getElementById('t')
var txt = document.createElement("p")
txt.textContent = 'Lista'
t.appendChild(txt)
//Criando um imput que adciona na Lista

/*
function iniciar(){
    var txt = document.getElementById("txt");
    var list = document.getElementById("list");
    var li = createElement("li");
    li.textContent =   txt;
    list.appendChild(li);
}

*/
function inicia() {
    document.getElementById("adc").addEventListener("click", function(){
        var txt = document.getElementById("txt").value;
        var list = document.getElementById("list");
        var li = createElement("li");
        li.textContent =   txt;
        list.appendChild(li);
    });
}