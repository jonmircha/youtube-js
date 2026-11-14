# _include-html.js_

Un _script_ diminuto para incluir archivos _HTML_ dentro de un documento _HTML_. Lo hice para la [clase 123 del Curso de _JavaScript_](https://www.youtube.com/watch?v=DGT6PEdVCXY) de [Jonathan MirCha](https://jonmircha.com/), donde lo usa el ejercicio [`01_incluir-html.html`](../ajax-ejercicios/01_incluir-html.html).

## Cómo se usa

Incluye `include-html.min.js` en el `<head>` y agrega el atributo `data-include` a cualquier elemento _HTML_ válido.

_include-html_ pide el archivo que indica ese atributo y **reemplaza** el elemento con su contenido.

Si `incluyeme.html` se viera así:

```html
<h1>¡Hola, mundo!</h1>
```

un documento como este:

```html
<head>
  <script src="include-html.min.js"></script>
</head>
<body>
  <div data-include="incluyeme.html"></div>
</body>
```

terminaría así:

```html
<body>
  <h1>¡Hola, mundo!</h1>
</body>
```

## Nota importante

En local necesitas un servidor web, como [Live Server](https://github.com/ritwickdey/vscode-live-server).

El _script_ usa el objeto _XMLHttpRequest_, que solo funciona con peticiones _HTTP_: si abres el archivo _HTML_ desde tu disco duro, con el protocolo _file_, la petición marca un error de _CORS_.

## Licencia

[MIT](LICENSE).

## Mis redes

- 🦊 Visita mi web https://jonmircha.com
- 🔔 Suscríbete al canal https://youtube.com/@jonmircha
- 📬 Suscríbete a mi newsletter https://jonmircha.com/newsletter
- 🌮 ¿Me invitas un taco? https://jonmircha.com/taco
