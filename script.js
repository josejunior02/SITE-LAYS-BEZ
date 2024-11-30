// script.js

// Espera até que a página esteja totalmente carregada
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário
    const form = document.getElementById("contactForm");

    // Adiciona um evento de envio ao formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Valida os campos
        if (name === "" || email === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert(`Formulário enviado! Nome: ${name}, E-mail: ${email}`);
            form.reset(); // Reseta o formulário
        }
    });
});
