var express = require("express");
var router = express.Router();
const db = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const [data] = await db.query("SELECT * FROM settings");
    res.status(200).json(data);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.put("/", async (req, res) => {
  try {
    const { sitename, phone_number } = req.body;
    if (!sitename || !phone_number) {
      return res
        .status(400)
        .json({ status: "error", message: "Missing fields" });
    }

    const result = await db.query(
      "UPDATE settings SET sitename = ?, phone_number = ? WHERE id = 1",
      [sitename, phone_number]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Settings not found" });
    }

    res
      .status(200)
      .json({ status: "success", message: "Settings updated successfully" });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

module.exports = router;
