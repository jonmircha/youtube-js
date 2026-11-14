/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */
const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    //console.log(w.pageXOffset, pageYOffset);

    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        left: 0,
      });
    }
  });
}
