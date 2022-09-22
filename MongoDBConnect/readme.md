Afin de connecter l'api a la base de donnée MongoDB il faut:

- créer un fichier "MongoDBConnect.js" dans le dossier "MongoDBConnect"

- dans "MongoDBConnect.js" remplir ce code : 


     const mongoose = require('mongoose');
        
         ///Remplacez "mongodb://localhost/test" par l'url de votre base de donnée.

     mongoose.connect('mongodb://localhost/test',

     { useNewUrlParser: true,
     useUnifiedTopology: true })
     .then(() => console.log('Connexion à MongoDB réussie !'))
     .catch(() => console.log('Connexion à MongoDB échouée !'));

      module.exports = mongoose;



