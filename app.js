// importation express, et des routes 
const express = require('express');
const path = require('path');
const sauceRoutes = require('./routes/Sauce');
const userRoutes = require('./routes/user');

const app = express();

// connection base de donnée mongodb

const mongoose = require('./MongoDBConnect/MongoDBConnect');

app.use(express.json()); 

// headers d'accès depuis n'importe quelle origine, envois des requêtes avec get, post,ect.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/api/auth/',userRoutes);
app.use('/api/sauces',sauceRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;