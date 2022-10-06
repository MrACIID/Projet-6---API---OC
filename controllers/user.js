//Importations bcrypt(hashage mot de passe), jwt et models User.js de la base de donnée
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

//Logique fonction signup, et exportation de celle ci
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10) //hashage du mot de passe x 10
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};

//Logique fonction login, et exportation de celle ci
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }); //Vérification si user existe dans la base de donnée
    if (!user) {
      return res.status(401).json({
        message: "Paire login/mot de passe incorrecte",
      }); //Erreur si user non valide
    }
    const valid = await bcrypt.compare(req.body.password, user.password); //Vérification validité mot de passe
    if (!valid) {
      return res.status(401).json({
        message: "Paire login/mot de passe incorrecte",
      }); //Erreur si mdp non valide
    }
    //Création d'un token avec JWT valable 24h une fois utilisateur connecté
    res.status(200).json({
      userId: user._id,
      token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};
