let num = [5,7,9,1,3]
num.push(8)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num} posições`)
console.log(`O primeiro valor do vetor é ${num[2]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}