# Générateur de signatures

Cette application web permet de générer des signatures personnalisées pour Office 365

## À propos

L'ADAPEI de la Meuse utilise la solution Microsoft Office 365 pour gérer ses mails. Outlook propose aux utilisateurs d'intégrer une signature à la fin dans chacun de leurs mails. La signature peut être du texte, une image, etc.

Cet application génère une image pouvant être utilisée comme signature. Elle expose divers champs (nom, prénom, etc) qui peuvent être changés en temps réel par l'utilisateur. Une fois l'utilisateur satisfait, il peut télécharger sa signature et commencer à l'utiliser.

L'application tourne entièrement côté client à l'aide de Javascript, le serveur web sert uniquement à envoyer les fichiers : PHP ou autre n'est pas requis pour que cette application fonctionne.

## Installation

Pour installer cette appliation, copiez simplement le contenu de ce dépôt dans un dossier servi par votre serveur web, `/var/www/html` par exemple. Assurez-vous qu'il n'y ai pas de conflit de noms (exemple: `index.html` existe déjà), pour éviter cette erreur il est recommandé de copier l'application dans son propre dossier : `/var/www/html/signatures`


## Changelog

### v1.2.0

Ajout de la selection du pôle ainsi que son logo
