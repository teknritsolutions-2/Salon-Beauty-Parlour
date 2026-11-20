import { menu, categories, price } from "./services-data.js";
import { setupFilters } from "./filters.js";

const serviceImageDescriptions = {
  Hair: "A stylist curling a dark bob beside a salon mirror",
  Skin: "A practitioner cleansing a reclining client's cheek with a soft cloth",
  Makeup: "A makeup artist blending silver eyeshadow",
};

function renderServices(groups) {
  return groups
    .map((category) => {
      const items = menu.filter((item) => item.category === category);
      return `<section class="menu-group illustrated"><div class="group-title"><h2>${category}</h2><img loading="lazy" alt="${serviceImageDescriptions[category]}" src="../assets/images/service-${category.toLowerCase()}.webp"></div><div>${items
        .map(
          (item) =>
            `<div class="service-row" id="${item.id}"><div><h3>${item.name}</h3><p>${item.detail}</p><small>${item.minutes} min</small></div><div class="service-cost"><strong>From ${price(item.price)}</strong><a class="text-link" href="contact.html?service=${item.id}#booking" aria-label="Book ${item.name}">Book service</a></div></div>`,
        )
        .join("")}</div></section>`;
    })
    .join("");
}

function renderPricing(groups) {
  return groups
    .map((category) => {
      const items = menu.filter((item) => item.category === category);
      return `<section class="price-group"><div class="price-heading"><h2>${category}</h2><span>Starting prices · INR</span></div>${items
        .map(
          (item) =>
            `<article class="price-row" id="${item.id}"><div class="price-service"><h3><a href="services.html?category=${category}#${item.id}">${item.name}</a></h3><p>Approx. ${item.minutes} minutes</p></div><div class="price-amount"><span>From</span><strong>${price(item.price)}</strong></div><a class="text-link price-book" href="contact.html?service=${item.id}#booking" aria-label="Book ${item.name}">Book service</a></article>`,
        )
        .join("")}</section>`;
    })
    .join("");
}

const render =
  document.body.dataset.page === "pricing" ? renderPricing : renderServices;
setupFilters(categories, (selected) => {
  const groups = categories.filter(
    (category) => selected === "All" || category === selected,
  );
  document.querySelector("#catalog").innerHTML = render(groups);
});
if (location.hash)
  document.getElementById(location.hash.slice(1))?.scrollIntoView();
