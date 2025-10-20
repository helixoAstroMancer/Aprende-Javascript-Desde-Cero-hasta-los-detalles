// Declaración de variable numérica primitiva
let a = 3;

// toPrecision() formatea el número con la precisión especificada (3 dígitos totales)
console.log (a.toPrecision(3)); // Muestra "3.00" - 3 dígitos incluyendo decimales
//hay varias funciones que pueden modificar el resultado 
//solo hay que tener eso en cuenta y investigar cual es la mejor.

// Operación aritmética básica
console.log( a + 10); // Muestra 13

// Reasignación del valor de 'a' a negativo
a = -10;

// Creación de objeto Number - CUIDADO: "20e" no es un número válido, resultará en NaN
let b = new Number ("20e"); // Esto creará un objeto Number con valor NaN

//objeto booleano 

// Creación de objeto Boolean - cualquier número diferente de 0 es truthy
let x = new Boolean(1); // Esto crea un objeto Boolean con valor true
//true; es preferble false - COMENTARIO: Es mejor usar booleanos primitivos

// El objeto Boolean es truthy incluso si contiene false, por eso entra al if
if (x) {
    console.log("me imprimi"); // Siempre se ejecuta porque x es un objeto (truthy)
}

//objetos strings

// String primitivo
let r = "Florez";

// Objeto String (no recomendado, mejor usar primitivos)
let y = new String("Aris Florez");

// Muestra el objeto String, no el string primitivo
console.log( y ); // Muestra el objeto String

// Métodos para convertir a mayúsculas y minúsculas
console.log(y.toLocaleUpperCase() ); // Convierte a "ARIS FLOREZ"
console.log(y.toLocaleLowerCase() ); // Convierte a "aris florez"

// Busca la primera ocurrencia de "Florez" en el string
let i = y.indexOf("Florez"); 
console.log("la palabra está en la posición: ", i); // Muestra 5

// Busca la última ocurrencia de la letra "r"
i = y.lastIndexOf("r");
console.log("la última 'r' está en: ", i); // Muestra 9 (posición de la 'r' en "Florez")

// Extrae una subcadena desde posición 4 hasta 6 (no inclusive)
let nombre = y.substring(4,6/*0, a.indexOf(" ")*/ ); // Cortes de strings
console.log(nombre); // Muestra " F" (espacio + F)

// Divide el string en un array de caracteres individuales
let split = y.split("");
console.log(split); // Array de caracteres individuales: ['A','r','i','s',' ','F','l','o','r','e','z']
console.log(split.length); // 11 caracteres

// objeto de fecha 

// Fecha actual
let hoy = new Date();
// Fecha epoch (1 de enero de 1970)
let fechaMil = new Date(0);
// Fecha específica: 9 de febrero de 2025, 3:30:03.005 (mes 1 = febrero)
let fechaFi = new Date ( 2025, 1, 9, 3, 30, 3, 5);

console.log ( hoy ); // Fecha y hora actual
console.log ( fechaMil ); // 1970-01-01T00:00:00.000Z
console.log (fechaFi); // 2025-02-09T08:30:03.005Z (puede variar por timezone)

// Obtener el año de la fecha actual
console.log (hoy.getFullYear() );
console.log( ); // Línea vacía

//temporizador de procesos - CÓDIGO COMENTADO

/*let inicio = new Date ();

for (let o = 0; o < 15000; o++){
    console.log("algo..."); // Esto imprimiría 15000 veces
}

let fin = new Date();

let duracion = fin.getTime() - inicio.getTime();
console.log (duracion , "milisegundos");
console.log( (duracion/1000) , "segundos");*/

//operaciones con fecha 

let fecha = new Date(2025, 4, 23); // 23 de mayo de 2025 (mes 4 = mayo)
console.log (fecha);

// Prototipo para sumar días a una fecha
Date.prototype.sumarDias = function (dias) {
    this.setDate( this.getDate() + dias); // Modifica la fecha original
    return this; // Retorna la fecha modificada
}

// Prototipo para sumar años a una fecha
Date.prototype.sumarAnios = function (anios) {
    this.setFullYear( this.getFullYear() + anios); // Modifica el año
    return this; // Retorna la fecha modificada
}

console.log (fecha); // Fecha original modificada por las operaciones anteriores
console.log (fecha.sumarDias(5)); // Suma 5 días a la fecha
console.log (fecha.sumarAnios(7)); // Suma 7 años a la fecha

//objeto math

// Constantes matemáticas
let PI = Math.PI; // Valor de π (pi)
let E = Math.E;   // Número de Euler (e)

console.log (PI); // 3.141592653589793
console.log(E);   // 2.718281828459045

let num1 = 13.433453;
console.log(num1); // 13.433453

// Redondeo a 2 decimales (multiplica por 100, redondea, divide entre 100)
console.log(Math.round( num1*100) / 100); // 13.43

// Redondeo hacia abajo (piso)
console.log ( Math.floor(num1) ); // 13

/* Generador de números aleatorios - CÓDIGO COMENTADO
let rnd = Math.random(); //generador aleatorio (entre 0 y 1)
console.log( rnd );*/

function randomEntre(min, max){
    return Math.floor( Math.random() * (max-min * 1)* min );
}

console.log( randomEntre(500, 1000));

console.log( Math.sqrt(10));

console.log ( Math.pow(5, 3));
