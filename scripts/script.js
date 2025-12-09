/* menu openen de MENU button */
// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton;
openButton = document.querySelector("header section > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  var deNav;
  deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}


/* menu sluiten met de sluit button */
// stap 1 - zoek sluiten button op
var sluitButton;
sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}



// Sluiten van Spotify atricle
// Bron: de student-assistenten
let deleteSpotify = document.querySelector(
  "main > article:nth-of-type(5) button"
);

deleteSpotify.onclick = sluitSpotify;

function sluitSpotify() {
  let spotifyArticle = document.querySelector("main > article:nth-of-type(5)");
  spotifyArticle.classList.add("hidden");
}