import { Router } from "./router.js";

const homeAnchor = document.querySelector("#home");
const universeAnchor = document.querySelector("#universo");
const explorationAnchor = document.querySelector("#exploracao");
const anchors = [homeAnchor, universeAnchor, explorationAnchor];

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/index.html", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

function updateAnchorStyle() {
  for (const anchor of anchors) {
    anchor.style.fontWeight = "100";
    anchor.style.color = "#8d8d99";
  }

  switch (window.location.pathname) {
    case "/":
      homeAnchor.style.fontWeight = "bold";
      homeAnchor.style.color = "#FFF";
      break;
    case "/universo":
      universeAnchor.style.fontWeight = "bold";
      universeAnchor.style.color = "#FFF";
      break;
    case "/exploracao":
      explorationAnchor.style.fontWeight = "bold";
      explorationAnchor.style.color = "#FFF";
      break;
    default:
      break;
  }
}

window.addEventListener("click", (event) => {
  router.route();
  
  if (event.target.tagName == "A" || event.target.tagName == "BUTTON") {
    updateAnchorStyle();
  }

});

updateAnchorStyle();
