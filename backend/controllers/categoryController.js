const CategoryModel = require("../models/categoryModel");

exports.getCategories = (req, res) => {
  CategoryModel.getAllCategories((err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching categories" });
    }
    res.json(results);
  });
};

exports.addCategory = (req, res) => {
  const newCategory = { category_name: req.body.category_name };
  CategoryModel.addCategory(newCategory, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error adding category" });
    }
    res.status(201).json({ message: "Category added", id: result.insertId });
  });
};

exports.updateCategory = (req, res) => {
  const updatedCategory = { category_name: req.body.category_name };
  const id = req.params.id;
  CategoryModel.updateCategory(id, updatedCategory, (err) => {
    if (err) {
      return res.status(500).json({ error: "Error updating category" });
    }
    res.json({ message: "Category updated" });
  });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  CategoryModel.deleteCategory(id, (err) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting category" });
    }
    res.json({ message: "Category deleted" });
  });
};
