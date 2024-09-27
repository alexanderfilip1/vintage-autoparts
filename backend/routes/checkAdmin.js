var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  if (req.cookies.token) {
    try {
      const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
      res.status(200).json({ message: "authenticated", user: decoded });
    } catch (err) {
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      res.status(401).json({ message: "unauthenticated" });
    }
  } else {
    res.status(401).json({ message: "unauthenticated" });
  }
});

module.exports = router;
