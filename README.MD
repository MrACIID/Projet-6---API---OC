Projet 6 de la Formation Web dev d'Openclassrooms

Construisez une API sécurisée pour une application d'avis gastronomiques

- Utilisation d'Express, Mongoose, Multer, BCrypt, jsonwebtoken et Nodemon.

Afin de connecter l'api a la base de donnée MongoDB il faut:

- Créer un fichier "MongoDBConnect.js" dans le dossier "MongoDBConnect"

- Dans "MongoDBConnect.js" remplir ce code :      

////////////////////////////

const mongoose = require('mongoose');

///Remplacez "mongodb://localhost/test" par l'url de votre base de donnée.

mongoose.connect('mongodb://localhost/test',

{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;

///////////////////////




Lien du frontend : https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6
Spécifications de l'API : https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf

