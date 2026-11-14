/* **********     Curso JavaScript: 92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent - #jonmircha     ********** */
const d = document,
  n = navigator,
  ua = n.userAgent;

/* Ejemplos
https://www.huffingtonpost.es/
https://m.huffingtonpost.es/
https://www.reforma.com/
https://iphone.reforma.com/aplicaciones/home/
 */

export default function userDeviceInfo(id) {
  const $id = document.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  /*console.log(ua);
  console.log("Plataformas Desktop");
  console.log(isDesktop.mac());
  console.log(isDesktop.linux());
  console.log(isDesktop.windows());
  console.log(isDesktop.any());
  console.log("Plataformas Mobile");
  console.log(isMobile.android());
  console.log(isMobile.ios());
  console.log(isMobile.windows());
  console.log(isMobile.any());
  console.log("Navegadores");
  console.log(isBrowser.chrome());
  console.log(isBrowser.firefox());
  console.log(isBrowser.safari());
  console.log(isBrowser.opera());
  console.log(isBrowser.edge());
  console.log(isBrowser.ie());
  console.log(isBrowser.any()); */

  $id.innerHTML = `
    <ul>
      <li>User Agent: <b>${ua}</b></li>
      <li>Plataforma: <b>${
        isMobile.any() ? isMobile.any() : isDesktop.any()
      }</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
  `;

  /* Contenido exclusivo */
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`;
  }

  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Firefox</mark></p>`;
  }

  if (isDesktop.any()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Plataformas de Escritorio</mark></p>`;
  }

  if (isMobile.any()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Plataformas Móviles</mark></p>`;
  }

  /* Redirecciones */
  if (isMobile.android()) {
    window.location.href = "https://jonmircha.com";
  }
}
