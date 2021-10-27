
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