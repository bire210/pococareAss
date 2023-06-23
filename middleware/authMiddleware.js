const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.key, (err, decode) => {
      if (err) {
        return res.status(200).json({
          message: "Auth Fialed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    
    res.status(401).json({
      message: "Auth Failed",
      success: false,
    });
  }
};