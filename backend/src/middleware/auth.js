const jwt = require('jsonwebtoken');

module.exports = {
  authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[0];

    if (token == null) return res.sendStatus(401);

    if(process.env.JWT_SECRET_KEY){
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
          if (err) return res.sendStatus(403);
          req.user = user;
          next();
        });
    }
  }
}