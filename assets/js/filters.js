export function setupFilters(categories, render) {
  const params = new URLSearchParams(location.search);
  let selected = categories.includes(params.get("category"))
    ? params.get("category")
    : "All";
  const filters = document.querySelector("#filters");
  for (const name of ["All", ...categories]) {
    const button = document.createElement("button");
    button.textContent = name;
    button.type = "button";
    filters.append(button);
    button.onclick = () => {
      selected = name;
      const url = new URL(location.href);
      if (name === "All") url.searchParams.delete("category");
      else url.searchParams.set("category", name);
      history.replaceState(null, "", url);
      update();
    };
  }
  function update() {
    for (const btn of filters.children)
      btn.setAttribute("aria-pressed", String(btn.textContent === selected));
    render(selected);
  }
  update();
}
