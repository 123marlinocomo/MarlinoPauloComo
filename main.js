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


    // Mensagens visíveis desde o início
    erroNome.textContent = "O nome é obrigatório.";
    erroEmail.textContent = "O e-mail é obrigatório.";
    erroAssunto.textContent = "O assunto é obrigatório.";
    erroMensagem.textContent = "A mensagem é obrigatória.";


    // Botão Submeter
    btnEnviar.addEventListener("click", function () {

        let valido = true;

        mensagemSucesso.textContent = "";

        // Nome
        if (nome.value.trim() === "") {
            erroNome.textContent = "O nome é obrigatório.";
            valido = false;
        } else {
            erroNome.textContent = "";
        }


        // E-mail
        if (email.value.trim() === "") {
            erroEmail.textContent = "O e-mail é obrigatório.";
            valido = false;
        } else if (!email.value.includes("@")) {
            erroEmail.textContent = "Digite um e-mail válido.";
            valido = false;
        } else {
            erroEmail.textContent = "";
        }


        // Assunto
        if (assunto.value.trim() === "") {
            erroAssunto.textContent = "O assunto é obrigatório.";
            valido = false;
        } else {
            erroAssunto.textContent = "";
        }


        // Mensagem
        if (mensagem.value.trim() === "") {
            erroMensagem.textContent = "A mensagem é obrigatória.";
            valido = false;
        } else {
            erroMensagem.textContent = "";
        }


        // Se tudo estiver preenchido
        if (valido) {

            mensagemSucesso.textContent =
                "Mensagem enviada com sucesso!";

        }

    });


    // Botão Apagar
    btnApagar.addEventListener("click", function () {

        nome.value = "";
        email.value = "";
        assunto.value = "";
        mensagem.value = "";

        mensagemSucesso.textContent = "";

        erroNome.textContent = "O nome é obrigatório.";
        erroEmail.textContent = "O e-mail é obrigatório.";
        erroAssunto.textContent = "O assunto é obrigatório.";
        erroMensagem.textContent = "A mensagem é obrigatória.";

    });

});
