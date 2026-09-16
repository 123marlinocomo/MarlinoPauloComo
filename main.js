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

document.addEventListener("DOMContentLoaded", function () {

    const formLogin = document.getElementById("contactForm");

    if (!formLogin) {
        return;
    }

    const email = document.getElementById("email");
    const password = document.getElementById("exampleInputPassword1");

    const erroEmail = document.getElementById("erroEmail");
    const erroPassword = document.getElementById("erroPassword");

    const btnApagar = document.getElementById("btnApagarLogin");
    const mensagemLogin = document.getElementById("mensagemLogin");

    formLogin.addEventListener("submit", function (event) {

        event.preventDefault();

        let valido = true;

        erroEmail.textContent = "";
        erroPassword.textContent = "";
        mensagemLogin.textContent = "";

        erroEmail.classList.remove("mostrar");
        erroPassword.classList.remove("mostrar");

        if (email.value.trim() === "") {

            erroEmail.textContent = "O e-mail é obrigatório.";
            erroEmail.classList.add("mostrar");

            valido = false;

        } else if (!email.value.includes("@")) {

            erroEmail.textContent = "Digite um e-mail válido.";
            erroEmail.classList.add("mostrar");

            valido = false;
        }

        if (password.value.trim() === "") {

            erroPassword.textContent = "A palavra-passe é obrigatória.";
            erroPassword.classList.add("mostrar");

            valido = false;
        }

        if (valido) {

            mensagemLogin.textContent = "Login validado com sucesso!";
            mensagemLogin.style.color = "green";
            mensagemLogin.style.marginTop = "15px";
        }

    });

    btnApagar.addEventListener("click", function () {

        email.value = "";
        password.value = "";

        erroEmail.textContent = "";
        erroPassword.textContent = "";
        mensagemLogin.textContent = "";

        erroEmail.classList.remove("mostrar");
        erroPassword.classList.remove("mostrar");

    });

});
