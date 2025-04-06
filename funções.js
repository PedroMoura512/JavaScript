/
//par ou impar
function parimpar(n){
    if(n%2==0){
        return 'par!!'
    }else {
        return 'impar!!'
    }
}
console.log(parimpar(1905))


//somando dois numeros, se nao atribuir nenhum valor, o valor será 0
function soma(n1=0,n2=0){
    return n1+n2
}
console.log(soma(1000, 90))


//fatorial de um numero (!)
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(56))
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(10))

