let x = 7 // var x = 7
x = 12
const y = 9 // não muda o valor durante o código
console.log(x)
console.log(`const` + y)

if(true) {
    let x = 7
    const y = 18
    console.log(x)
    console.log(`const if ` + y)
}

if (20 > 10) {
    const y = 17
    console.log(`const if 2 ` + y)
}