export function SearchForm() {
  const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";

  $form.appendChild($input);

  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  d.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });

  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
