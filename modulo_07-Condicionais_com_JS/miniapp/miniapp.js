const departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY")
const departureDate = moment(departureDateEntry, 'DD/MM/YYYY')
const today = moment()

const dateDiff = today - departureDate // > Retorno em milissegundos 
console.warn(dateDiff)
const chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == 1) {
    const secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
} else if(chosenOption == 2) {
    const minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert('Tempo de vôo: ' + minutesOfDeparture + " minutos")
} else if(chosenOption == 3) {
    const hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert('Tempo de vôo: ' + hoursOfDeparture + " horas")
} else if(chosenOption == 4) {
    const daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert('Tempo de vôo: ' + daysOfDeparture + ' dias')
} else {
    alert('Opção inválida')
}