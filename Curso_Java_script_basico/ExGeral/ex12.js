//1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.
var lt = 't'

if(lt == 'a' || lt == 'e' || lt == 'i' || lt == 'o' || lt == 'u'){
    console.log('\n\n ex 1) Vogal <br> \n\n---------------\n\n')
}else{
    console.log('\n\n ex 1) Consoante \n\n---------------\n\n')
}
// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

var n1 = 6.5
var n2 = 1
var md = 6
var res = (n1+n2)/2

 if(res >= md ){
    console.log(`ex 2) Sua nota é ${res} Você está aprovado \n\n---------------\n\n`)
 }else{
    console.log(`ex 2) Sua nota é ${res} Você está Reprovado \n\n---------------\n\n`)
 }
// 3. Faça um script que leia três números inteiros e mostre o maior deles.
// modo mais simples
var maior = 0
var x1 = 2
var x2 = 1

if(x1 > maior){
    maior = x1;
}
if(x2 > maior){
    maior = x2
    }
        console.log(maior)
//eu fiz assim
var a = 1
var b = 2
var c = 3

if(a > b && a > c){
    console.log(`ex 3) ${a} è o maior Numero entre ${a}, ${b} e ${c}\n\n---------------\n\n`)
}else{
    if(b > a && b > c){
        console.log(`ex 3) ${b} è o maior Numero entre ${a}, ${b} e ${c}\n\n---------------\n\n`)
    }else{
        if(c > a && c > b){
            console.log(`ex 3) ${c} è o maior Numero entre ${a}, ${b} e ${c}\n\n---------------\n\n`)
        }
    }
}

// 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
// Fazer duas variáveis trocarem de valores entre si - Variável Auxiliar

// A logica seria essa. mas pelo que vi, só da pra fazer pelo html mesmo, pois o valor primario fica armazenado na variavel usando DOM
var d = 10
var e = 20 
var aux = d
d = e
e = aux



// 5. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.
//-Marcelo: Meu código ficou muito grande, e com muitas validações de if else, porem eu consegui pelo menos fazer...Com o tempo tudo se mlhora
var aa = 569
var bb = 592
var cc = 580
 
if(aa > bb && aa > cc){
    console.log(`ex 5) (${aa}) è o maior Numero entre (${aa}, ${bb} e ${cc})\t`)
   if(aa < bb && aa < cc){
    console.log(`(${aa}) è o menor Numero entre (${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
        }else if(bb < aa && bb < cc){
            console.log(`(${bb}) è o menor Numero entre (${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
                }else if(cc < aa && cc < bb){
                     console.log(`(${bb}) è o menor Numero entre ((${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
   }
}else if(bb > aa && bb > cc){
    console.log(`ex 5) (${bb}) è o maior Numero entre (${aa}, ${bb} e ${cc})\t`)
   if(aa < bb && aa < cc){
    console.log(`(${aa}) è o menor Numero entre (${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
        }else if(bb < aa && bb < cc){
            console.log(`(${bb}) è o menor Numero entre (${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
                }else if(cc < aa && cc < bb){
                     console.log(`(${bb}) è o menor Numero entre ((${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
   }
}else if(cc > bb && cc > aa){
    console.log(`ex 5) (${cc}) è o maior Numero entre (${aa}, ${bb} e ${cc})\t`)
   if(aa < bb && aa < cc){
    console.log(`(${aa}) è o menor Numero entre (${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
        }else if(bb < aa && bb < cc){
            console.log(`(${bb}) è o menor Numero entre (${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
                }else if(cc < aa && cc < bb){
                     console.log(`(${bb}) è o menor Numero entre ((${aa}, ${bb} e ${cc})\n\n---------------\n\n`)
   }
}










 