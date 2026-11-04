
// Inicialização do EmailJS
emailjs.init({
    publicKey: "dSBirtVw24mA8HOry"
});


// Função do menu
function abreFechaMenu() {

    const menu = document.getElementById("menu");
    const botao = document.querySelector("header button");

    menu.classList.toggle("ativo");
    botao.classList.toggle("ativo");

}


// Envio do formulário
const formulario = document.getElementById("formulario-contato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const btn = formulario.querySelector("button");
    const status = document.getElementById("status-envio");

    // Altera o botão durante o envio
    btn.disabled = true;
    btn.innerText = "Enviando...";

    status.textContent = "";

    // Envia os dados para o EmailJS
    emailjs.sendForm(
        "service_hmfbmmb",
        "template_hl0mhn3",
        formulario
    )

    .then(function(response) {

        console.log("SUCESSO!", response.status, response.text);

        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "#4CAF50";

        // Limpa os campos
        formulario.reset();

    })

    .catch(function(error) {

        console.error("ERRO AO ENVIAR:", error);

        status.textContent = "Erro ao enviar mensagem. Tente novamente.";
        status.style.color = "#ff4444";

    })

    .finally(function() {

        // Restaura o botão
        btn.disabled = false;
        btn.innerText = "Enviar";

    });

});
