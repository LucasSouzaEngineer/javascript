let num = [5, 8, 2, 9, 3]
//num.push(1)
//num.sort()
//num.push(1)
console.log(num)
//console.log(`Nosso vetor tem ${num.length} posições`)
//console.log(`O primeiro valor do vetor é ${num[0]}`)

for(i = 0; i < num.length; i++){
    console.log(`O elemento de índice ${i} é: ${num[i]}`)
}

for(let pos in num){
    console.log(`O elemento de índice ${pos} é: ${num[pos]}`)
}