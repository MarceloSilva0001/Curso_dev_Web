    var res = document.getElementById("res");
    var num =  document.getElementById("num");
    
   
    

function adicionar(){
    num = Number(num.value);
    var NumOption = document.createElement("option");
    NumOption.textContent = num;
    res.appendChild(NumOption);
}
