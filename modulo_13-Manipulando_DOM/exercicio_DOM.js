const listAddress = []

function filterObject(object, filter) {
    const arrayReturn = []

    for(obj of object) {
        if(filter(obj)) {
            arrayReturn.push(obj)
        }
    }

    return arrayReturn
}

function addNewAddress() {
    const formAddress = document.querySelector('form#addNewAddress').children
    const addressInputs = filterObject(formAddress, (obj) => obj.localName == 'input')
    const newAddress = new Object()
    addressInputs.forEach(input => {
        newAddress[input.name] = input.value
    })
    listAddress.push(newAddress)
    addressInputs.forEach((input) => {
        input.value = ''
    })
}

function printAddress(listAddress) {
    const addressTable = document.querySelector('table#addressTable')
    if(addressTable.children[1]) {
        addressTable.removeChild(addressTable.lastChild)
    }
    const tBody = document.createElement('tbody')

    for(let [index, address] of listAddress.entries()) {
        const tr = document.createElement('tr')

        for(value of Object.values(address)) {
            const td = document.createElement('td')
            const tdValue = document.createTextNode(value)
            td.appendChild(tdValue)
            tr.appendChild(td)
        }

        const deleteButton = document.createElement('button')
        const deleteButtonText = document.createTextNode('X')
        deleteButton.appendChild(deleteButtonText)
        deleteButton.setAttribute('onmousedown', `removeAddress(${index})`)
        tr.appendChild(deleteButton)

        tBody.appendChild(tr)
    }

    addressTable.appendChild(tBody)
}

function removeAddress(element) {
    listAddress.splice(element, 1)
    printAddress(listAddress)
}