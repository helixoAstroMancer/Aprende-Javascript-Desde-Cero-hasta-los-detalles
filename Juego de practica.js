function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo){
       
        if (this.sp >= 40){
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        }else {
            console.info(this.nombre + "no tienes suficiente sp para curar");
        }
        this.estado(jugadorObjetivo);
    }

    this.tirarflecha = function( jugadorObjetivo){
        if(jugadorObjetivo.pv > 40 ){
            jugadorObjetivo.pv -= 40;
        }else {
            jugadorObjetivo.pv = 0;
            console.log (jugadorObjetivo.nombre + "ha muerto");
        }
        
        //
        this.estado(jugadorObjetivo);

    }



    this.estado = function( jugadorObjetivo){
        console.log(this);
        console.log(jugadorObjetivo);
    }
};

let gandalf = new Jugador("Gandalf");
let samuran = new Jugador("Samuran");

console.log(gandalf);
console.log(samuran);

gandalf.curar(samuran);

console.log(gandalf);
console.log(samuran);
