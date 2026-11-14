/* **********     Curso JavaScript: 81. DOM: Ejercicios Prácticos | Menú de Hamburguesa - #jonmircha     ********** */
export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panelBtn).classList.toggle("is-active");
      d.querySelector(panel).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panelBtn).classList.remove("is-active");
      d.querySelector(panel).classList.remove("is-active");
    }
  });
}
