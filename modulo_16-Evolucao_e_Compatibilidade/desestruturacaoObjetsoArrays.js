// > Extrair de dados de arrays e objetos em variáveis distintas

const spaceship = {
    name: 'Colussus',
    crewQuantity: 10,
    isHitched: false
}

const { name: spaceshipName, crewQuantity } = spaceship

console.log(spaceshipName, crewQuantity)

const spaceships = ['Colossus', 'Ártemis', 'Fênix']
const [colossus, artemis, fenix, puller] = spaceships
console.log(colossus, artemis, fenix, puller)

function printSpaceships([colossus, artemis, fenix, puller]) {
    console.log(colossus, artemis, fenix, puller)
}

printSpaceships(spaceships)