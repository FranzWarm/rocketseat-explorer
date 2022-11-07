import { FavoritesView } from "./Favorites.js";

new FavoritesView("#app");

// add usr on enter from input
// const queryInput = document.getElementById("query");
// const addUsrBtn = document.getElementById("add");

document.getElementById("query").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
