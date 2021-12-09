const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    const token = req.body.token;
    if(!token){
        return res.status(403).send('Token requerido')
    }
    try {
        const decodif = jwt.verify(token,process.env.TOKEN_KEY);
        req.userVerf = decodif;
    } catch (error) {
        return res.status(400).send('Token invalido')
    }
    return next();
}

module.exports = verifyToken;