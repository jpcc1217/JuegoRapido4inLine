var jugadorActual = 1;
var srcimg1 = "img/ColorFichaJugador1.png";
var srcimg2 = "img/ColorFichaJugador2.png";

var arrayElementos = [];

function seleccionarInicial() {

}


// function ponerFicha(clickid) {



//     var a = document.getElementsByClassName("col1");


//     for (let i = 5; i >= 0; i--) {

//         let b = document.getElementById(a[i].id);



//         if (b.src == "") {
//             if (jugadorActual == 1) {
//                 b.src = srcimg1;
//                 jugadorActual = 2;
//                 break;
//             }

//             b.src = srcimg2;
//             jugadorActual = 1;
//             break;
//         }


//     }


// }

function ponerFicha(clickid) {



    arrayElementos[0] = [document.getElementsByClassName("col1")];
    arrayElementos[1] = [document.getElementsByClassName("col2")];
    arrayElementos[2] = [document.getElementsByClassName("col3")];
    arrayElementos[3] = [document.getElementsByClassName("col4")];
    arrayElementos[4] = [document.getElementsByClassName("col5")];
    arrayElementos[5] = [document.getElementsByClassName("col6")];
    arrayElementos[6] = [document.getElementsByClassName("col7")];


    //  alert(arrayElementos[1][0][5].id);  acceso al elemento 5 de la columna 1

    //alert(arrayElementos[0][0].length)  length de la columna 1

    var columnaActual = clickid.replace('col', '');
    var k = (parseInt(columnaActual, 10) - 1);

    for (let i = 5; i >= 0; i--) {
        var tempb = document.getElementById(arrayElementos[k][0][i].id);

        if (tempb.src == "") {
            if (jugadorActual == 1) {
                tempb.src = srcimg1;
                jugadorActual = 2;
                break;
            }

            tempb.src = srcimg2;
            jugadorActual = 1;
            break;
        }

        jugadorActual == 2;

    }




}

function ganador() {
    // let k = 1;
    // var a = document.getElementById("s"+k+"7");

    //    filas posibles
    var arrayfilas = [];
    var arrfila1 = [];
    for (let i = 1; i <= 7; i++) {
        j=1;
        arrfila1[i-1] = document.getElementById("s"+j+i);

    }
    // alert("asd");
    alert(arrfila1[0].id);


    // columnas posibles

    // diagonal arriba izq-der

    // diagonal arriba der-izq

    // a.style.background= "black";

}
