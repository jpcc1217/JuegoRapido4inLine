var jugadorActual = 1;
var srcimg1 = "img/ColorFichaJugador1.png";
var srcimg2 = "img/ColorFichaJugador2.png";

var arrayElementos = [];

// id="imgfichaJugador1" src="img/seccionjuego/Jugador 1 seleccionado.png"

function seleccionarInicial() {

}

function comojugar(){
    // document.getElementById("comojugarmain").style.display = "inline";
    document.getElementById("comojugarseccion").style.display = "initial";
}

function ganadorventana(){
    document.getElementById("ganadorseccion").style.display = "initial";
}

function comojugarcerrar(){
    // document.getElementById("comojugarmain").style.display = "inline";
    document.getElementById("comojugarseccion").style.display = "none";
}



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

        if (tempb.src.includes("img/ColorFichaJugadorblanco.png")) {
            if (jugadorActual == 1) {
                tempb.src = srcimg1;
                tempb.classList.add("fichap1");
                ganadorplayer1();
                jugadorActual = 2;
                document.getElementById("imgfichaJugador2").src = "img/seccionjuego/Jugador 2 seleccionado.png";
                document.getElementById("imgfichaJugador1").src = "img/seccionjuego/Jugador 1.png";
                // alert("turno Jugador"+jugadorActual)
                break;
            }

            tempb.src = srcimg2;
            tempb.classList.add("fichap2");
            ganadorplayer2();
            jugadorActual = 1;
            document.getElementById("imgfichaJugador1").src = "img/seccionjuego/Jugador 1 seleccionado.png";
            document.getElementById("imgfichaJugador2").src = "img/seccionjuego/Jugador 2.png";
            // alert("turno Jugador"+jugadorActual)
            break;
        }
        jugadorActual == 2;
    }
}

