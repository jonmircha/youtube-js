/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

export const aritmetica = {
  sumar,
  restar
};
