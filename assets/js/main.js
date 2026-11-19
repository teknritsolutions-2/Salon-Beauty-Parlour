import { site } from "./site-config.js";

const page = document.body.dataset.page;
const root = page === "index" ? "./" : "../";
const links = [
  ["index", "Home 1"],
  ["home2", "Home 2"],
  ["services", "Services"],
  ["pricing", "Pricing Menu"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
];
const url = (key) =>
  root + (key === "index" ? "index.html" : "pages/" + key + ".html");
const navLink = ([key, label]) =>
  `<a href="${url(key)}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`;
const booking = `<a class="btn nav-book" href="${url("contact")}#booking">Book appointment</a>`;
const brand = `<a class="brand" href="${url("index")}" aria-label="CIELVANE home"><img src="${root}assets/icons/cielvane.svg" alt=""><span>${site.name}<small>${site.descriptor}</small></span></a>`;
const icon = (paths) =>
  `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const moon = icon(
  '<path d="M20.4 14A8.5 8.5 0 0 1 10 3.6 8.6 8.6 0 1 0 20.4 14Z"/>',
);
const menuIcon = icon('<path d="M3 6h18M3 12h18M3 18h18"/>');
document.querySelector("header").innerHTML =
  `<div class="wrap bar">${brand}<nav class="desktop" aria-label="Main"><details class="home-menu"><summary ${["index", "home2"].includes(page) ? 'class="active"' : ""}>Home</summary><div>${links.slice(0, 2).map(navLink).join("")}</div></details>${links.slice(2).map(navLink).join("")}</nav><div class="utilities"><div id="appearance"><button class="icon" id="theme" aria-label="Dark theme" title="Dark theme">${moon}</button><button class="icon" id="direction" aria-label="Right-to-left layout" title="Right-to-left layout">RTL</button></div><div id="booking-action">${booking}</div><button class="icon" id="open-nav" aria-label="Open navigation" aria-controls="drawer" aria-expanded="false">${menuIcon}</button></div></div>`;
document.querySelector("footer").innerHTML =
  `<div class="wrap footer-inner"><div class="footer-brand">${brand}<p>Thoughtful hair, skin and makeup.<br>A little room for yourself.</p></div><nav aria-label="Explore"><h2>Explore</h2>${[links[0], links[1], links[4]].map(navLink).join("")}</nav><nav aria-label="Treatments"><h2>Treatments</h2>${[links[2], links[3]].map(navLink).join("")}</nav><nav aria-label="Appointments"><h2>Appointments</h2>${navLink(links[5])}<a href="${url("contact")}#booking">Book appointment</a></nav></div><div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} CIELVANE</span><span>Hair · Skin · Makeup</span></div>`;
document.body.insertAdjacentHTML(
  "beforeend",
  `<dialog id="drawer" aria-label="Navigation"><div class="line">${brand}<button class="icon close" aria-label="Close navigation">×</button></div><nav aria-label="Compact navigation">${links.map(navLink).join("")}</nav><section class="drawer-appearance"><h2>Appearance</h2><div id="drawer-appearance"></div></section><div id="drawer-action"></div></dialog><button class="top icon" hidden aria-label="Back to top">↑</button>`,
);
const drawer = document.querySelector("#drawer");
const openNav = document.querySelector("#open-nav");
openNav.onclick = () => {
  drawer.showModal();
  openNav.setAttribute("aria-expanded", "true");
};
drawer.addEventListener("close", () =>
  openNav.setAttribute("aria-expanded", "false"),
);
drawer.addEventListener("click", (e) => {
  if (
    e.target.closest("a,.close") ||
    (e.target === drawer && e.clientX > drawer.getBoundingClientRect().right)
  )
    drawer.close();
});
const compactNavigation = matchMedia("(max-width: 1150px)");
const appearance = document.querySelector("#appearance");
const bookingAction = document.querySelector("#booking-action");
const utilities = document.querySelector(".utilities");
function arrangeNavigation() {
  if (compactNavigation.matches) {
    document.querySelector("#drawer-appearance").append(appearance);
    document.querySelector("#drawer-action").append(bookingAction);
  } else {
    utilities.insertBefore(appearance, openNav);
    utilities.insertBefore(bookingAction, openNav);
    if (drawer.open) drawer.close();
  }
}
compactNavigation.addEventListener("change", arrangeNavigation);
arrangeNavigation();
const home = document.querySelector(".home-menu");
document.addEventListener("click", (e) => {
  if (!home.contains(e.target)) home.open = false;
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && home.open) {
    home.open = false;
    home.querySelector("summary").focus();
  }
});
for (const [id, attr, on, off] of [
  ["theme", "data-theme", "dark", "light"],
  ["direction", "dir", "rtl", "ltr"],
]) {
  const control = document.getElementById(id);
  const key = "aerelle-" + id;
  const apply = (val) => {
    document.documentElement.setAttribute(attr, val);
    control.setAttribute("aria-pressed", String(val === on));
    if (id === "theme") {
      control.setAttribute(
        "aria-label",
        val === on ? "Switch to light theme" : "Switch to dark theme",
      );
      control.title =
        val === on ? "Switch to light theme" : "Switch to dark theme";
    }
    if (id === "direction") {
      const nextDirection = val === on ? "LTR" : "RTL";
      control.textContent = nextDirection;
      control.setAttribute(
        "aria-label",
        "Switch to " + nextDirection + " layout",
      );
      control.title = "Switch to " + nextDirection + " layout";
    }
  };
  let value = off;
  try {
    if (localStorage.getItem(key) === on) value = on;
  } catch {}
  apply(value);
  control.onclick = () => {
    value = value === on ? off : on;
    apply(value);
    try {
      localStorage.setItem(key, value);
    } catch {}
  };
}
const topButton = document.querySelector(".top");
const showTop = () => {
  topButton.hidden = scrollY < 450;
};
window.addEventListener("scroll", showTop, { passive: true });
showTop();
topButton.onclick = () =>
  window.scrollTo({
    top: 0,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
if (["services", "pricing"].includes(page)) await import("./catalog.js");
if (page === "gallery") await import("./gallery.js");
if (page === "contact") await import("./booking.js");
if (page === "index") {
  const { menu, price } = await import("./services-data.js");
  const highlights = ["signature-cut", "facial", "party"].map((id) =>
    menu.find((item) => item.id === id),
  );
  document.querySelector("#highlights").innerHTML = highlights
    .map(
      (item) =>
        `<a class="highlight" href="${url("contact")}?service=${item.id}#booking"><span>${item.name}<small>${item.minutes} minutes</small></span><strong>From ${price(item.price)}</strong></a>`,
    )
    .join("");
}

if (page === "home2") {
  const { menu, price } = await import("./services-data.js");
  const curated = ["signature-cut", "facial", "party"].map((id) =>
    menu.find((item) => item.id === id),
  );
  document.querySelector("#popular-treatments").innerHTML = curated
    .map(
      (item) =>
        `<article class="popular-row"><div><p class="treatment-meta">${item.category} · ${item.minutes} minutes</p><h3>${item.name}</h3></div><strong>From ${price(item.price)}</strong><a class="text-link" href="contact.html?service=${item.id}#booking" aria-label="Book ${item.name}">Book treatment</a></article>`,
    )
    .join("");
}
