//importation jwt
const jwt = require('jsonwebtoken');

///middleware d'autorisation a l'aide de jsonwebtoken (verifie la validité du token de l'utilisateur)

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
     next();
    } catch(error) {
        res.status(401).json({ error });
    }
 };