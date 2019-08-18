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


    // alert(arrayElementos[0][0][5].id);  acceso al elemento 6 de la columna 1

    //alert(arrayElementos[0][0].length)  length de la columna 1

    var columnaActual = clickid.replace('col', '');
    var k = (parseInt(columnaActual, 10) - 1);


    for (let i = 5; i >= 0; i--) {
        var tempb = document.getElementById(arrayElementos[k][0][i].id);

        if (tempb.src == "") {
            if (jugadorActual == 1) {
                tempb.src = srcimg1;
                tempb.classList.add("fichap1");
                jugadorActual = 2;
                break;
            }

            tempb.src = srcimg2;
            tempb.classList.add("fichap2");
            jugadorActual = 1;
            break;
        }

        jugadorActual == 2;






    }



}

function ganadormejormetodo() {

    var a = document.getElementsByClassName("fichap1");

    var b = [];

    for (let i = 0; i < a.length; i++) {
        b[i] = a[i].parentElement.id.toString();
    }



    // alert(typeof(parseInt(b[0][1])));

    // if(b[0][2]==1){
    //     alert("asdasdasd");
    // }

    alert(b);

    // if(b.includes("s61")){
    //      alert("asdasdasd");
    // }


    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 4; j++) {
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + i + j) && b.includes("s" + i + j1) && b.includes("s" + i + j2) && b.includes("s" + i + j3)) {
                alert("ganador");
            }

        }
    }

    // var bp = ["s14","s12","s13","s11"]
    // for (let i = 1; i <= 6; i++) {
    //     for (let j = 1; j <= 4; j++) {
    //         let j1 = j + 1;
    //         let j2 = j + 2;
    //         let j3 = j + 3;
    //         if (bp.includes("s" + i + j) && bp.includes("s" + i + j1) && bp.includes("s" + i + j2) && bp.includes("s" + i + j3)) {
    //             alert("ganador");
    //         }

    //     }
    // }


}


function ganador() {

    var a = generarFilas();



    alert(a[0][0][0].parentElement.id);

    var b = a[0][0][0].src;



    c = b.includes("ColorFichaJugador2.png");

    alert(c);



    //    filas posibles
    // var arrayfilas = [];

    // var i = 1;
    // var j = 1;
    // for (i = 1; i <= 6; i++) {
    //     var arrfilatemp = [];
    //     for (j = 1; j <= 7; j++) {
    //         arrfilatemp[j - 1] = document.getElementById("s" + i + j);
    //     }
    //     arrayfilas[i - 1] = [arrfilatemp];
    // }
    // var a = arrayfilas[0][0][0].id;

    // alert(a);


    // alert(arrayfilas[1][0][6].id);


    // columnas posibles

    // diagonal arriba izq-der

    // diagonal arriba der-izq

    // a.style.background= "black";

}

function generarFilas() {
    var arrayfilas = [];

    var i = 1;
    var j = 1;
    for (i = 1; i <= 6; i++) {
        var arrfilatemp = [];
        for (j = 1; j <= 7; j++) {
            arrfilatemp[j - 1] = document.getElementById("imgElementoFichas" + i + j);
        }
        arrayfilas[i - 1] = [arrfilatemp];
    }

    return arrayfilas;
}

