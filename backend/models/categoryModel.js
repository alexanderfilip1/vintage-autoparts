const db = require("../config/db");

class CategoryModel {
  static getAllCategories(callback) {
    const sql = "SELECT * FROM categories";
    db.query(sql, callback);
  }

  static addCategory(newCategory, callback) {
    const sql = "INSERT INTO categories SET ?";
    db.query(sql, newCategory, callback);
  }

  static updateCategory(id, updatedCategory, callback) {
    const sql = "UPDATE categories SET ? WHERE id = ?";
    db.query(sql, [updatedCategory, id], callback);
  }

  static deleteCategory(id, callback) {
    const sql = "DELETE FROM categories WHERE id = ?";
    db.query(sql, [id], callback);
  }
}

module.exports = CategoryModel;
