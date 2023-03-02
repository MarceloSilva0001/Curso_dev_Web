let num = [4,5,6,4,8,0,2,0];


console.log(`\nVetor original: ${num} \n`)
console.log(`Vetor em Ordem Crescente: ${num.sort()} \n`)

num[6]= 9;
console.log(`Adicionando elemento 9 na posição 6 do indice:${num} \n`)

console.log(`O comprimeto do veto é: ${num.length} Elementos \n`)
var val = 8
var pos = num.indexOf(val)
    if(pos == -1){
         console.log(`Ò valor ${val} Não está no vetor\n \n \n `)
    }else{
        console.log(`Ò valor ${val} está na possição ${pos} do indice \n \n \n \n`)
    }



for(var i = 0; i <= num.length;i++){
    console.log(`Posição ${i}- Elemento > ${num[i]}`);
}
console.log("---------------------")
for(let ps in num ){
    console.log(`Posição ${ps}Elemento >  ${num[ps]}`);
}
