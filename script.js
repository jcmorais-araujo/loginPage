let senha = document.getElementById("password");
let mensagem = document.getElementById("message");
let aviso = document.getElementById("avisos");

senha.addEventListener('input', () => {
    if (senha.value.length > 0) {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }

    if (senha.value.length < 4) {
        aviso.innerHTML = "fraca";
        senha.style.borderColor = "#ff5925";
        mensagem.style.color = "#ff5925";
    } 
    else if (senha.value.length >= 4 && senha.value.length < 6) {
        aviso.innerHTML = "moderada";
        senha.style.borderColor = "yellow";
        mensagem.style.color = "yellow";
    } 
    else if (senha.value.length > 6) {
        aviso.innerHTML = "forte";
        senha.style.borderColor = "#26d730";
        mensagem.style.color = "#26d730";
    }

})