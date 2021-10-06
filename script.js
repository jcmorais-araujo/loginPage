let senha = document.getElementById("password");
let mensagem = document.getElementById("message");
let aviso = document.getElementById("avisos");

senha.addEventListener('input', () => {
    if (senha.value.length > 0) {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
})