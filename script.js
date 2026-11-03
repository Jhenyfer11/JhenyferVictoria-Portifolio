function abreFechaMenu() {

    const menu = document.getElementById("menu");
    const botao = document.querySelector("header button");

    menu.classList.toggle("ativo");
    botao.classList.toggle("ativo");

}