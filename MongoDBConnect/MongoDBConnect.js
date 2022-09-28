//Importation de mongoose
const mongoose = require('mongoose');

//Connection a la base de donnée mongoDB
mongoose.connect('mongodb+srv://aciid:8cEgLkcMWiIFzlwG@cluster0.pmhcrcq.mongodb.net/?retryWrites=true&w=majority',

{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


//Exportation de mongoose pour y accéder depuis un fichier exterieur.
module.exports = mongoose;