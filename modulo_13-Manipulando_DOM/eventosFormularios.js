function save() {
    event.preventDefault()
    const name = document.querySelector('input[name="name"]').value
    const programmingLang = document.querySelector('select[name="programming-lang"]').value
    alert('Nome: ' + name + '\nLinguagem de programação: ' + programmingLang)
}