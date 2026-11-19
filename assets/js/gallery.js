import { setupFilters } from "./filters.js";
const photos = [
  ["look-skin", "Skin", "Gentle facial massage", 1100, 733],
  ["waves", "Hair", "Long copper-brown waves", 1067, 1600],
  ["bridal", "Makeup", "Bridal eye makeup in progress", 1067, 1600],
  [
    "interior",
    "Studio",
    "Marble flooring and light-filled styling stations",
    1280,
    854,
  ],
  ["skin", "Skin", "Applying a cream facial mask", 1280, 853],
  ["colour", "Hair", "Brushing colour onto sectioned hair", 1067, 1600],
  ["makeup", "Makeup", "Blending eyeshadow", 1067, 1600],
  ["hair", "Hair", "Shaping a silver bob with scissors", 1280, 854],
  ["wash", "Hair", "A hair wash at the basin", 1067, 1600],
  ["hero", "Hair", "Arranging soft curls at the salon", 1800, 2700],
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
