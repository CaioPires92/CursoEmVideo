var agora = new Date()
var horario = agora.getHours()

console.log(`Agora São ${horario}:00hs `)

if (horario >= 6 && horario < 12) {
    console.log('Bom dia!')
} else if (horario >= 12 && horario < 18) {
    console.log('Boa tarde!')
} else if (horario >= 18 && horario <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}