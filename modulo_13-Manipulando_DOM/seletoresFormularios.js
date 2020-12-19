function showInfo() {
    const name = document.querySelector('input[name="name"]').value
    const favoriteColor = document.querySelector('select[name="color"] option:checked').text
    const likeProgramming = document.querySelector('input[name="like-programming"]:checked').value
    const developerOptions = document.querySelectorAll('input[name="developer-options"]:checked')
    const optionsValue = []
    developerOptions.forEach(element => {optionsValue.push(element.value)})
    const optionsChecked = optionsValue.join(', ')

    alert(`Nome: ${name}\nCor primária: ${favoriteColor}\nGosta de programar? ${likeProgramming}\nConhecimentos: ${optionsChecked}`)
}