
const arrowL = document.getElementsByClassName("fa-chevron-left")[0]
const arrowR = document.getElementsByClassName("fa-chevron-right")[0]
let card = document.getElementsByClassName("card1")
let card2 = document.getElementsByClassName("card2")

arrowR.addEventListener("click", () => {
  for(let i in card)
      card[i].classList.toggle("cardOff")

  for(let id in card2) 
      card2[id].classList.toggle("cardOff")
})

arrowL.addEventListener("click", () =>  {
  for(let i in card)
      card[i].classList.toggle("cardOff")

  for(let id in card2) 
      card2[id].classList.toggle("cardOff")
})


