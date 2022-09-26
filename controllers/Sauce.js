//Importation du model sauce.js
const Sauce = require("../models/Sauce");


//Logique création de sauce et exportation de celle ci
exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
  });
  sauce
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

//Logique récupération d'une sauce et exportation de celle ci
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};

//Logique modification d'une sauce et exportation de celle ci
exports.modifySauce = (req, res, next) => {
  Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié" }))
    .catch((error) => res.status(400).json({ error }));
};

//Logique supression d'une sauce et exportation de celle ci
exports.deleteSauce = (req, res, next) => {
  Sauce.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};

//Logique récupération des sauces et exportation de celle ci
exports.getAllSauce = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};

//Logique like et dislike d'une sauce et exportation de celle ci
exports.likeSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
  .then((sauce) => {
    if (!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1) {
      Sauce.updateOne(
        { _id: req.params.id },
        { $inc: { likes: 1 }, $push: { usersLiked: req.body.userId } }
      )

        .then(() => res.status(201).json({ message: "likeSauce +1" }))
        .catch((error) => res.status(400).json({ error }));
    }

    if (sauce.usersLiked.includes(req.body.userId) && req.body.like === 0) {
      Sauce.updateOne(
        { _id: req.params.id },
        { $inc: { likes: -1 }, $pull: { usersLiked: req.body.userId } }
      )

        .then(() => res.status(201).json({ message: "likeSauce 0" }))
        .catch((error) => res.status(400).json({ error }));
    }

    if (
      !sauce.usersDisliked.includes(req.body.userId) &&
      req.body.like === -1
    ) {
      Sauce.updateOne(
        { _id: req.params.id },
        { $inc: { dislikes: 1 }, $push: { usersDisliked: req.body.userId } }
      )

        .then(() => res.status(201).json({ message: "DislikeSauce +1" }))
        .catch((error) => res.status(400).json({ error }));
    }

    if (sauce.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
      Sauce.updateOne(
        { _id: req.params.id },
        { $inc: { dislikes: -1 }, $pull: { usersDisliked: req.body.userId } }
      )

        .then(() => res.status(201).json({ message: "DislikeSauce 0" }))
        .catch((error) => res.status(400).json({ error }));
    }
  });
};
