const validate = (req, res, next) => {
  const { token } = req.headers;
  if (token && token == "1234") {
    next();
  } else {
    res.status(401).json({ message: "usted no esta Autorizado" });
  }
};

module.exports = { validate };
