const olderName = prompt('Digite o nome da pessoa mais velha')
const olderAge = prompt('Digite a idade da pessoa mais velha')

const youngerName = prompt('Digite o nome da pessoa mais nova')
const youngerAge = prompt('Digite a idade da pessoa mais nova')

const ageDifference = olderAge - youngerAge

alert('PESSOA MAIS VELHA\n--------------\nNome: ' + olderName + '\nIdade: ' + olderAge)
alert('PESSOA MAIS NOVA\n--------------\nNome: ' + youngerName + '\nIdade: ' + youngerAge)
alert('A diferença de idade é de ' + ageDifference + ' anos')