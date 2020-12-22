// > Considera cada elemento como uma entidade única
const spaceships = ['Colossus', 'Ártemis', 'Fênix']

const newSpaceships = [...spaceships, 'Puller']
console.log(newSpaceships)

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

const spaceshipAcceleration = [60, 10]
const newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)