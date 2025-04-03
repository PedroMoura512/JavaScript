let num = [1, 9, 0, 5]

for (let pos = 0; pos<num.length; pos++){
    console.log(`o indice ${pos} recebe ${num[pos]}`)
}

for(let pos in num) {
    console.log(`a posição ${pos} recebe ${num[pos]}`)
}