import store from "./store.js";

const d = document,
  $counterValue = d.getElementById("counter-value"),
  $incrementBtn = d.getElementById("increment-btn"),
  $decrementBtn = d.getElementById("decrement-btn"),
  $resetBtn = d.getElementById("reset-btn");

// Función para actualizar el valor mostrado del contador en el DOM
function render() {
  const state = store.getState();
  $counterValue.textContent = state.counter;
}
// Suscribimos la función render para que se ejecute cada vez que el estado cambie
store.subscribe(render);

// Renderizamos el valor inicial del contador
//render();
d.addEventListener("DOMContentLoaded", render);

// Despachamos las acciones cuando los botones son clickeados
$incrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT", payload: 1 });
});

$decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT", payload: 1 });
});

$resetBtn.addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});
