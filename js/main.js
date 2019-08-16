var jugadorActual = 1;
var srcimg1 = "img/ColorFichaJugador1.png";
var srcimg2 = "img/ColorFichaJugador2.png";

function seleccionarInicial(){
    
}


function ponerFicha() {
    var a = document.getElementsByClassName("col1");


    for (let i = (a.length - 1); i >= 0; i--) {

        let b = document.getElementById(a[i].id);



        if (b.src == "") {
            if (jugadorActual == 1) {
                b.src = srcimg1;
                jugadorActual = 2;
                break;
            }

            b.src = srcimg2;
            jugadorActual = 1;
            break;
        }


    }

    var a2 = document.getElementsByClassName("col2");

}

function ponerFicha2() {

    var a = document.getElementsByClassName("col1");


}