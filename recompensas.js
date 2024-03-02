var Daniel = document.getElementById("daniel")
var saldo = parseInt(localStorage.getItem("saldo")|| 20)
if (saldo === null || isNaN(saldo)) {
alert("ocorreu um erro inesperado")
  
  saldo = 20
  localStorage.setItem("saldo",saldo.toString())
  
}

//recompensas:

  