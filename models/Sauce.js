//Importation mongoose
const mongoose = require('mongoose');

//Création schema objet sauce a envoyer a la base de données mongodb

const sauceSchema = mongoose.Schema({
    
      userId: { type: String, required: true},
      name: { type: String, required: true},
      manufacturer: { type: String, required: true},
      description: { type: String, required: true},
      mainPepper: { type: String, required: true},
      imageUrl: { type: String, required: true},
      heat: { type: Number, required: true},
      likes: { type: Number, },
      dislikes: { type: Number, },
      usersLiked: { type: [String] },
      usersDisliked: { type: [String] },
});


//Exportation module pour l'utiliser dans un fichier exterieur
module.exports = mongoose.model('Sauce', sauceSchema);
