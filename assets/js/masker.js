// funçao para validar input com regex testando o terminal
document.getElementById("submit").addEventListener("click", function(event) {
    
    const nome = document.getElementById("name").value
    const email = document.getElementById("email").value
    const tel = document.getElementById("tel").value

    const regexEmail = /^\w+@\w+\.\w+$/
    const regexTel = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

    const emailVal = regexEmail.test(email)
    const telVal = regexTel.test(tel)

    if (!emailVal) {
        alert("O email não foi inserido corretamente. Tente algo como email@email.com")
    } else if (!telVal) {
        alert("O telefone não foi inserido corretamente. Tente algo como XX XXXXX-XXXX")
    } else {
        alert("Obrigado por se cadastrar, " +nome+"!")
    }

    event.preventDefault()

})
// usando a lib para mascarar os valores dos inputs
VMasker(document.querySelector('#tel')).maskPattern('(99) 99999-9999')