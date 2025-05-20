// Splice
var array = [1, 2, 7, 9]
array.splice(3, 0, 77) //posição da variável, quantidade de deletes, número adicionado
console.log(array)

array.splice(4, 1)
console.log(array)

//indexOf
console.log(array.indexOf(1))

//join
var array2 = ["A", "pizza", "da", "Itália", "é", "a", "melhor"]
console.log(array2.join(" "))
