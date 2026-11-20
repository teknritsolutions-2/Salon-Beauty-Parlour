import { menu, categories, price } from "./services-data.js";
import { site } from "./site-config.js";
const form = document.querySelector("#request");
const fields = form.elements;
const review = document.querySelector("#review");
const edit = document.querySelector("#edit");
const finalize = document.querySelector("#finalize");
const download = document.querySelector("#download");
const option = (label, value) => new Option(label, value);
fields.category.replaceChildren(
  option("Choose a category", ""),
  ...categories.map((c) => option(c, c)),
);
function updateServices() {
  fields.service.replaceChildren(
    option("Choose a service", ""),
    ...menu
      .filter((s) => s.category === fields.category.value)
      .map((s) => option(s.name, s.id)),
  );
}
fields.category.onchange = updateServices;
for (const link of document.querySelectorAll("[data-category]")) {
  link.addEventListener("click", () => {
    fields.category.value = link.dataset.category;
    updateServices();
    if (form.hidden) edit.click();
    fields.service.focus({ preventScroll: true });
  });
}
const choice = menu.find(
  (s) => s.id === new URLSearchParams(location.search).get("service"),
);
if (choice) fields.category.value = choice.category;
updateServices();
if (choice) fields.service.value = choice.id;
function today() {
  const d = new Date();
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0"),
  ].join("-");
}
function validate() {
  fields.date.min = today();
  const digits = fields.phone.value.replace(/\D/g, "");
  fields.phone.setCustomValidity(
    /^\+?[\d ()-]+$/.test(fields.phone.value.trim()) &&
      digits.length >= 7 &&
      digits.length <= 15
      ? ""
      : "Enter a phone number with 7 to 15 digits.",
  );
  fields.name.setCustomValidity(
    fields.name.value.trim() ? "" : "Enter your name.",
  );
  const when = new Date(fields.date.value + "T" + fields.time.value);
  fields.time.setCustomValidity(
    when <= new Date() ? "Choose a future date and time." : "",
  );
}
fields.date.min = today();
form.addEventListener("input", validate);
let summary = "";
form.onsubmit = (e) => {
  e.preventDefault();
  validate();
  if (!form.reportValidity()) return;
  const s = menu.find((item) => item.id === fields.service.value);
  const rows = [
    ["Name", fields.name.value.trim()],
    ["Phone", fields.phone.value],
    ["Email", fields.email.value],
    ["Treatment", s.category + " · " + s.name],
    ["Indicative price", "From " + price(s.price)],
    ["Approximate duration", s.minutes + " min"],
    ["Preferred date", fields.date.value],
    ["Preferred time", fields.time.value],
    ["Notes", fields.notes.value.trim() || "None"],
  ];
  const list = review.querySelector("dl");
  list.replaceChildren();
  for (const [key, value] of rows) {
    const label = document.createElement("dt");
    const detail = document.createElement("dd");
    label.textContent = key;
    detail.textContent = value;
    list.append(label, detail);
  }
  summary = [
    "CIELVANE — appointment request",
    "Prepared locally. Salon confirmation required.",
    "",
    ...rows.map(([k, v]) => k + ": " + v),
  ].join("\n");
  form.hidden = true;
  review.hidden = false;
  finalize.hidden = false;
  download.hidden = true;
  document.querySelector("#review-title").textContent = "Review your request";
  document.querySelector("#review-status").textContent =
    "Check your details before preparing a copy.";
  review.focus();
};
edit.onclick = () => {
  form.hidden = false;
  review.hidden = true;
  fields.name.focus();
};
finalize.onclick = () => {
  validate();
  if (!form.checkValidity()) {
    edit.click();
    form.reportValidity();
    return;
  }
  document.querySelector("#review-title").textContent = "Your request is ready";
  document.querySelector("#review-status").textContent =
    "Download your details and share them directly with the salon. Your appointment still needs salon confirmation.";
  finalize.hidden = true;
  download.hidden = false;
  review.focus();
};
download.onclick = () => {
  const url = URL.createObjectURL(
    new Blob([summary], { type: "text/plain;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = "cielvane-appointment.txt";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
for (const key of ["address", "phone", "email", "hours"]) {
  if (!site[key]) continue;
  const p = document.createElement("p");
  p.textContent = site[key];
  document.querySelector("#contact-info").append(p);
}

document.querySelector("#location-address").textContent =
  site.sampleLocation.address;
document.querySelector("#location-phone").textContent =
  site.sampleLocation.appointments;
document.querySelector("#location-enquiries").textContent =
  site.sampleLocation.enquiries;
