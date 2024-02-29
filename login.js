var nome = localStorage.getItem("nome")
var email = localStorage.getItem("e-mail")
var ID = localStorage.getItem("ID")
if (!ID) {
  
  ID = Math.floor(Math.random() * 90000) + 10000;
  localStorage.setItem("ID",ID)
  
}

if (!nome) {
  var login = document.getElementById("login")
  
  login.showModal()
  
  
}
var form = document.getElementById("form")
function finalizar() {
  nome = document.getElementById("nome").value
  email = document.getElementById("email").value
  if (nome && email) {
    if (email.includes("@gmail.com")) {
      localStorage.setItem("nome",nome)
      localStorage.setItem("e-mail",email)
      
      document.getElementById("submit").style.backgroundcolor = "greenyellow"
      setTimeout(()=> {
    login.innerHTML = `
    
    <h2>Obrigado!</h2>
    <p>Dados gravados com sucesso!</p>
    
    `
      },1000)
    setTimeout(() => {
      
      login.close()
      
      
    },3000)
    
    }
  
  
}
}




form.addEventListener("submit",function(e) {
  
  e.preventDefault()
  
  
})

