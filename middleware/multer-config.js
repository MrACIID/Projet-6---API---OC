//Importation multer(gestion de fichier)
const multer = require('multer');

//Gestion d'images a l'aide de multer 

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  };

const storage = multer.diskStorage({
destination:(req, file, callback) => {
    callback(null, 'images')
},
filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
}

});


//Exportation du module
module.exports = multer({storage: storage}).single('image');
