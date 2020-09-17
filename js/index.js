/**
 * Signatures
 * @author ADAPEI de la Meuse
 * @version 1.2.0
 */
console.log("Signatures v 1.2.0");

/**
 * INIT.
 */

// Désactivation de l'envoi par défaut du formulaire
document.getElementById("inputForm").addEventListener("submit", (e) => e.preventDefault());

/**
 * Déclaration des différents items du formulaire
 * Pour ajouter un item il faut ajouter un champ de saisie au formulaire HTML
 * /!\ Ce champ de saisie doit avoir un ID de la forme : "#itemInput" 
 * Il faut aussi ajouter un champ cible dans lequel sera affiché la valeur de ce dernier
 * Celui doit aussi être de la forme "#itemOutput"
 */
const items = [
  "name",
  "orgTitle",
  "organisation",
  "email",
  "domain",
  "phone",
  "mobile"
];

// Utilisés pour la selection de l'icone.
const selectPole = document.getElementById("selectPole");
const poleOutput = document.getElementById("poleOutput");

/**
 * Events bindings
 */
items.forEach(item => {
  let input = item + "Input";
  let output = item + "Output";
  document.getElementById(input).addEventListener("change", (e) =>
    mirror(e.target, document.getElementById(output))
  );
});

selectPole.addEventListener("change", (e) => 
  mirror(e.target, poleOutput)
);

/* const organisationSelect = inputForm.querySelector("#organisationSelect");
organisationSelect.addEventListener("change", (e) => {
  mirrorInput(e.target, organisationOutput);
}); */

/**
 * 
 * @param {HTMLFormElement} input 
 * @param {HTMLElement} output 
 */
function mirror(input, output){
  if(!input.value) return;

  if(output.nodeName === "IMG"){
    mirrorImg(input, output);
  } else {
    mirrorInput(input, output);
    if(input.id === "domainInput"){
      domainChanged(input);
    }
  }
}

/**
 * Reflete la valeur d'un champ de formulaire dans un element
 *
 * @param {HTMLFormElement} input
 * @param {HTMLElement} output
 */
function mirrorInput(input, output) {
  output.innerText = input.value;
}

/**
 * Indique la source de l'image à afficher
 * 
 * @param {HTMLFormElement} input SELECT
 * @param {HTMLElement} output IMG
 */
function mirrorImg(input, output) {
  output.src = "img/logos/" + input.value + ".png";
  let color =  "#e6b000";
  color = (input.value === "Diocese") ? "#0b4a6d" : "#e6b000";
  document.getElementById("separator").style.borderColor = color;
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
