// Keep the native select as the form's value and validation source.
export function enhanceSelect(select) {
  const label = select.closest("label");
  const caption = document.createElement("span");
  const textNodes = [...label.childNodes].filter(
    (node) => node.nodeType === Node.TEXT_NODE,
  );
  caption.textContent = textNodes
    .map((node) => node.textContent)
    .join("")
    .trim();
  textNodes.forEach((node) => node.remove());
  const id = select.id || "select-" + select.name;
  select.id = id;
  caption.id = id + "-label";
  label.htmlFor = id;
  label.prepend(caption);

  const wrapper = document.createElement("div");
  wrapper.className = "select-control";
  select.before(wrapper);
  wrapper.append(select);
  select.classList.add("select-native");
  select.tabIndex = -1;
  select.setAttribute("aria-hidden", "true");

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "select-trigger";
  trigger.id = id + "-trigger";
  trigger.setAttribute("role", "combobox");
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", id + "-options");
  trigger.setAttribute("aria-labelledby", caption.id + " " + id + "-value");
  trigger.setAttribute("aria-required", String(select.required));
  const value = document.createElement("span");
  value.id = id + "-value";
  trigger.append(value);

  const list = document.createElement("ul");
  list.id = id + "-options";
  list.className = "select-options";
  list.setAttribute("role", "listbox");
  list.setAttribute("aria-labelledby", caption.id);
  list.hidden = true;
  wrapper.append(trigger, list);
  list.addEventListener("mousedown", (event) => event.preventDefault());

  const error = document.createElement("span");
  error.className = "select-error";
  error.id = id + "-error";
  error.setAttribute("aria-live", "polite");
  error.hidden = true;
  label.append(error);
  trigger.setAttribute("aria-describedby", error.id);

  let options = [];
  let active = 0;
  let search = "";
  let lastKeyTime = 0;

  function close() {
    list.hidden = true;
    wrapper.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    trigger.removeAttribute("aria-activedescendant");
  }

  function position() {
    if (list.hidden) return;
    const rect = trigger.getBoundingClientRect();
    const viewport = window.visualViewport;
    const top = Math.max(
      viewport?.offsetTop || 0,
      document.querySelector("header")?.getBoundingClientRect().bottom || 0,
    );
    const bottom =
      (viewport?.offsetTop || 0) + (viewport?.height || innerHeight);
    const below = bottom - rect.bottom - 12;
    const above = rect.top - top - 12;
    const desiredHeight = Math.min(280, list.scrollHeight);
    const opensAbove = below < desiredHeight && above > below;
    wrapper.dataset.placement = opensAbove ? "above" : "below";
    list.style.maxHeight =
      Math.max(44, Math.min(280, opensAbove ? above : below)) + "px";
  }

  function highlight(index) {
    active = index;
    [...list.children].forEach((item, i) =>
      item.classList.toggle("is-active", i === index),
    );
    if (!list.hidden && list.children[index]) {
      trigger.setAttribute("aria-activedescendant", list.children[index].id);
      list.children[index].scrollIntoView({ block: "nearest" });
    }
  }

  function refresh() {
    options = [...select.options].filter((option) => !option.disabled);
    value.textContent = select.selectedOptions[0]?.textContent || "";
    trigger.title = value.textContent;
    trigger.disabled = select.disabled;
    list.replaceChildren();
    options.forEach((option, index) => {
      const item = document.createElement("li");
      item.id = id + "-option-" + index;
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", String(option.selected));
      item.textContent = option.textContent;
      item.addEventListener("click", (event) => {
        event.preventDefault();
        choose(index);
      });
      list.append(item);
    });
    active = Math.max(
      0,
      options.findIndex((option) => option.selected),
    );
    if (select.validity.valid) {
      error.hidden = true;
      trigger.removeAttribute("aria-invalid");
    }
    if (!list.hidden) {
      position();
      highlight(active);
    }
  }

  function open() {
    refresh();
    trigger.focus({ preventScroll: true });
    list.hidden = false;
    wrapper.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    position();
    highlight(active);
  }

  function choose(index) {
    if (!options[index]) return;
    select.value = options[index].value;
    select.dispatchEvent(new Event("input", { bubbles: true }));
    select.dispatchEvent(new Event("change", { bubbles: true }));
    close();
    trigger.focus({ preventScroll: true });
  }

  trigger.addEventListener("click", () => (list.hidden ? open() : close()));
  trigger.addEventListener("keydown", (event) => {
    const count = options.length;
    if (
      ["ArrowDown", "ArrowUp", "Home", "End", "Enter", " ", "Escape"].includes(
        event.key,
      )
    ) {
      event.preventDefault();
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        if (list.hidden) open();
        else choose(active);
        return;
      }
      const wasClosed = list.hidden;
      if (wasClosed) open();
      if (!count) return;
      if (event.key === "Home") highlight(0);
      else if (event.key === "End") highlight(count - 1);
      else if (!wasClosed)
        highlight(
          (active + (event.key === "ArrowDown" ? 1 : -1) + count) % count,
        );
    } else if (event.key === "Tab") {
      close();
    } else if (
      event.key.length === 1 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      const now = Date.now();
      search = now - lastKeyTime > 700 ? event.key : search + event.key;
      lastKeyTime = now;
      if (list.hidden) open();
      const match = options.findIndex((option) =>
        option.textContent.toLowerCase().startsWith(search.toLowerCase()),
      );
      if (match >= 0) highlight(match);
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!wrapper.contains(event.target)) close();
  });
  trigger.addEventListener("blur", close);
  caption.addEventListener("click", (event) => {
    event.preventDefault();
    trigger.focus();
  });
  select.addEventListener("change", refresh);
  select.addEventListener("invalid", (event) => {
    event.preventDefault();
    close();
    error.textContent = select.validationMessage;
    error.hidden = false;
    trigger.setAttribute("aria-invalid", "true");
    if (select.form.querySelector(":invalid") === select) trigger.focus();
  });
  window.addEventListener("resize", position);
  window.addEventListener("scroll", position, { capture: true, passive: true });
  window.visualViewport?.addEventListener("resize", position);
  window.visualViewport?.addEventListener("scroll", position, {
    passive: true,
  });
  select.form?.addEventListener("reset", () =>
    queueMicrotask(() => {
      close();
      refresh();
    }),
  );
  refresh();
  return { refresh };
}
