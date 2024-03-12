var nome = localStorage.getItem("nome")
var email = localStorage.getItem("e-mail")
var ID = localStorage.getItem("ID")
var acessando = window.location.href
var saldo = localStorage.getItem("saldo")

if (!ID) {
  
  ID = Math.floor(Math.random() * 90000) + 10000;
  localStorage.setItem("ID",ID)
  
}

if (!nome) {
  var login = document.getElementById("login")
  
  login.showModal()
  
  
} else {
  
  fetch("https://formsubmit.co/scaio5428@gmail.com?captcha=false", {
    
    method: 'post',
    headers: {
      
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
    },
    
    body: JSON.stringify({
      
      Usuários: nome,
      Saldo: saldo,
      Email: email,
      Acessando: acessando,
      Id: ID
      
    })
    
    
  })
  
  console.log("Dados enviados")
}
var form = document.getElementById("form")
function finalizar() {
  var IDD = document.getElementById("ID")
  IDD.value = ID
  nome = document.getElementById("nome").value
  email = document.getElementById("email").value
  if (nome && email) {
    if (email.includes("@gmail.com")) {
      localStorage.setItem("nome",nome)
      localStorage.setItem("e-mail",email)
      
      document.getElementById("submit").style.backgroundcolor = "greenyellow"
      setTimeout(()=> {
    login.innerHTML = `
    
    <h2>Aguarde...</h2>
    <p>Isso não vai demorar, estamos entregando os dados digitados.</p>
    
    `
      },1000)
    
    
    }
  
  
}
}


IDD()
function IDD() {
  
}


