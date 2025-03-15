//trabalhando condições aninhadas com else if
var hora = new Date() //pegando a hora do sistema
var h = hora.getHours()

if (h < 12){
    console.log('bom dia')
}else if(h < 19){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}