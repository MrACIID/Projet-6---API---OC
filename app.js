//importation  framework express, et des routes user et sauce
const express = require('express');
const path = require('path');
const sauceRoutes = require('./routes/Sauce');
const userRoutes = require('./routes/user');

const app = express();

//connection base de donnée mongodb

const mongoose = require('./MongoDBConnect/MongoDBConnect');

app.use(express.json()); 

//headers d'autorisation d'accès depuis n'importe quelle origine, envois des requêtes avec get, post,ect afin de gérer le CORS.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Mise en place  route d'authentification.
app.use('/api/auth/',userRoutes);

//Mise en place routes de création, modification et supression des sauces.
app.use('/api/sauces',sauceRoutes);

//Mise en place route pour gérer les images envoyer par les utilisateurs.
app.use('/images', express.static(path.join(__dirname, 'images')));


//exportation app.js pour l'utiliser depuis un fichier extérieur.
module.exports = app;