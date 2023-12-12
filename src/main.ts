import './facade.scss';

const ui = document.querySelector(".ui");
//const serverBar = document.querySelector(".server-bar");
const serverButton = document.querySelector(".server-button");

serverButton?.addEventListener("click", () => {
  if (ui?.classList.contains("server-open")) {
    ui?.classList.remove("server-open");
  } else {
    ui?.classList.add("server-open");
  }
});

