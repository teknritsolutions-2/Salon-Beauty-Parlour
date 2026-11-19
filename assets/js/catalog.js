import { menu, categories, price } from "./services-data.js";
import { setupFilters } from "./filters.js";
const detailed = document.body.dataset.page === "services";
setupFilters(categories, (selected) => {
  const groups = categories.filter((c) => selected === "All" || c === selected);
  document.querySelector("#catalog").innerHTML = groups
    .map((category) => {
      const items = menu
        .filter((item) => item.category === category)
        .map((item) => {
          const serviceLink =
            "services.html?category=" + category + "#" + item.id;
          return `<div class="service-row" id="${item.id}"><div><h3>${detailed ? item.name : '<a href="' + serviceLink + '">' + item.name + "</a>"}</h3>${detailed ? "<p>" + item.detail + "</p>" : ""}<small>${item.minutes} min</small></div><div class="service-cost"><strong>From ${price(item.price)}</strong><a class="text-link" href="contact.html?service=${item.id}#booking" aria-label="Book ${item.name}">Book service</a></div></div>`;
        })
        .join("");
      return `<section class="menu-group ${detailed ? "illustrated" : ""}"><div class="group-title"><h2>${category}</h2>${detailed ? '<img loading="lazy" alt="' + category + ' inspiration" src="../assets/images/' + category.toLowerCase() + '.webp">' : ""}</div><div>${items}</div></section>`;
    })
    .join("");
});
if (location.hash)
  document.getElementById(location.hash.slice(1))?.scrollIntoView();
