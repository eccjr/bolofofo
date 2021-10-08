
// para adicionar scroll macio
// document.querySelectorAll('a[href^="#"]').forEach(function (element) {
//   if (!element.hash) return
//   if (element.origin + element.pathname !== self.location.href) return

//   (function (destination) {
//     element.addEventListener(
//       'click',
//       function (event) {
//         window.scrollTo({
//           top: destination.offsetTop,
//           behavior: 'smooth',
//         })
//         event.preventDefault()
//       },
//       false
//     )
//   })(document.querySelector(element.hash))
// })

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

