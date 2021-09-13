let images = [
    "dado-1.png",
    "dado-2.png",
    "dado-3.png",
    "dado-4.png",
    "dado-5.png",
    "dado-6.png"
];

let dado = document.querySelectorAll("img");

function rolarDados() {
    dado.forEach(function(dd){
        dd.classList.add(".shake");
    });
    setTimeout(function(){
        dado.forEach(function(dd){
            dd.classList.remove(".shake");
        });
        let dadoOneValue = Math.floor(Math.random()*6);
        let dadoTwoValue = Math.floor(Math.random()*6);
        console.log(dadoOneValue,dadoTwoValue);
        document.querySelector("#dado-1").setAttribute("src", images[dadoOneValue]);
        document.querySelector("#dado-2").setAttribute("src", images[dadoTwoValue]);
        document.querySelector("#total").innerHTML = "Voce tirou: " + ( (dadoOneValue +1) + (dadoTwoValue + 1) );
    },
    1000
    );
}
rolarDados();