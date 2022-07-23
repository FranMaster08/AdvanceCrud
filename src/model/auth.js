const modelDevice = require("./devices");

const login = (user, password) => {
  const found = modelDevice
    .findAll()
    .find((item) => item.user === user && item.password === password);
  return found;
};

module.exports = { login };
