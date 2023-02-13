function cardsClick(id) {
  document.getElementById("" + id + "").addEventListener("click", function () {
    window.location = id + ".html";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  cardsClick("reiki");
  cardsClick("tarot");
  cardsClick("auriculoterapia");
  cardsClick("masajes");
  cardsClick("maderoterapia");
  cardsClick("drenaje");
  cardsClick("terapeuta");
  cardsClick("gemoterapia");
});
