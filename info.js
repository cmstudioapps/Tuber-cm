var acessando = window.location.href;
console.log(acessando)
var email = localStorage.getItem("e-mail")
var emaill = document.getElementById("inputEmail")
emaill.value = `${email}`


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