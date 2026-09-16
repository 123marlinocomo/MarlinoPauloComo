document.addEventListener("DOMContentLoaded", function () {

    const btnEnviar = document.getElementById("btnEnviar");
    const btnApagar = document.getElementById("btnApagar");

    if (!btnEnviar || !btnApagar) {
        return;
    }

    btnEnviar.addEventListener("click", function () {

        const nome = document.getElementById("name");
        const email = document.getElementById("email");
        const assunto = document.getElementById("subject");
        const mensagem = document.getElementById("message");

        const erroNome = document.getElementById("erroNome");
        const erroEmail = document.getElementById("erroEmail");
        const erroAssunto = document.getElementById("erroAssunto");
        const erroMensagem = document.getElementById("erroMensagem");
        const mensagemSucesso = document.getElementById("mensagemSucesso");

        let valido = true;

        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroAssunto.textContent = "";
        erroMensagem.textContent = "";
        mensagemSucesso.textContent = "";

        erroNome.classList.remove("mostrar");
        erroEmail.classList.remove("mostrar");
        erroAssunto.classList.remove("mostrar");
        erroMensagem.classList.remove("mostrar");

        if (nome.value.trim() === "") {
            erroNome.textContent = "O nome é obrigatório.";
            erroNome.classList.add("mostrar");
            valido = false;
        }

        if (email.value.trim() === "") {
            erroEmail.textContent = "O e-mail é obrigatório.";
            erroEmail.classList.add("mostrar");
            valido = false;
        } else if (!email.value.includes("@")) {
            erroEmail.textContent = "Digite um e-mail válido.";
            erroEmail.classList.add("mostrar");
            valido = false;
        }

        if (assunto.value.trim() === "") {
            erroAssunto.textContent = "O assunto é obrigatório.";
            erroAssunto.classList.add("mostrar");
            valido = false;
        }

        if (mensagem.value.trim() === "") {
            erroMensagem.textContent = "A mensagem é obrigatória.";
            erroMensagem.classList.add("mostrar");
            valido = false;
        }

        if (valido) {
            mensagemSucesso.textContent = "Formulário enviado com sucesso!";
        }
    });

    btnApagar.addEventListener("click", function () {

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        document.getElementById("erroNome").textContent = "";
        document.getElementById("erroEmail").textContent = "";
        document.getElementById("erroAssunto").textContent = "";
        document.getElementById("erroMensagem").textContent = "";
        document.getElementById("mensagemSucesso").textContent = "";

        document.getElementById("erroNome").classList.remove("mostrar");
        document.getElementById("erroEmail").classList.remove("mostrar");
        document.getElementById("erroAssunto").classList.remove("mostrar");
        document.getElementById("erroMensagem").classList.remove("mostrar");
    });

});
