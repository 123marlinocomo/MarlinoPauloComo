function validarFormulario() {

    let nome = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let assunto = document.getElementById("subject").value.trim();
    let mensagem = document.getElementById("message").value.trim();

    let erroNome = document.getElementById("erroNome");
    let erroEmail = document.getElementById("erroEmail");
    let erroAssunto = document.getElementById("erroAssunto");
    let erroMensagem = document.getElementById("erroMensagem");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroAssunto.textContent = "";
    erroMensagem.textContent = "";
    mensagemSucesso.textContent = "";

    let valido = true;

    if (nome === "") {
        erroNome.textContent = "O nome é obrigatório.";
        valido = false;
    }

    if (email === "") {
        erroEmail.textContent = "O e-mail é obrigatório.";
        valido = false;
    } else if (!email.includes("@")) {
        erroEmail.textContent = "Digite um e-mail válido.";
        valido = false;
    }

    if (assunto === "") {
        erroAssunto.textContent = "O assunto é obrigatório.";
        valido = false;
    }

    if (mensagem === "") {
        erroMensagem.textContent = "A mensagem é obrigatória.";
        valido = false;
    }

    if (valido) {
        mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
        document.getElementById("contactForm").reset();
    }

    return false;
}
