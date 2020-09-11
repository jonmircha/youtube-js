/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
export const PI = Math.PI;

export let usuario = "Jon";

const password = "qwerty";
//export default password;

const hello = () => console.log("Hola");

export default function saludar() {
  console.log("Hola Módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
