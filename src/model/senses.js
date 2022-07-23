const fs = require("fs");
const path = require("path");
const pathDb = path.join(__dirname, "../db/senses.json");

const create = (data) => {
  const db = findAll();
  db.push(data);
  fs.writeFileSync(pathDb,JSON.stringify(db, null, 2), "utf8");
  return data;
};
const findAll = () => {
  return JSON.parse(fs.readFileSync(pathDb, "utf8"));
};
const findOne = (id) => {
  return findAll().find((item) => item.id === id);
};
const update = (id, data) => {
  const db = findAll();
  const found = db.filter((item) => item.id != id);
  found.push(data);
  fs.writeFileSync(pathDb,JSON.stringify(found, null, 2), "utf8");
  return data;
};
const deleted = (id) => {
  const db = findAll();
  const data = db.filter((item) => item.id != id);
  fs.writeFileSync(pathDb,JSON.stringify(data, null, 2), "utf8");
  return id;
};
module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleted,
};


