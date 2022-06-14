import App from "./App";

let root;

function init() {
  root = document.getElementById("root");
  root.innerHTML = `
${App()}`;
}

init();

const button = document.querySelector("#start");
button.addEventListener("click", getStarted);

function getStarted() {
  import("./App").then(({ Starter }) => {
    const starter = Starter();
    document.querySelector("#starter-content").innerHTML = starter;
  });
}
