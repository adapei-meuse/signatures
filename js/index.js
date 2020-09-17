/**
 * Signatures 1.2.0
 * @author ADAPEI de la Meuse
 */
console.log("Signatures v1.2.0");

const inputForm = document.querySelector("#inputForm");

inputForm.addEventListener("submit", (e) => e.preventDefault());

const selectPole = inputForm.querySelector("#selectPole");
const poleOutput = document.querySelector("#poleOutput");

const items = [
  "name",
  "orgTitle",
  "organisation",
  "email",
  "domain",
  "phone",
  "mobile"
];

items.forEach(item => {
  let input = "#" + item + "Input";
  let output = "#" + item + "Output";
  inputForm.querySelector(input).addEventListener("change", (e) =>
    mirrorInput(e.target, document.querySelector(output))
  );
});

selectPole.addEventListener("change", (e) => 
  mirrorImg(e.target, poleOutput)
);

/* const organisationSelect = inputForm.querySelector("#organisationSelect");
organisationSelect.addEventListener("change", (e) => {
  mirrorInput(e.target, organisationOutput);
}); */

/**
 * Reflete la valeur d'un champ de formulaire dans un element
 *
 * @param {HTMLFormElement} input
 * @param {HTMLElement} output
 */
function mirrorInput(input, output) {
  if (!input.value) return;
  output.innerText = input.value;
}

/**
 * 
 * @param {HTMLFormElement} input 
 */
function domainChanged(input){
  if(input.value === "@catholique55.fr"){
    selectPole.value = "Diocese";
    selectPole.dispatchEvent(new Event('change'));
  }
}

/**
 * Indique la source de l'image à afficher
 * 
 * @param {HTMLFormElement} input SELECT
 * @param {HTMLElement} output IMG
 */
function mirrorImg(input, output) {
  if (!input.value) return;
  output.src = "img/logos/" + input.value + ".png";
}

/**
 * Genere un numero de telephone aleatoire
 *
 * @param {string} [prefix="03"]
 * @returns {string}
 */
function generatePhoneNumber(prefix = "03") {
  return prefix + Math.random().toString().substr(2, 8);
}

/**
 * Genere une adresse mail
 *
 * @param {string} [name="Andrew"]
 * @param {string} [surname="RYAN"]
 * @returns {string}
 */
function generateEmail(name = "Andrew", surname = "RYAN") {
  return (
    name.substr(0, 1).toLowerCase() +
    "." +
    surname.toLowerCase() +
    "@adapei-meuse.fr"
  );
}
