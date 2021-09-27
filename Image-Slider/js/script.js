let x = 0; // imagem atual
let y = 4; // total de imagens

const pontos = document.querySelectorAll(".botoes button"); //bolinhas indicadoras
const images = document.querySelectorAll("section img");

function nextSlider() {
    document.getElementById("img" + (x + 1)).classList.remove("active");
    x = (y + x + 1) % y;
    document.getElementById("img" + (x + 1)).classList.add("active");
    indicator(x + 1);
}

function prevSlider() {
    document.getElementById("img" + (x + 1)).classList.remove("active");
    x = (y + x - 1) % y;
    document.getElementById("img" + (x + 1)).classList.add("active");
    indicator(x + 1);
}

// ativando a bolinha indicadora
function indicator(num) {
    pontos.forEach(function (ponto) {
        ponto.style.backgroundColor = "transparent";
    });
    document.querySelector(".botoes button:nth-child(" + num + ")").style.backgroundColor = "#5e9be0";
}

// mudando imagem atraves dos pontinhos
function bolinha(index) {
    images.forEach(function (image) {
        image.classList.remove("active")
    });
    document.getElementById("img" + index).classList.add("active");
    x = index - 1;
    indicator(index);
}