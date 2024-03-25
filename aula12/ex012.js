var agora = new Date()
var diaatual = new Date()
var dia = diaatual.getDate()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas do dia ${dia}.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}