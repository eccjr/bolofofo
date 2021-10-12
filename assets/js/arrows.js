
const arrowL = document.getElementsByClassName("fa-chevron-left")[0]
const arrowR = document.getElementsByClassName("fa-chevron-right")[0]
let card = document.querySelectorAll(".card1")
let card2 = document.querySelectorAll(".card2")


arrowR.addEventListener('click', () => {
    for(let i=0; i< card.length; i++)
      card[i].classList.toggle("cardOff")

    for(let i=0; i< card2.length; i++)
      card2[i].classList.toggle("cardOff")
})

arrowL.addEventListener('click', () =>  {
    for(let i=0; i< card.length; i++)
      card[i].classList.toggle("cardOff")

    for(let i=0; i< card2.length; i++)
      card2[i].classList.toggle("cardOff")
})


