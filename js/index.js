/**
 * Signatures
 * @author ADAPEI de la Meuse
 * @version 2.0.0
 */
const RELEASE = "2.0.0"
console.log("Signatures v " + RELEASE);
document.getElementById("appRelease").innerText = RELEASE;

/**
 * Déclaration des différents items du formulaire
 * Pour ajouter un item il faut ajouter un champ de saisie au formulaire HTML
 * /!\ Ce champ de saisie doit avoir un ID de la forme : "#itemInput" 
 * Il faut aussi ajouter un champ cible dans lequel sera affiché la valeur de ce dernier
 * Celui doit aussi être de la forme "#itemOutput"
 */
const ITEMS = [
  "name",
  "orgTitle",
  "organisation",
  "email",
  "domain",
  "phone",
  "mobile",
  "pole"
];

/**
 * Définition des couleurs
 */
const COLORS = {
  ADAPEI: "#e6b000",
  DIOCESE: "#0b4a6d"
};

/**
 * Le dossier par défaut d'une image
 */
const IMG_PATH = "img/logos/";

/**
 * Pour ajouter un pole il suffit de le définir ici et d'ajouter son logo dans le dossier img/logos
 * hidden -  cache(true) le pole de la liste
 * domaine - permet de selectionner automatiquement le pole en fonction du domaine que l'utilisateur aura rentré dans le champ
 * color - permet de redéfinir la couleur du séparateur de la signature
 */
const LIST_POLES = [
  adapei = { lib: "Adapei de la Meuse", color : COLORS.ADAPEI, src:  "adapei.png"},
  retroActif = { lib: "Les rétro actifs", color : COLORS.ADAPEI, src:  "retroActif.png"},
  meuseInsertion = { lib: "Meuse Insertion", color : COLORS.ADAPEI, src: "meuseInsertion.png"},
  adultesDependants = { lib: "Pôle Adultes Dépendants", color : COLORS.ADAPEI, src:  "adultesDependants.png"},
  agricole = { lib: "Pôle Agricole", color : COLORS.ADAPEI, src:  "agricole.png"},
  enfance = { lib: "Pôle Enfance", color : COLORS.ADAPEI, src: "enfance.png"},
  habitat = { lib: "Pôle Habitat", color : COLORS.ADAPEI, src:  "habitat.png"},
  industriel = { lib: "Pôle Industriel", color : COLORS.ADAPEI, src: "industriel.png"},
  mobiMeuse = { lib: "Mobi'Meuse", color: COLORS.ADAPEI, src: "mobimeuse.png" },
  diocese = { lib: "Diocèse", color : COLORS.DIOCESE, src:  "diocese.png", hidden: true, domaine: "@catholique55.fr"},
  mda = { lib: "Maison des Adolescents", color : COLORS.DIOCESE, src:  "mda.jpg", hidden: true, domaine: "@mda55.fr"},
];


// Utilisés pour la selection de l'icone.
const poleInput = document.getElementById("poleInput");

/**
 * Remplissage du poleInput grâce au tableau LIST_POLES
 */
LIST_POLES.forEach((pole, i) => {
  let option = addOption(poleInput, i, pole.lib);
  if(pole.hidden){
    hideOption(option);
  }
});


// Désactivation de l'envoi par défaut du formulaire
document.getElementById("inputForm").addEventListener("submit", (e) => e.preventDefault());

/**
 * Events binding
 */
ITEMS.forEach(item => {
  let input = item + "Input";
  let output = item + "Output";
  document.getElementById(input).addEventListener("change", (e) =>
    mirror(e.target, document.getElementById(output))
  );
});


/**
 * Permet de définir si la cible est une image ou par défaut : un champ texte
 * @param {HTMLFormElement} input 
 * @param {HTMLElement} output 
 */
function mirror(input, output){
  // la valeur est vide
  if(!input.value) return;

  // l'output est une image
  if(output.nodeName === "IMG"){
    mirrorImg(input, output);
  } else {
    mirrorInput(input, output);

    // le champ modifié est le domaine, on check si le domaine est déclencheur
    // (utilisé pour les Pôles cachés)
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
  // définition de la source du logo
  output.src = IMG_PATH + LIST_POLES[input.value].src;
  // attribution de la couleur du séparator (@SEE COLORS)
  document
    .getElementById("separator")
    .style
    .borderColor = LIST_POLES[input.value].color;
}

/**
 * Si le domaine est changé -> Check dans la liste des poles si
 * une entrée correspond.
 * Si c'est le cas -> on change la value du select et on trigger l'evenement change
 * @param {HTMLFormElement} input 
 */
function domainChanged(input){
  LIST_POLES.forEach((pole, i) => {
    if(input.value === pole.domaine){
      selectValue(poleInput, i);
    }
  });
}

/**
 * Ajoute une option (valeur + texte) au select
 * @param {HTMLSelectElement} select target
 * @param {String} optionValue 
 * @param {String} optionText 
 */
function addOption(select, optionValue, optionText){
  let option = document.createElement('option');
  option.appendChild(document.createTextNode(optionText));
  option.value = optionValue;
  select.appendChild(option);
  return option;
}

/**
 * Empêche l'affichage de l'option dans un select
 * @param {HTMLOptionElement} option 
 */
function hideOption(option){
  option.hidden = true;
}

/**
 * Selectionne la valeur dans un select et déclanche l'évenement
 * @param {HTMLSelectElement} select 
 * @param {String} value
 */
function selectValue(select, value){
  select.value = value;
  select.dispatchEvent(new Event('change'));
}