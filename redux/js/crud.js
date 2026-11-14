import store from "./store-crud.js";

const API_URL = "http://localhost:3000/todos";

const d = document,
  $todoList = d.getElementById("todo-list"),
  $addTodoBtn = d.getElementById("add-todo"),
  $todoTitle = d.getElementById("todo-title"),
  $todoId = d.getElementById("todo-id"),
  $todoCompleted = d.getElementById("todo-completed");

// Función para hacer fetch de las tareas desde la API
function fetchTodos() {
  store.dispatch({ type: "FETCH_TODOS_REQUEST" });
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      store.dispatch({ type: "FETCH_TODOS_SUCCESS", payload: data });
    })
    .catch((error) => {
      store.dispatch({ type: "FETCH_TODOS_FAILURE", error: error.message });
    });
}

// Función para renderizar las tareas en el DOM
function renderTodos() {
  const state = store.getState();
  $todoList.innerHTML = "";

  if (state.todos.length === 0) {
    const $noTaskMessage = d.createElement("li");
    $noTaskMessage.className = "no-tasks";
    $noTaskMessage.textContent = "No hay tareas disponibles 🥳";
    $todoList.appendChild($noTaskMessage);
    return;
  }

  const pendingTodos = state.todos.filter((todo) => !todo.completed);
  const completedTodos = state.todos.filter((todo) => todo.completed);

  [...pendingTodos, ...completedTodos].forEach((todo) => {
    const $li = d.createElement("li");
    $li.className = todo.completed ? "completed" : "";
    $li.dataset.id = todo.id;
    $li.dataset.title = todo.title;
    $li.dataset.completed = todo.completed;
    $todoList.appendChild($li);

    const $span = d.createElement("span");
    $span.textContent = `${todo.title}`;
    $li.appendChild($span);

    const $toggleBtn = d.createElement("button");
    $toggleBtn.className = "btn-toggle";
    $toggleBtn.textContent = todo.completed ? "Desmarcar" : "Marcar";
    $li.appendChild($toggleBtn);

    const $editBtn = d.createElement("button");
    $editBtn.className = "btn-edit";
    $editBtn.textContent = "Editar";
    $li.appendChild($editBtn);

    const $deleteBtn = d.createElement("button");
    $deleteBtn.className = "btn-delete";
    $deleteBtn.textContent = "Eliminar";
    $li.appendChild($deleteBtn);
  });
}

// Función para añadir o actualizar una tarea
function addOrUpdateTodo() {
  let title = $todoTitle.value.trim();
  let id = $todoId.value;
  let completed = $todoCompleted.value;

  if (!title) {
    alert("Te falto agregar el título de la tarea");
    return;
  }

  if (id) {
    // Actualizar tarea
    const updatedTodo = {
      id,
      title,
      completed: completed === "true" ? true : false,
    };

    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch({ type: "UPDATED_TODO", payload: data });
      });
  } else {
    // Añadir tarea
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch({ type: "ADD_TODO", payload: data });
      });
  }

  clearForm();
}

// Función para editar una tarea (llenar el formulario)
function editTodo(todo) {
  $todoId.value = todo.dataset.id;
  $todoTitle.value = todo.dataset.title;
  $todoCompleted.value = todo.dataset.completed;
}

// Función para eliminar una tarea
function deleteTodo(id) {
  let confirmDelete = confirm(
    `¿Estás seguro de eliminar la tarea con el id "${id}"?`
  );

  if (confirmDelete) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      store.dispatch({ type: "DELETE_TODO", payload: id });
    });
  }
}

// Función para marcar o desmarcar una tarea como completada
function toggleTodoCompleted(todo) {
  const updatedTodo = {
    ...todo,
    completed: !todo.completed,
  };

  fetch(`${API_URL}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  })
    .then((response) => response.json())
    .then((data) => {
      store.dispatch({ type: "TOGGLE_TODO", payload: data });
    });
}

// Función para limpiar el formulario
function clearForm() {
  $todoTitle.value = "";
  $todoId.value = "";
  $todoCompleted.value = "";
}

// Suscribimos la función render al estado de la store
store.subscribe(renderTodos);

// Al cargar la página, hacemos fetch de las tareas
d.addEventListener("DOMContentLoaded", fetchTodos);

$addTodoBtn.addEventListener("click", addOrUpdateTodo);

$todoList.addEventListener("click", (e) => {
  const $parent = e.target.parentElement;

  if (e.target.matches(".btn-edit") && !$parent.matches(".completed")) {
    editTodo($parent);
  }

  if (e.target.matches(".btn-toggle")) {
    const todo = {
      id: $parent.dataset.id,
      title: $parent.dataset.title,
      completed: $parent.dataset.completed === "true" ? true : false,
    };

    toggleTodoCompleted(todo);
  }

  if (e.target.matches(".btn-delete")) {
    deleteTodo($parent.dataset.id);
  }
});
