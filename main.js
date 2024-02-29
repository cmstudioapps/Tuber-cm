var saldo = parseInt(localStorage.getItem("saldo"))
var divSaldo = document.getElementById("moedass")
divSaldo.innerHTML = `<img src="https://i.imgur.com/2ZkJcuv.png" height="30px"> ${saldo}`

function ver() {
  
  
  window.location.href = "videos.html"
  
    
    
    
  }
  
}

var enviar = () => {
  if (saldo >= 10) {

saldo = saldo - 10
localStorage.setItem("saldo",saldo.toString)

  window.location.href = "enviar.html"
  } else {
 
alert("Você não tem saldo, assista videos!")

}
}

