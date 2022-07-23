const model = require("../model/auth");

const login = (req, res) => {
  const { user, password } = req.body;
  if (model.login(user, password)) {
    res.status(200).json({ token: "1234" });
  } else {
    res.status(401).json({ token: null });
  }
};

module.exports = { login };