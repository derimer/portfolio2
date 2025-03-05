document.addEventListener("DOMContentLoaded", function () {
  const initialURL = window.location.href; // Sauvegarde de l'URL initiale
  let redirected = false; // Variable pour suivre l'état de la redirection

  // Fonction pour ajouter un écouteur d'événement de clic
  function addClickListener(id, url) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function () {
        window.location.href = url;
      });
    }
  }

  // Ajout des écouteurs pour les réalisations
  addClickListener("calculette", "./calculette/index.html");
  addClickListener("todolist", "https://derimer.github.io/ma_liste/");
  addClickListener("portfolio", "./index.html"); // Updated path
  addClickListener("tictactoe", "./tic-tac-toe/index.html");
  addClickListener("tickets", "./tickets/index.html");
  addClickListener("html", "https://developer.mozilla.org/fr/docs/Web/HTML");
  addClickListener("figma", "https://www.figma.com/");
  addClickListener("trello", "https://trello.com/");
  addClickListener("css", "https://developer.mozilla.org/fr/docs/Web/CSS");
  addClickListener("js", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
  addClickListener("react", "https://fr.react.dev/");
  addClickListener("node", "https://nodejs.org/fr/");
  addClickListener("mysql", "https://www.mysql.com/");
  addClickListener("github", "https://github.com/");
  addClickListener("creation3", "https://stephanovalentinophoto.com/");
});