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
  
  
} 

if (nome) {
  
  fetch("https://api.sheetmonkey.io/form/iX2CxomhHUuBZdg9q74kZW", {
    
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
}
  

var form = document.getElementById("form")
function finalizar() {
  var IDD = document.getElementById("ID")
  IDD.value = ID
  nome = document.getElementById("nome").value
  email = document.getElementById("email").value
  localStorage.setItem("e-mail",email)
  if (nome && email) {
    if (email.includes("@gmail.com")) {
      localStorage.setItem("nome",nome)
      
      
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