function ganadorplayer1() {

    var a = document.getElementsByClassName("fichap1");

    var b = [];

    for (let i = 0; i < a.length; i++) {
        b[i] = a[i].parentElement.id.toString();
    }


    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 4; j++) {
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + i + j) && b.includes("s" + i + j1) && b.includes("s" + i + j2) && b.includes("s" + i + j3)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 3; j++) {
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + j + i) && b.includes("s" + j1 + i) && b.includes("s" + j2 + i) && b.includes("s" + j3 + i)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }

    /* iterar en las diagonales izq-der */
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= 7; j++) {
            let i1 = i + 1;
            let i2 = i + 2;
            let i3 = i + 3;
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + i + j) && b.includes("s" + i1 + j1) && b.includes("s" + i2 + j2) && b.includes("s" + i3 + j3)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 7; j++) {
            let i1 = i + 1;
            let i2 = i + 2;
            let i3 = i + 3;
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + i + j) && b.includes("s" + i1 + j1) && b.includes("s" + i2 + j2) && b.includes("s" + i3 + j3)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }


    for (let i = 1; i <= 4; i++) {
        for (let j = 2; j <= 7; j++) {
            let i1 = i + 1;
            let i2 = i + 2;
            let i3 = i + 3;
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + i + j) && b.includes("s" + i1 + j1) && b.includes("s" + i2 + j2) && b.includes("s" + i3 + j3)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }

    /* iterar en las diagonales der-izq */
    for (let i = 5; i >= 0; i--) {
        for (let j = 7; j >= 0; j--) {
            let i1 = i - 1;
            let i2 = i - 2;
            let i3 = i - 3;
            let j1 = j - 1;
            let j2 = j - 2;
            let j3 = j - 3;
            if (b.includes("s" + i + j) && b.includes("s" + i1 + j1) && b.includes("s" + i2 + j2) && b.includes("s" + i3 + j3)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }

    for (let i = 1; i <= 7; i++) {
        for (let j = 7; j >= 4; j--) {
            let i1 = i - 1;
            let i2 = i - 2;
            let i3 = i - 3;
            let j1 = j - 1;
            let j2 = j - 2;
            let j3 = j - 3;
            if (b.includes("s" + i + j) && b.includes("s" + i1 + j1) && b.includes("s" + i2 + j2) && b.includes("s" + i3 + j3)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }

    for (let i = 4; i <= 7; i++) {
        for (let j = 7; j >= 0; j--) {
            let i1 = i - 1;
            let i2 = i - 2;
            let i3 = i - 3;
            let j1 = j - 1;
            let j2 = j - 2;
            let j3 = j - 3;
            if (b.includes("s" + i + j) && b.includes("s" + i1 + j1) && b.includes("s" + i2 + j2) && b.includes("s" + i3 + j3)) {
                alert("ganador player 1");
                ganadorventana();
            }

        }
    }

   



    // for (let i = 1; i <= 6; i++) { //numero de diagonales
    //     for (let j = 1; j <= 3; j++) { //elemento hasta el cual evaluar las diagonales
    //         let i1 = i + 1;
    //         let i2 = i + 2;
    //         let i3 = i + 3;
    //         let i4 = i + 4;
    //         let j1 = j + 1;
    //         let j2 = j + 2;
    //         let j3 = j + 3;
    //         let j4 = j + 4;
    //         if (b.includes("s" + j + i) && b.includes("s" + j1 + i) && b.includes("s" + j2 + i) && b.includes("s" + j3 + i)) {
    //             alert("ganador player 1");
    //             location.href = "seleccionjugadores.html";
    //         }

    //     }
    // }

}

function ganadorplayer2() {
    var a = document.getElementsByClassName("fichap2");

    var b = [];

    for (let i = 0; i < a.length; i++) {
        b[i] = a[i].parentElement.id.toString();
    }


    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 4; j++) {
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + i + j) && b.includes("s" + i + j1) && b.includes("s" + i + j2) && b.includes("s" + i + j3)) {
                alert("ganador player 2");
                location.href = "seleccionjugadores.html";
            }

        }
    }

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 3; j++) {
            let j1 = j + 1;
            let j2 = j + 2;
            let j3 = j + 3;
            if (b.includes("s" + j + i) && b.includes("s" + j1 + i) && b.includes("s" + j2 + i) && b.includes("s" + j3 + i)) {
                alert("ganador player 2");
                location.href = "seleccionjugadores.html";
            }

        }
    }


}

function metodoprueba() {
    var a = document.getElementById("imgElementoFichas67");
    alert(a.src);
}

// -------------------------------------------------------------------------------------------------------------

// Primera Prueba de funcion para determinar ganador, la dejo porque si


// function ganador() {

//     var a = generarFilas();



//     alert(a[0][0][0].parentElement.id);

//     var b = a[0][0][0].src;



//     c = b.includes("ColorFichaJugador2.png");

//     alert(c);



//     //    filas posibles
//     var arrayfilas = [];

//     var i = 1;
//     var j = 1;
//     for (i = 1; i <= 6; i++) {
//         var arrfilatemp = [];
//         for (j = 1; j <= 7; j++) {
//             arrfilatemp[j - 1] = document.getElementById("s" + i + j);
//         }
//         arrayfilas[i - 1] = [arrfilatemp];
//     }
//     var a = arrayfilas[0][0][0].id;

//     alert(a);


//     alert(arrayfilas[1][0][6].id);


//     // columnas posibles

//     // diagonal arriba izq-der

//     // diagonal arriba der-izq

//     a.style.background= "black";

// }

// function generarFilas() {
//     var arrayfilas = [];

//     var i = 1;
//     var j = 1;
//     for (i = 1; i <= 6; i++) {
//         var arrfilatemp = [];
//         for (j = 1; j <= 7; j++) {
//             arrfilatemp[j - 1] = document.getElementById("imgElementoFichas" + i + j);
//         }
//         arrayfilas[i - 1] = [arrfilatemp];
//     }

//     return arrayfilas;
// }

