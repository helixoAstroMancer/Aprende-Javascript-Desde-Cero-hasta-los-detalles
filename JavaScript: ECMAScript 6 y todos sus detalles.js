let mensaje = "hola mundo";


console.log(mensaje);
// recordando lo basico de JS > ahora vinene ES6

//ejemplo de variable global
let men = "holaaa";

if (1===1) {
    men = "hola otro mundo";


}

console.log (men);
//no hay re-declaraciones cuando se trata de let
/*
let men2 = "123";
var men2 = "444"; 
*/

/////////
let men3 = "hola 3";

if (2===3){
    let men3 = "hola otro 3";

}
console.log(men3);

// constantes

const IMPUESTO_IVA = 15.41;

if (true) {
    const IMPUESTO_IVA = 24.42;

    console.log (IMPUESTO_IVA);
}
console.log(IMPUESTO_IVA);

// no se pueden reasignar valores a las constantes pero aun asi se pueden reuntilizar con valores diferentes en otros ambitos

// declaracion de objetos 

const PERSONA = {
    nombre: "Juan",
    apellido: "Perez"
};
/* esto a error porque no se puede reasignar una constante 

PERSONA = {
    nombre: "Carlos",
    apellido: "Lara"
}
*/
console.log (PERSONA);

//declaraciones de variables en ciclos

for ( var i = 0; i <= 10; i++ ){
    //
    //
    //
}
console.log( i );
 // se usa para no tener choques de variables dobles al usar var

// declaracion de funciones de ciclo 

let funciones = [];

for ( let i=0; i < 10; i++) {

    //funciones.push ( function(){ console.log(i); });
    funciones.push(
        (function (valor){
            return function (){
                console.log(valor);
            }
        })(i)
    )
}

funciones.forEach ( function (func){
    func();



});

let numero = 10;
 
if( true ){ 
    let numero = 20;
    
    while(true){ 
        let numero = 20; 
        
        for(let numero = 1; numero < 10; numero ++){ 
            numero = numero; 
        } break; 
   }
}
 
console.log(numero);


//segmentos de caracteres

let saludo = "hola mundo!";
console.log ( saludo.substr (0,1) === "h" );

console.log ( saludo.startsWith ("hola") );
console.log ( saludo.endsWith ("!"));
console.log ( saludo.includes ("x"));
console.log ( saludo.startsWith ("Mu", 5));
console.log ( saludo.includes ("a", 5));

//repeticion de strings

let cadena = "hola ";
console.log ( cadena.repeat (3));
console.log ( "12".repeat (10));

const ESPACIOS = 12;

let nombress = ["Juan", "Pedro", "Maria", "Ana"];
let telefonos = ["123452", "1334526", "67878436", "367373"];

for (i in nombress){
    let dif = ESPACIOS - nombress[i].length;
    
    console.log ( nombress[i] + "".repeat(dif) + "|" + telefonos[i]);
}

// Plantillas literales

function obtenerNombre(){
    return "Juan Perez";
}
let nombr = "Juan";
let apelli = "Perez";
let nombreCompleto = nombr + " " + apelli;

console.log ( nombreCompleto);

let nombreCompleto2 = `Mi nombre es ${nombr} ${apelli}`;
console.log ( nombreCompleto2);

let nombreCompleto3 = `Mi nombre completo es ${obtenerNombre()} ${1 + 2}`;

console.log ( nombreCompleto3);


let multilinea =`<h1> titulo </h1> `;


// Templates con tags

function etiqueta ( literales, ...substituciones) {
    //console.log (arguments);
    let resultado =  " ";
    console.log (literales);
    console.log (substituciones);
    for ( let i = 0; i < substituciones.length; i++){
        resultado += literales[i];
        resultado += substituciones[i];
    }


    return "otro texto";
}


let unidades = 5,
    costo_unitario = 10;

let mensaje2 = etiqueta `${unidades} lapices cuestan ${unidades * costo_unitario} USD.`;

console.log ( mensaje2);

// usando valores "raw" (crudos) en templates literales


let mensaje3 = `Hola \nMundo\\`;

    mensaje32 = String.raw`Hola \nMundo\\`;

let mensaje33 = `Hola \nMundo\\`;

