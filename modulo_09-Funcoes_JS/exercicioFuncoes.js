function iniciarNavegacao(nomeNave, velocidadeInicial) {
    let velocidadeAtual = velocidadeInicial
    let continuarNavegacao = true

    do {
        const comando = chamarMenu()
        switch(comando) {
            case '1':
                velocidadeAtual = acelerarNave(velocidadeAtual)
                break
            case '2':
                velocidadeAtual = desacelerarNave(velocidadeAtual)
                break
            case '3':
                alert(imprimirDados(nomeNave, velocidadeAtual))
                break
            case '4':
                alert('Navegação encerrada!')
                continuarNavegacao = false
                break
            default:
                alert('Opção inválida!')

        }
    } while(continuarNavegacao)
}

function chamarMenu() {
    return prompt('Escolha uma ação:\n1- Acelerar nave\n2- Desacelerar nave\n3- Imprimir dados de bordo\n4- Sair do programa')
}

function acelerarNave(velocidadeAtual) {
    alert('Velocidade aumentada!')
    return velocidadeAtual += 5
}

function desacelerarNave(velocidadeAtual) {
    if(velocidadeAtual <= 0) {
        alert('A nave se encontra parada! Não é possível desacelerar.')
        return 0
    } else {
        alert('Velocidade diminuída!')
        return velocidadeAtual -= 5
    }
}

function imprimirDados(nomeNave, velocidadeAtual) {
    return 'Nome da nave: ' + nomeNave + '\nVelocidade Atual: ' + velocidadeAtual + 'km/s'
}

const nomeNave = prompt('Digite o nome da nave')
const velocidadeInicial = 0
iniciarNavegacao(nomeNave, velocidadeInicial)