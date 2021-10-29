
function Inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//Limpa o campo
function Limpar() {
    document.getElementById('resultado').innerHTML = "";
}

//Exclui apenas um digito
function Apagar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
        return setTimeout(() => {Limpar();}, 1000);
    }
}