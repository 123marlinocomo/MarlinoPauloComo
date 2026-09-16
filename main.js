document.addEventListener("DOMContentLoaded", function () {

    const nome = document.getElementById("name");
    const email = document.getElementById("email");
    const assunto = document.getElementById("subject");
    const mensagem = document.getElementById("message");

    const erroNome = document.getElementById("erroNome");
    const erroEmail = document.getElementById("erroEmail");
    const erroAssunto = document.getElementById("erroAssunto");
    const erroMensagem = document.getElementById("erroMensagem");

    const mensagemSucesso = document.getElementById("mensagemSucesso");

    const btnEnviar = document.getElementById("btnEnviar");
    const btnApagar = document.getElementById("btnApagar");

    btnEnviar.addEventListener("click", function () {

        let valido = true;

        mensagemSucesso.textContent = "";

        erroNome.classList.remove("mostrar");
        erroEmail.classList.remove("mostrar");
        erroAssunto.classList.remove("mostrar");
        erroMensagem.classList.remove("mostrar");

        if (nome.value.trim() === "") {
            erroNome.textContent = "O nome é obrigatório.";
            erroNome.classList.add("mostrar");
            valido = false;
        } else {
            erroNome.textContent = "";
        }

        if (email.value.trim() === "") {
            erroEmail.textContent = "O e-mail é obrigatório.";
            erroEmail.classList.add("mostrar");
            valido = false;
        } else if (!email.value.includes("@")) {
            erroEmail.textContent = "Digite um e-mail válido.";
            erroEmail.classList.add("mostrar");
            valido = false;
        } else {
            erroEmail.textContent = "";
        }

        if (assunto.value.trim() === "") {
            erroAssunto.textContent = "O assunto é obrigatório.";
            erroAssunto.classList.add("mostrar");
            valido = false;
        } else {
            erroAssunto.textContent = "";
        }

        if (mensagem.value.trim() === "") {
            erroMensagem.textContent = "A mensagem é obrigatória.";
            erroMensagem.classList.add("mostrar");
            valido = false;
        } else {
            erroMensagem.textContent = "";
        }

        if (valido) {
            mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
        }
    });

    btnApagar.addEventListener("click", function () {

        nome.value = "";
        email.value = "";
        assunto.value = "";
        mensagem.value = "";

        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroAssunto.textContent = "";
        erroMensagem.textContent = "";

        erroNome.classList.remove("mostrar");
        erroEmail.classList.remove("mostrar");
        erroAssunto.classList.remove("mostrar");
        erroMensagem.classList.remove("mostrar");

        mensagemSucesso.textContent = "";
    });

});
