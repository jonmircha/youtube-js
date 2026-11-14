/* **********     Curso JavaScript: 82. DOM: Ejercicios Prácticos | Reloj Digital - #jonmircha     ********** */
const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h2>${clockHour}</h2>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

/* **********     Curso JavaScript: 83. DOM: Ejercicios Prácticos | Alarma Sonora - #jonmircha     ********** */
export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
