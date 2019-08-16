var jugadorActual;


function ponerFicha(){
//    document.getElementById("imgElementoFichas11").src="img/ColorFichaJugador2.png";
 

//    document.getElementById("imgElementoFichas24").src="img/ColorFichaJugador2.png";

//    var a = document.getElementsByClassName("imgFicha");
//    console.log(a);
   
//    document.getElementById(a[3].id).src="img/ColorFichaJugador1.png";

    
    var a = document.getElementsByClassName("col1");
 
    // for(let i=0;i<a.length;i++){
    //    document.getElementById(a[i].id).src="img/ColorFichaJugador1.png";
    // }

    for(let i = (a.length-1) ;i >= 0;i--){
       
        let b = document.getElementById(a[i].id);

        // a[i].id == ""?b.src="img/ColorFichaJugador1.png";i--;

        if(b.src==""){
            b.src="img/ColorFichaJugador1.png";
            break;
        }

        // b.src="img/ColorFichaJugador1.png";

    //    document.getElementById(a[i].id).src="img/ColorFichaJugador1.png";
    }



}

function validarAbajo(){

}