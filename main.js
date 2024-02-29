var saldo = parseInt(localStorage.getItem("saldo"))
var divSaldo = document.getElementById("moedass")
divSaldo.innerHTML = `<img src="https://i.imgur.com/2ZkJcuv.png" height="30px"> ${saldo}`

function verr() {
  
  
  window.location.href = "videos.html"
  
    
    
    
  
  
}

function enviarr() {
  if (saldo >= 20) {

saldo = saldo - 20
localStorage.setItem("saldo",saldo)

  window.location.href = "enviar.html"
  } else {
 
alert("Você precisa de 20 moedas para enviar seu video!")

}
}

