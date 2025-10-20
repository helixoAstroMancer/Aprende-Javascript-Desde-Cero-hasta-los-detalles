
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let jugador = {
  nombre: "",
  rol: "",
  salud: 100,
  ataque: 10,
  defensa: 5
};


function preguntar(rl, texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function iniciarJuego() {
  console.log("Bienvenido al calabozo ");
  console.log("Tu objetivo será sobrevivir y encontrar el tesoro...");

  jugador.rol = await preguntar(rl, "Elige tu rol: guerrero, mago, arquero, ladrón: ");
  console.log(`Has elegido ser un ${jugador.rol}`);
  
  jugador.nombre = await preguntar(rl, "¿Cuál es tu nombre, novato?: ");
  console.log(`Buena suerte en tu aventura, ${jugador.nombre} el ${jugador.rol}!`);

  console.log(`\n Estadísticas de ${jugador.nombre}:`);
  console.log(`Rol: ${jugador.rol}`);
  console.log(`Salud: ${jugador.salud}`);
  console.log(`Ataque: ${jugador.ataque}`);
  console.log(`Defensa: ${jugador.defensa}`);

 
  await historia();

  rl.close();
}

async function historia() {
  console.log("\nEstás frente a dos puertas misteriosas...");
  const respuesta = await preguntar(rl, "¿Cuál eliges? (izquierda/derecha): ");
  console.log(`Elegiste la puerta ${respuesta}`);
  console.log("La puerta se abre lentamente... un olor putrefacto invade el pasillo.");

  const accion = await preguntar(rl, "¿Quieres entrar o retroceder? ");
  console.log(`Decidiste ${accion}`);
}


iniciarJuego();
