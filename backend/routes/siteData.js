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
module.exports = router;
