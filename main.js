function favoritarCoracao() {
    let coracoes = document.getElementsByClassName("far")
  
    for(let i in coracoes){
    coracoes[i].onclick = event => event.currentTarget.classList.toggle("fas")  
    }
}
  
  favoritarCoracao()

// para adicionar scroll macio
document.querySelectorAll('a[href^="#"]').forEach(function (element) {
  if (!element.hash) return
  if (element.origin + element.pathname !== self.location.href) return

  (function (destination) {
    element.addEventListener(
      'click',
      function (event) {
        window.scrollTo({
          top: destination.offsetTop,
          behavior: 'smooth',
        })
        event.preventDefault()
      },
      false
    )
  })(document.querySelector(element.hash))
})

// slider 

//   const imgs = document.getElementById("imgs")
//   const img = document.querySelectorAll("#imgs img")

//   let idx = 0

//   function carrossel(){
//     idx++

//     if(idx > img.length -1) 
//         idx=0

//     imgs.style.transform = `translateX(${-idx * 1100}px)`

// } setInterval(carrossel, 1800)

let arrowL = document.getElementsByClassName("fa-chevron-left")[0]
let arrowR = document.getElementsByClassName("fa-chevron-right")[0]
let card = document.getElementsByClassName("card1")
let card2 = document.getElementsByClassName("card2")

arrowR.addEventListener("click", function () {
  for(let i in card)
      card[i].classList.toggle("cardOff")

  for(let id in card2) 
      card2[id].classList.toggle("cardOff")
})

arrowL.addEventListener("click", function () {
  for(let i in card)
      card[i].classList.toggle("cardOff")

  for(let id in card2) 
      card2[id].classList.toggle("cardOff")
})


