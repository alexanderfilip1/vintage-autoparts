const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const PartController = require("../controllers/partsController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/", PartController.getParts);
router.post("/", upload.single("image"), PartController.addPart);
router.put("/:id", upload.single("image"), PartController.updatePart);
router.delete("/:id", PartController.deletePart);

module.exports = router;
