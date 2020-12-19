class App {
    adicionarImovel() {
        event.preventDefault()

        const novoImovel = new Imovel

        novoImovel.titulo = document.querySelector('input[name="tituloImovel"]').value
        novoImovel.tipo = document.querySelector('select[name="tipoImovel"]').value
        novoImovel.area = document.querySelector('input[name="areaImovel"]').value + ' m²'
        novoImovel.alugado = document.querySelector('input[name="alugado"]:checked').value == 'true' ? true : false
        
        this.atualizarTabela(novoImovel)
        this.zerarInputs()
    }

    atualizarTabela(novoImovel) {
        const listaImoveis = document.getElementById('listaImoveis')

        const tr = document.createElement('tr')
        
        for(let [att, value] of Object.entries(novoImovel)) {
            const td = document.createElement('td')
            if(att == 'alugado') {
                if(value) {
                    td.innerHTML = 'ALUGADO'
                    td.classList.add('imovelAlugado')
                } else {
                    td.innerHTML = 'DISPONÍVEL'
                    td.classList.add('imovelDisponivel')
                }
            } else {
                td.innerHTML = value.toUpperCase()
            }
            tr.appendChild(td)
        }

        const delButton = document.createElement('button')
        delButton.innerHTML = 'Remover'
        delButton.setAttribute('onmousedown', 'app.removerImovel(this)')
        const tdDelButton = document.createElement('td')
        tdDelButton.appendChild(delButton)
        tr.appendChild(tdDelButton) 

        listaImoveis.appendChild(tr)
    }

    zerarInputs() {
        const inputs = document.getElementById('formNovoImovel').querySelectorAll('input')
        Object.values(inputs).forEach((input) => input.value = '')
    }

    removerImovel(element) {
        const grandparentElement = (element.parentNode).parentNode
        document.getElementById('listaImoveis').removeChild(grandparentElement)
    }
}

const app = new App()