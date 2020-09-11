<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD API REST AXIOS</title>
</head>

<body>
  <h1>CRUD API REST AXIOS</h1>
  <section class="crud">
    <article>
      <h2 class="crud-title">Agregar Santo</h2>
      <form class="crud-form">
        <input type="text" name="nombre" placeholder="nombre" required>
        <br>
        <input type="text" name="constelacion" placeholder="constelación" required>
        <br>
        <input type="submit" value="Enviar">
        <input type="hidden" name="id">
      </form>
    </article>
    <article>
      <h2>Ver Santos</h2>
      <table class="crud-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </article>
  </section>
  <template id="crud-template">
    <tr>
      <td class="name"></td>
      <td class="constellation"></td>
      <td>
        <button class="edit">Editar</button>
        <button class="delete">Eliminar</button>
      </td>
    </tr>
  </template>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
    /* **********     Curso JavaScript: 119. APIs REST: CRUD con Axios (1/2) - #jonmircha     ********** */
    /* **********     Curso JavaScript: 120. APIs REST: CRUD con Axios (2/2) - #jonmircha     ********** */
    const d = document,
      $table = d.querySelector(".crud-table"),
      $form = d.querySelector(".crud-form"),
      $title = d.querySelector(".crud-title"),
      $template = d.getElementById("crud-template").content,
      $fragment = d.createDocumentFragment();

    const getAll = async () => {
      try {
        let res = await axios.get("http://localhost:5555/santos"),
          json = await res.data;

        console.log(json);

        json.forEach(el => {
          $template.querySelector(".name").textContent = el.nombre;
          $template.querySelector(".constellation").textContent = el.constelacion;
          $template.querySelector(".edit").dataset.id = el.id;
          $template.querySelector(".edit").dataset.name = el.nombre;
          $template.querySelector(".edit").dataset.constellation = el.constelacion;
          $template.querySelector(".delete").dataset.id = el.id;

          let $clone = d.importNode($template, true);
          $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
      }
    }

    d.addEventListener("DOMContentLoaded", getAll);

    d.addEventListener("submit", async e => {
      if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
          //Create - POST
          try {
            let options = {
              method: "POST",
              headers: {
                "Content-type": "application/json; charset=utf-8"
              },
              data: JSON.stringify({
                nombre: e.target.nombre.value,
                constelacion: e.target.constelacion.value
              })
            },
              res = await axios("http://localhost:5555/santos", options),
              json = await res.data;

            location.reload();
          } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
        } else {
          //Update - PUT
          try {
            let options = {
              method: "PUT",
              headers: {
                "Content-type": "application/json; charset=utf-8"
              },
              data: JSON.stringify({
                nombre: e.target.nombre.value,
                constelacion: e.target.constelacion.value
              })
            },
              res = await axios(`http://localhost:5555/santos/${e.target.id.value}`, options),
              json = await res.data;

            location.reload();
          } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
        }
      }
    });

    d.addEventListener("click", async e => {
      if (e.target.matches(".edit")) {
        $title.textContent = "Editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
      }

      if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

        if (isDelete) {
          //Delete - DELETE
          try {
            let options = {
              method: "DELETE",
              headers: {
                "Content-type": "application/json; charset=utf-8"
              }
            },
              res = await axios(`http://localhost:5555/santos/${e.target.dataset.id}`, options),
              json = await res.data;

            location.reload();
          } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            alert(`Error ${err.status}: ${message}`);
          }
        }
      }
    });
  </script>
</body>

</html>
