var Daniel = document.getElementById("daniel")
var saldo = parseInt(localStorage.getItem("saldo"))
if (saldo === null) {
  
  saldo = 20
  localStorage.setItem("saldo",saldo)
  
}

//recompensas:

  