# client-calendar

## Démarrer avec NodeJS

### Prérequis

- nodejs : [installation](https://nodejs.org/en/download)
- npm : Inclus dans l'installation de nodejs

### Initialisation 

Recupérer le repository via `git clone https://github.com/MrTanguy/client-calendar.git`

Se rendre dans le dossier `cd .\client-calendar\`

Utiliser la branch dev `git checkout dev`

Installer les dépendances `npm install`

### Lancer le projet

`npm start`

Il est important de préciser que cette commande, réalise : <br />
`npm install https://github.com/MrTanguy/api-calendar.git#dev` => Voir https://github.com/MrTanguy/api-calendar/tree/dev <br />
`browserify ./public/script/script.js -o ./public/bundle.js` => Permet de regrouper api-calendar et script.js en un seul fichier, sinon api-calendar n'est pas utilisable. <br />
`node server.js` => Lance le serveur node <br />

## Démarrer avec Docker

### Prérequis

- WSL2 : [installation](https://learn.microsoft.com/fr-fr/windows/wsl/install)
- Docker : [installation](https://www.docker.com/products/docker-desktop/)


### Initialisation 

Recupérer le repository via `git clone https://github.com/MrTanguy/client-calendar.git`

Se rendre dans le dossier `cd .\client-calendar\`

Utiliser la branch dev `git checkout dev`

Créer l'image Docker `docker build -t mrtanguy/api-calendar:1.0 .`

Une fois la commande finie, récupérer l'image à la suite de `=> => writing image` 

Après avoir trouvé l'image, lancer `docker run -p 3000:3000 [image]`

Se rendre sur `http://localhost:3000` pour tester la librairie.

PS : Un nouveau container devrait apparaître dans Docker Desktop


