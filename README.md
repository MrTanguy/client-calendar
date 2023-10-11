# client-calendar

## Initialisation 

Recupérer le repository via `git clone https://github.com/MrTanguy/client-calendar.git`

Se rendre dans le dossier `cd .\client-calendar\`

Utiliser la branch dev `git checkout dev`

## Lancer le projet

`npm start`

Il est important de préciser que cette commande, réalise : <br />
`npm install https://github.com/MrTanguy/api-calendar.git#dev` => Voir https://github.com/MrTanguy/api-calendar/tree/dev <br />
`browserify ./public/script/script.js -o ./public/bundle.js` => Permet de regrouper api-calendar et script.js en un seul fichier, sinon api-calendar n'est pas utilisable. <br />
`node server.js` => Lance le serveur node <br />
