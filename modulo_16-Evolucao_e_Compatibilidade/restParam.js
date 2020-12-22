// > Caso a função receba um número inderteminado de parâmetros, esse operador oss coloca em uma array

function greetCrew(message, ...names) {
    console.log(names)
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew('Seja bem-vindo', 'Arthur', 'Guilherme', 'Julia', 'Jake')