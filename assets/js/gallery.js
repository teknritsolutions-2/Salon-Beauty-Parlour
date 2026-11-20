import { setupFilters } from "./filters.js";
const photos = [
  [
    "gallery-skin-massage",
    "Skin",
    "A therapist massaging a reclining client's cheeks",
    1100,
    733,
  ],
  ["gallery-waves", "Hair", "Deep brown waves viewed from behind", 1067, 1600],
  [
    "gallery-bridal",
    "Makeup",
    "A makeup artist working beside a bride at a window",
    1067,
    1600,
  ],
  [
    "gallery-interior",
    "Studio",
    "Arched salon mirrors above a checkerboard floor",
    1280,
    854,
  ],
  [
    "gallery-skin-mask",
    "Skin",
    "Brushing a facial mask onto a client wearing a red headband",
    1280,
    853,
  ],
  [
    "gallery-colour",
    "Hair",
    "Applying colour to a hair section resting on foil",
    1067,
    1600,
  ],
  [
    "gallery-makeup",
    "Makeup",
    "Defining eye makeup with a small brush",
    1067,
    1600,
  ],
  [
    "gallery-hair",
    "Hair",
    "Smoothing long hair with a round brush and dryer",
    1280,
    854,
  ],
  [
    "gallery-wash",
    "Hair",
    "Lathering hair at a black shampoo basin",
    1067,
    1600,
  ],
  [
    "gallery-curls",
    "Hair",
    "Monochrome reference portrait showing long dark curls",
    1800,
    2700,
  ],
];
const grid = document.querySelector("#gallery");
const viewer = document.querySelector("#viewer");
const caption = document.querySelector("#caption");
let visible = [];
let current = 0;
function display(index) {
  current = (index + visible.length) % visible.length;
  const [file, , description] = visible[current];
  const image = viewer.querySelector("img");
  image.src = "../assets/images/" + file + ".webp";
  image.alt = description;
  caption.textContent =
    description + " · " + (current + 1) + " / " + visible.length;
}
setupFilters(["Hair", "Skin", "Makeup", "Studio"], (category) => {
  visible = photos.filter(
    ([, group]) => category === "All" || category === group,
  );
  grid.innerHTML = visible
    .map(
      ([file, group, description, width, height]) =>
        `<button class="gallery-card" aria-label="Enlarge: ${description}"><img width="${width}" height="${height}" loading="lazy" src="../assets/images/${file}.webp" alt="${description}"><span>${group}</span></button>`,
    )
    .join("");
  [...grid.children].forEach(
    (button, index) =>
      (button.onclick = () => {
        display(index);
        viewer.showModal();
      }),
  );
  document.querySelector("#prev").hidden = document.querySelector(
    "#next",
  ).hidden = visible.length === 1;
});
viewer.querySelector(".close").onclick = () => viewer.close();
document.querySelector("#prev").onclick = () => display(current - 1);
document.querySelector("#next").onclick = () => display(current + 1);
viewer.onkeydown = (e) => {
  const step = document.documentElement.dir === "rtl" ? -1 : 1;
  if (e.key === "ArrowRight") display(current + step);
  if (e.key === "ArrowLeft") display(current - step);
};
viewer.onclick = (e) => {
  if (e.target !== viewer) return;
  const rect = viewer.getBoundingClientRect();
  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  )
    viewer.close();
};
