function gerar(){
   var numI = document.getElementById("numI").value
   var numF = document.getElementById("numF").value
   var teste = document.getElementById("teste")

   numI = Number(numI)
   numF = Number(numF)
    teste.innerHTML = `${numI}+${numF}`
}