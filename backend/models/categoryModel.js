const db = require("../config/db");

class CategoryModel {
  static async getAllCategories() {
    const sql = "SELECT * FROM categories";
    const [results] = await db.query(sql);
    return results;
  }

  static async addCategory(newCategory) {
    const sql = "INSERT INTO categories SET ?";
    const [result] = await db.query(sql, newCategory);
    return result;
  }

  static async updateCategory(id, updatedCategory) {
    const sql = "UPDATE categories SET ? WHERE id = ?";
    await db.query(sql, [updatedCategory, id]);
  }

  static async deleteCategory(id) {
    const sql = "DELETE FROM categories WHERE id = ?";
    await db.query(sql, [id]);
  }
}

module.exports = CategoryModel;
