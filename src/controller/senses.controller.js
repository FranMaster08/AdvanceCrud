const model = require("../model/senses");
const get = (req, res) => {
  res.json({ data: model.findAll() });
};
const getOne = (req, res) => {
  const id = req.params.id;
  const data = model.findOne(id);
  if (data) {
    res.status(200).json({ data });
  } else {
    res.status(404).json({ data: null });
  }
};
const create = (req, res) => {
  const data = req.body;
  model.create(data);
  res.status(201).json({ msg: "Created" });
};
const update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  model.update(id, data);
  res.status(201).json({ msg: "Updated" });
};
const deleted = (req, res) => {
  const id = req.params.id;
  model.deleted(id);
  res.status(201).json({ msg: "Deleted" });
};

module.exports = {
  get,
  getOne,
  create,
  update,
  deleted,
};
