var dados = localStorage.getItem("dados")
var saldo = parseInt(localStorage.getItem("saldo"))
var divSaldo = document.getElementById("moedass")
divSaldo.innerHTML = `<img src="https://i.imgur.com/2ZkJcuv.png" height="30px"> ${saldo}`
var data = new Date()
var dia = data.getDate()
var diaAnterior = localStorage.getItem("anterior") || 0
var limite = localStorage.getItem("limite") || 0
var ontem = localStorage.getItem("ontem")
var recompensas = parseInt(localStorage.getItem("recompensas") || 0)
var destaques = document.getElementById("videos")


if (dados == 1) {

        var iframes = document.getElementById("videos").getElementsByTagName("iframe");
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].src = ""; // Define a src como uma string vazia para parar o carregamento
        }

  destaques.style.display = "none"

}

window.addEventListener("load", function() {
(function(d, w, c) {
        w.ChatraID = 'LQnrWiXFxKmhKMTta';
        var s = d.createElement('script');
        w[c] = w[c] || function() { (w[c].q = w[c].q || []).push(arguments); };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
    })

function verr() {


  window.location.href = "videos.html"






}






function recom() {
  if (recompensas > 0) {
    
    alert("Sua recompensa ja foi entregue, volte amanhã.")
    
    
  }
  if (dia != ontem) {
    
    ontem = dia
    localStorage.setItem("ontem",ontem)
    
    recompensas = 0
    localStorage.setItem("recompensas",recompensas)
  }
  
  if (recompensas < 1) {
    
    recompensas++
    localStorage.setItem("recompensas",recompensas)
    
    saldo = saldo + 25
    localStorage.setItem("saldo",saldo)
    alert("Parabéns você ganhou +25 moedas graças aos perfis do tik tok.")
  console.log(saldo)
  
  }
  
  
  
}


function enviarr() {
  if (limite >= 3) {
  alert("Você atingiu o limite diário! volte amanhã.")
}
  if (dia != diaAnterior) {
  
  diaAnterior = dia
  localStorage.setItem("anterior",diaAnterior)
  
  limite = 0
  localStorage.setItem("limite",limite)
  
}
if (saldo < 20) {

alert("Você precisa de 20 moedas para enviar seu video!")

} 
if (saldo >= 20 && limite < 3) {

saldo = saldo - 20
localStorage.setItem("saldo",saldo)

limite++
localStorage.setItem("limite", limite)

  window.location.href = "enviar.html"
  }


  
  


}

function insta() {
  
  if (limite >= 3) {
      
      alert("Você atingiu o limite diário! Volte amanhã.")
      
    }
  
  if (dia != diaAnterior) {
  diaAnterior = dia
  localStorage.setItem("anterior",diaAnterior)
  
  limite = 0
  localStorage.setItem("limite",limite)
    
  
  }
  if (saldo < 35) {
    
    alert("Você precisa de 35 moedas...")
    
  }
  if (saldo >= 35 && limite < 3) {
    
    saldo = saldo - 35
    localStorage.setItem("saldo",saldo)
    
    limite++
      localStorage.setItem("limite",limite)
    
    window.location.href = "insta.html"
    
  } 
  
  
  
}


function config() {
if (nome.includes("Caio")) {
window.location.href = "economia.html"
}
}

function enviarTik() {
if (limite >= 3) {
      
      alert("Você atingiu o limite diário! Volte amanhã.")
      
    }
  
  if (dia != diaAnterior) {
  diaAnterior = dia
  localStorage.setItem("anterior",diaAnterior)
  
  limite = 0
  localStorage.setItem("limite",limite)
    
  
  }
  if (saldo < 35) {
    
    alert("Você precisa de 35 moedas...")
    
  }
  if (saldo >= 35 && limite < 3) {
    
    saldo = saldo - 35
    localStorage.setItem("saldo",saldo)
    
    limite++
      localStorage.setItem("limite",limite)
    
    window.location.href = "tik.html"
    
  } 
  
  
  
}
