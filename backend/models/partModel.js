const db = require("../config/db");

class PartModel {
  static async getAllParts() {
    const sql = "SELECT * FROM parts";
    const [results] = await db.query(sql);
    return results;
  }

  static async addPart(newPart) {
    const sql = "INSERT INTO parts SET ?";
    const [result] = await db.query(sql, newPart);
    return result;
  }

  static async updatePart(id, updatedPart) {
    const sql = "UPDATE parts SET ? WHERE id = ?";
    await db.query(sql, [updatedPart, id]);
  }

  static async deletePart(id) {
    const sql = "DELETE FROM parts WHERE id = ?";
    await db.query(sql, [id]);
  }
}

module.exports = PartModel;
