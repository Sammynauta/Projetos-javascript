var hora = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")

var relogio = setInterval (
    function time () {
        var data_now = new Date();
        var hr = data_now.getHours();
        var min = data_now.getMinutes();
        var seg = data_now.getSeconds();


        if(hr < 10){
            hr ="0" + hr;
        }
        if(min < 10) {
            min = "0" + min;
        }
        if(seg < 10) {
            seg = "0" + seg;
        }

        hora.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = seg;

    }
    ,1000
);