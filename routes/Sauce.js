//Importation express , fonction router , middleware auth(gestion d'autorisation) et multer(gestion de fichier)
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Importation controller Sauce.js
const sauceCtrl = require('../controllers/Sauce')

//Route création d'une sauce
router.post('/', auth, multer, sauceCtrl.createSauce);

//Route modification d'une sauce
router.put('/:id', auth, sauceCtrl.modifySauce);

//Route suppression d'une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce);

//Route récupération d'une sauce
router.get('/:id', auth, sauceCtrl.getOneSauce);

//Route récupération des sauces
router.get('/', auth, sauceCtrl.getAllSauce);

//Route like, dislike d'une sauce
router.post('/:id/like', auth, sauceCtrl.likeSauce);

//Exportation du module
module.exports = router;