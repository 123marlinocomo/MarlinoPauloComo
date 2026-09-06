document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, introduza um e-mail válido.");
        return;
    }

    alert("Formulário enviado com sucesso!");
});