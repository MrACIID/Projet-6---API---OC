//Importation mongoose et unique-validator(pour s'assurer que l'email est unique dans la base de donnée)
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

// création schema objet user a envoyer a la base de données mongodb


const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

//Verification si email unique dans la base de donnée.
userSchema.plugin(uniqueValidator);


//Exportation du module pour l'utiliser depuis un fichier exterieur.
module.exports = mongoose.model('User', userSchema);