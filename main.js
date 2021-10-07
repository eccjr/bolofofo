function favoritarCoracao() {
    let coracoes = document.getElementsByClassName("far")
  
    for(let i in coracoes){
    coracoes[i].onclick = event => event.currentTarget.classList.toggle("fas")  
    }
  }
  
  favoritarCoracao()