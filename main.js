var dados = localStorage.getItem("dados")
var saldo = parseInt(localStorage.getItem("saldo"))
var divSaldo = document.getElementById("moedass")
divSaldo.innerHTML = `<img src="https://i.imgur.com/2ZkJcuv.png" height="30px"> ${saldo}`
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

function enviarr() {
  if (saldo >= 20) {

saldo = saldo - 20
localStorage.setItem("saldo",saldo)

  window.location.href = "enviar.html"
  } else {

alert("Você precisa de 20 moedas para enviar seu video!")

}
}

function Insta() {
  
  if (saldo >= 35) {
    
    saldo = saldo - 35
    localStorage.setItem("saldo",saldo)
    window.location.href = "insta.html"
    
  } else {
    
    alert("Você precisa de 35 moedas...")
    
  }
  
  
}


function config() {

window.location.href = "economia.html"

}