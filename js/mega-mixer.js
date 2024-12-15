/* utilisez la méthode _.shuffle de loadhash pour mélanger le tableau !!
https://lodash.com/docs/#shuffle
*/

const ListeApprenants = [
  "BOUHADOUF Isaac",
  "SEMOL Frédéric",
  "CONRAUX Kylian",
  "KHELIL Yamine",
  "LANAUD Corentin",
  "BELABEL Samir",
  "DE-OLIVEIRA Gabrielle",
  "BOUCHERBA Médy",
  "CHERCHARI Samy",
  "TURAN Theoman",
];

const boiteCarte = document.getElementById("sizer");
const placer = document.getElementById("BoutonPlacer");
const cards = document.getElementById("card");
const reinitialiser = document.getElementById("BoutonInitialiser");

ListeApprenants.forEach((cartes) => {
  let carte = document.createElement("div");
  carte.innerHTML = `
    <div class="flipcard h" id="card">
            <div class="front interrogation"> ?
            </div>
            <div class="back smiley" style='background-image: url("images/smiley/smiley-8.png");'>
                <div class="prenom"></div>
                <div class="nom"></div>
            </div>
    </div>
        `;
  boiteCarte.appendChild(carte);
});

placer.addEventListener("click", () => {
  const melange = _.shuffle(ListeApprenants);

  for (let i = 0; i < melange.length; i++) {
    let splits = melange[i].split(" ");
    setTimeout(() => {
      document.getElementsByClassName("flipcard")[i].classList.add("flip");
      document.getElementsByClassName("prenom")[i].innerText = splits[1];
      document.getElementsByClassName("nom")[i].innerText = splits[0];
    }, i * 300);
    const image = document.querySelectorAll(".smiley");
    image.forEach((smiley) => {
      imageAleatoire = Math.ceil(Math.random() * 15);
      smiley.style.backgroundImage = `url(../images/smiley/smiley-${imageAleatoire}.png)`;
    });
    reinitialiser.disabled = false;
    placer.disabled = true;
  }
});

reinitialiser.addEventListener("click", () => {
  const flipcards = document.getElementsByClassName("flipcard");
  for (let i = 0; i < flipcards.length; i++) {
    setTimeout(() => {
      flipcards[i].classList.remove("flip");
      document.getElementsByClassName("prenom")[i].innerText = "";
      document.getElementsByClassName("nom")[i].innerText = "";
      document.getElementsByClassName("smiley")[i].style.backgroundImage = "";
    },(flipcards.length - 1 - i) * 300);
    reinitialiser.disabled = true;
    placer.disabled = false;
  }
});

let selector = document.getElementById("numberSelect");
selector.addEventListener("change", () => {
  switch (selector.value) {
    case "440":
      deux();
      break;
    case "660":
      trois();
      break;
    case "880":
      quatre();
      break;
    case "1100":
      cinq();
      break;
    case "1320":
      six();
      break;
    default:
      fdefault();
  }
});
let cardContainer = document.getElementById("sizer");
console.log(cardContainer);
function deux() {
  cardContainer.style.width = "440px";
}
function trois() {
  cardContainer.style.width = "660px";
}
function quatre() {
  cardContainer.style.width = "880px";
}
function cinq() {
  cardContainer.style.width = "1100px";
}
function six() {
  cardContainer.style.width = "1320px";
}
function fdefault() {
  console.log("Défaut");
}
