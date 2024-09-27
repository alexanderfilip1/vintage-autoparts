const PartModel = require("../models/partModel");

exports.getParts = async (req, res) => {
  try {
    const results = await PartModel.getAllParts();
    res.json(results);
  } catch (err) {
    return res.status(500).json({ error: "Error fetching parts" });
  }
};

exports.addPart = async (req, res) => {
  console.log(req.file);
  const newPart = {
    category_id: req.body.category_id,
    name: req.body.name,
    image: req.file ? req.file.path : null,
    price: req.body.price,
  };
  try {
    const result = await PartModel.addPart(newPart);
    res.status(201).json({ message: "Part added", id: result.insertId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error adding part" });
  }
};

exports.updatePart = async (req, res) => {
  const updatedPart = {
    category_id: req.body.category_id,
    name: req.body.name,
    image: req.file ? req.file.path : undefined,
    price: req.body.price,
  };
  const id = req.params.id;
  try {
    await PartModel.updatePart(id, updatedPart);
    res.json({ message: "Part updated" });
  } catch (err) {
    return res.status(500).json({ error: "Error updating part" });
  }
};

exports.deletePart = async (req, res) => {
  const id = req.params.id;
  try {
    await PartModel.deletePart(id);
    res.json({ message: "Part deleted" });
  } catch (err) {
    return res.status(500).json({ error: "Error deleting part" });
  }
};
