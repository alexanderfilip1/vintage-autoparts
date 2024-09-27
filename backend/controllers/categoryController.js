const CategoryModel = require("../models/categoryModel");

exports.getCategories = async (req, res) => {
  try {
    const results = await CategoryModel.getAllCategories();
    res.json(results);
  } catch (err) {
    return res.status(500).json({ error: "Error fetching categories" });
  }
};

exports.addCategory = async (req, res) => {
  const newCategory = { category_name: req.body.category_name };
  try {
    const result = await CategoryModel.addCategory(newCategory);
    res.status(201).json({ message: "Category added", id: result.insertId });
  } catch (err) {
    return res.status(500).json({ error: "Error adding category" });
  }
};

exports.updateCategory = async (req, res) => {
  const updatedCategory = { category_name: req.body.category_name };
  const id = req.params.id;
  try {
    await CategoryModel.updateCategory(id, updatedCategory);
    res.json({ message: "Category updated" });
  } catch (err) {
    return res.status(500).json({ error: "Error updating category" });
  }
};

exports.deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    await CategoryModel.deleteCategory(id);
    res.json({ message: "Category deleted" });
  } catch (err) {
    return res.status(500).json({ error: "Error deleting category" });
  }
};