console.log ( mensaje3);
console.log ( mensaje32);
console.log ( mensaje33);

//parametros por defecto

/*function saludo2 ( tiempo){
    salud ("hola mundo", tiempo);
}
function salud (mensaje = "hola mundo", tiempo = 1500){

    //mensaje = mensaje || "hola mundo";
    //mensaje = (typeof mensaje !== "undefined")? mensaje : "hola mundo";

    setTimeout ( function(){
        console. log (mensaje);
    }, tiempo);
 }

salud ();
*/

function saludr (fn = function (){ console.log ("hola mundo");}) {
    console.log (typeof fn );

    if ( typeof fn === "undefined"){
        console.error ('No es una funcion');
        return;
    }
    fn();
    console.log (personan)
}

function fnTemporal(){
    console.log ("hola mundo FN");
}

let personan = {
    nombrer: "Juan carlos"
}
saludr();

// como los valores por defecto afectan el objeto "arguments"

function sumar (a,b) {
    console.log (arguments);
}

sumar (5,10,12,20);

///////////////////////////////////////////

//parametros rest - parametros sin nombre

function agregar_alumno (arr_alumnos, ...alumnos ){
    console.log (arguments);

    for ( let i = 1; i < arguments.length; i++){
        arr_alumnos.push(alumnos[i]);
    }
    return arr_alumnos;
}

let alumnos_arr =  ["Juan"];
let alumnos_arr2 = agregar_alumno (alumnos_arr, "Pedro", "Ana", "Luisa", "Carolos", "Flor");

console.log ( alumnos_arr2);

// Restricciones del parametro rest 
/*
function juntar_nombres( nombres, ...apellido){

}*/

//El operador "Spread"


/*
let num1 = 12,
    num2 = 14;
let max = Math.max ( num1, num2);
*/
/*
let numeross = [13, 14, 54, 62, 83, 24, 21, 76, 863];

let max = Math.max.apply ( Math, numeross);

 */

let numeross = [13, 14, 54, 62, 83, 24, 21, 76, 863];

let max = Math.max( ...numeross);

console.log (max);

// Romper la relación de referencia de los objetos
/*
let persona1 = {
    nombrr : 'Juan',
    edad: 14
}

let persona2 = { ...persona1};

persona2.nombrr = 'Pedro';

console.log ( persona1);
console.log ( persona2);*/

//Añadir propiedades a objetos a partir de otros objetos


let persona1 = {
    nombrr : 'Juan',
    edad: 14
}

let persona2 = { 
    nombrr: 'Pedro',
    edad: 24,
    ciudad: 'valle',
    conduce: true,
    vehiculo:true,
    casado : true
};

persona1 = {
    ...persona2,
    ...persona1
}

/*
persona1.ciudad = persona2.ciudad;
persona2.ciudad = 'santa marta';*/

console.log ( persona1);
console.log ( persona2);

/////////////////////////////////////////////////

//Diferencias entre el "Spread" y el "Rest"

function saludarRest ( saludo, ...nombres) {

    for ( i in nombres) {
        
        console.log ( `${saludo} ${nombres [i]}`);
    }

}

function saludarSpread ( saludo, ...nombres){
    console.log ( `${saludo} ${nombres}.`)

}

saludarRest ( "Hola", "Juan","Pedro","Maria");

let personass = ["Juan","Pedro","Maria"];

saludarSpread ("Que tal", personass);


let parte = ["brazo","piernas"];
let cuerpo = ["cabeza","cuello", ...parte, "pies", "dedos" ];

console.log (cuerpo);

//Aclarando el doble comportamiento de la funciones


/*
function Derson(nombre){

    if (typeof new.target !== "undefined"){
        this.nombre = nombre;
    }else{
        throw new Error('esta funcion debe ser usado con new')
    }

    this.nombre = nombre;
}
let derson = new Derson ("Juan");
let noEspersona = Derson ("Juan");



console.log (Derson);*/

function Derson (nombre){
    if ( this instanceof Derson ){
        this.Nombre = nombre;
    }else{
        throw new Error('Esta funcion debe ser susada con new');
    }

    this.nombre = nombre;
}

let derson = new Derson ("Juan");

let noEsDerson = Derson.call( derson, "Juan");

console.log ( Derson);


