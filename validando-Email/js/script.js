const form = document.querySelector("form"),
    emailInput = form.querySelector(".email"),
    texto = form.querySelector(".aviso");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    form.classList.add("error");
    form.classList.remove("valid");
    if (emailInput.value == "") {
        texto.innerText = "Campo em branco, favor inserir email.";
    } else if (!emailInput.value.match(pattern)) {
        texto.innerText = "Favor, inserir email valido";
    } else {
        form.classList.replace("error", "valid");
        texto.innerText = "email valido";
    }
})