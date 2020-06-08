/**
 * Signatures 1.0.0
 * @author ADAPEI de la Meuse
 */
console.log("Signatures v1.0.0");

const inputForm = document.querySelector("#inputForm");

inputForm.addEventListener("submit", (e) => e.preventDefault());

const nameInput = inputForm.querySelector("#nameInput");
const orgTitleInput = inputForm.querySelector("#organisationTitleInput");
const organisationInput = inputForm.querySelector("#organisationInput");
const emailInput = inputForm.querySelector("#emailInput");
const phoneInput = inputForm.querySelector("#phoneInput");
const mobileInput = inputForm.querySelector("#mobileInput");

const nameOutput = document.querySelector("#nameOutput");
const orgTitleOutput = document.querySelector("#organisationTitleOutput");
const organisationOutput = document.querySelector("#organisationOutput");
const emailOutput = document.querySelector("#emailOutput");
const phoneOutput = document.querySelector("#phoneOutput");
const mobileOutput = document.querySelector("#mobileOutput");

nameInput.addEventListener("change", (e) => mirrorInput(e.target, nameOutput));
orgTitleInput.addEventListener("change", (e) =>
  mirrorInput(e.target, orgTitleOutput)
);
organisationInput.addEventListener("change", (e) =>
  mirrorInput(e.target, organisationOutput)
);
emailInput.addEventListener("change", (e) =>
  mirrorInput(e.target, emailOutput)
);
phoneInput.addEventListener("change", (e) =>
  mirrorInput(e.target, phoneOutput)
);
mobileInput.addEventListener("change", (e) =>
  mirrorInput(e.target, mobileOutput)
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
