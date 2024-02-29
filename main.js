var divSaldo = document.getElementById("moedass")
divSaldo.innerHTML = `<img src="https://i.imgur.com/2ZkJcuv.png" height="30px"> ${saldo}`

function ver() {
  if (saldo >= 10) {
  
  window.location.href = "videos.html"
  } else {
    
    alert("Você não tem saldo suficiente, clique em assistir mais videos...")
    
  }
  
}

var enviar = () => {
  
  window.location.href = "enviar.html"
  
}

