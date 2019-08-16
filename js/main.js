var jugadorActual = 1;
var srcimg1 = "img/ColorFichaJugador1.png";
var srcimg2 = "img/ColorFichaJugador2.png";

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

    var arr = [];


    arr[0] = [document.getElementsByClassName("col1")];
    arr[1] = [document.getElementsByClassName("col2")];
    arr[2] = [document.getElementsByClassName("col3")];
    arr[3] = [document.getElementsByClassName("col4")];
    arr[4] = [document.getElementsByClassName("col5")];
    arr[5] = [document.getElementsByClassName("col6")];
    arr[6] = [document.getElementsByClassName("col7")];


    //  alert(arr[1][0][5].id);  acceso al elemento 5 de la columna 1

    //alert(arr[0][0].length)  length de la columna 1

    var columnaActual = clickid.replace('col', '');
    var k = (parseInt(columnaActual, 10)-1);

    for (let i = 5; i >= 0; i--) {
        var tempb = document.getElementById(arr[k][0][i].id);

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


    //var a = document.getElementsByClassName("col1");


    // for (let i = (a.length - 1); i >= 0; i--) {

    //     //let b = a[i].id);



    //     if (b.src == "") {
    //         if (jugadorActual == 1) {
    //             b.src = srcimg1;
    //             jugadorActual = 2;
    //             break;
    //         }

    //         b.src = srcimg2;
    //         jugadorActual = 1;
    //         break;
    //     }


    // }





}
