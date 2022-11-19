const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (jwt) {
    jwt.verify(token, "HarrisCliff key", async (err, decodedToken) => {
      if (err) {
        res.json({ statusbar: false });
        next();
      } else {
        const user = await User.findById(decodedToken.id);
        if (user) res.json({ statusbar: true, user: user.email });
        else res.json({ statusbar: false });
        next();
      }
    }); 
  } else {
    res.json({ statusbar: false });
    next();
  }
};
