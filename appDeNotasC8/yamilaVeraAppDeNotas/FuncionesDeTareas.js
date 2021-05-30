const fs = require("fs");
const process = require("process");
const arrayJSON = fs.readFileSync("./tareas.json", "utf-8");

let arrayParseado = JSON.parse(arrayJSON);

let listar = process.argv[2];

let estados = process.argv[3];

function lista() {
  if (listar && !estados) {
    switch (listar.toLowerCase()) {
      case "listar":
        let cantidad = 0;
        for (let i = 0; cantidad < arrayParseado.length; i++) {
          cantidad++;
          console.log(cantidad) + console.log(arrayParseado[i], "\n");
        }
        break;
      default:
        console.log("No entiendo lo que quieres hacer");
        break;
    }
  } else if (estados !== undefined) {
    console.log("");
  } else {
    console.log("¡Atención! Tienes que pasar una acción");
  }
}

function estado() {
  if (estados) {
    let cantidad = 0;
    switch (estados.toLowerCase()) {
      case "progresos":
        for (let i = 0; cantidad < arrayParseado.length; i++) {
          cantidad++;

          if (arrayParseado[i]["estado"] === "en progreso") {
            console.log("\n" + cantidad + " : " + arrayParseado[i]["titulo"]);
          }
        }
        break;
      case "pendientes":
        for (let i = 0; cantidad < arrayParseado.length; i++) {
          cantidad++;

          if (arrayParseado[i]["estado"] === "pendiente") {
            console.log("\n" + cantidad + " : " + arrayParseado[i]["titulo"]);
          }
        }
        break;
      case "terminadas":
        for (let i = 0; cantidad < arrayParseado.length; i++) {
          cantidad++;

          if (arrayParseado[i]["estado"] === "terminada") {
            console.log("\n" + cantidad + " : " + arrayParseado[i]["titulo"]);
          }
        }
        break;
      default:
        console.log(
          'Sólo puede ingresar una de las tres palabras asignadas: "progresos", "pendientes" ó "terminadas" para poder ver las tareas en dichas condiciones.'
        );
        break;
    }
  } else {
    console.log(
      'A continuación seguido de LISTAR puede ingresar una de las tres palabras asignadas: "progresos", "pendientes" ó "terminadas" para poder ver sólo las tareas en dichas condiciones.'
    );
  }
}

module.exports = { lista, estado };
