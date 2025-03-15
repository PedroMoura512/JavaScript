//trabalhando condições aninhadas com else if

var i = 50
if(i < 16){
    console.log('não pode votar')
}else if( i < 18){
    console.log('voto opcional')
}else if(i < 67){
    console.log('voto obrigatório')
}else{
    console.log('voto opcional')
}