//


function saludar(nombre = "Juan", apellido){
 console.log(`${nombre} ${apellido}`);
}
saludar("Matamoros");


//Funciones flecha

//EJEMPLO 1

let miFuncion2 = function (valor){
    return valor;
}

let miFuncion1 = valor => valor;

let sumar2 = function (num1, num2){
    return num1 + num2;
}

let sumar1 = (num1, num2) => num1 + num2;

let saludar1 = () => "hola mundo";

let saludarPersona = nombrer =>{
    let salida =  `hola, ${nombrer}`;
    return salida;
}



console.log ( saludarPersona("Juan"));
console.log ( saludarPersona("Fernando"));


let obtenerLibro2 = id => ({ id: id, nombre: "El principito"});


//Funciones anonimas


let saludo1 = function(nombre){
    return "hora" + nombre;
}("Juan");

console.log (saludo1);

let saludo2 = (nombre => `Hola ${nombre}`)("Pedro");

console.log ( saludo2);

//no hay cambios en el objeto "This"

let manejador = {
    id: "12345",

    init: function (){


        document.addEventListener("click",
            event => this.clickEnPagina(event.type));
/*        document.addEventListener("click", (function (event){
        //    this.clickEnPagina(event.type);
            console.log (this);
        }).bind (this), false);*/
    },
    
    clickEnPagina: function (type){
        console.log ( "Manejando" + type + "para el id:" + this.id );
    }
};

manejador.init();

//Funciones de Flecha y Arreglos

let arregloNumero = [1,6,4,8,7,5,10];

let ordenado = arregloNumero.sort ((a,b)=>a-b);

console.log ( ordenado);

//identificando funciones de flecha y otros ejemplos

let restar = (a,b) => a -b;

console.log ( typeof restar);
console.log (restar instanceof Function);
function ejemplo (x,y){
    ((a,b) =>{
        console.log ( arguments[0])
    })();
}
ejemplo (10,20);
//let restar2 = new restar (1,3);

//extrenciones de objetos 

function crearPersona ( nombre, apellido, edad){
    return{
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

let melisa = crearPersona ("Melisa", "Garcia", 30);
console.log ( melisa);


//Metodos consisos 

let persona = {
    nombre: "Juan",
    
    getNombre(){
        console.log (this.nombre);
    }
}
persona.getNombre();

//nuevo metodo en objetos


//nuevo metodo: object.asign ()


function mezclar (objReceptor, objDonador){
    Object.keys (objDonador).forEach (function(keys){
        objReceptor[keys] = objDonador[keys];
    });
    return objReceptor;
}

let objReceptor = {};
let objDonador = {
    // nombre: "mi-archivo.txt"
    get nombre(){
        return "Juan Perez";
    } 
};

console.log ( mezclar (objReceptor, objDonador));


//Orden de enumeración de las propiedades de los objetos

let objetoN = {
    c: 1,
    0: 2,
    b: 3,
    1: 4,
    a: 5
};

objetoN.d = 1;
objetoN["2"] = 1;
objetoN["a"] = 1;

console.log ( Object.getOwnPropertyNames (objetoN).join(","));
console.log (Object.keys(objetoN));
console.log (JSON.stringify(objetoN));

for( i in Object.keys(objetoN)){
    console.log(Object.keys(objetoN)[i]);
}


//Cambiar el prototipo de un objeto

let gato ={
    sonido (){
        console.log("Miau");
    },
    chillido (){
        console.log ("MIAU!!!!!");
    }

};


let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora)===gato);

angora.sonido();
angora.chillido();


Object.setPrototypeOf( angora, gato);

console.log (Object.getPrototypeOf(angora)=== gato);

angora.sonido();
angora.chillido();

//Acceso al prototipo con la referencia "SUPER"

//Set 

//let items = new Set ([1,2,4,5,6,7,8,9]);




/*
items.add (10);
items.add (8);
items.add (3);
items.add ("4");
console.log(items.size);*/
//console.log(items.has (7));

//removiendo valores

let items = new Set ([1,2,3,4,5]);
console.log (items.size);
items.delete(3);
console.log (items.size);
console.log (items);
items.clear();
console.log (items.size);
console.log (items);


//forEach() - en los Sets




