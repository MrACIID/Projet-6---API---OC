//Importation express , fonction router , et des controllers
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//Route Signup
router.post('/signup', userCtrl.signup);
//Route Login
router.post('/login', userCtrl.login);


//exportation module pour utilisation dans un fichier extérieur
module.exports = router;