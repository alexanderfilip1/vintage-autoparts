var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
};

var indexRouter = require("./routes/index");
const siteData = require("./routes/siteData");
const adminLogin = require("./routes/adminLogin");
const registerAdmin = require("./middlewares/registerAdmin");
const checkAdmin = require("./routes/checkAdmin");
const visits = require("./routes/visits");

var app = express();

registerAdmin()
  .then(() => {
    console.log("Admin registration process complete.");
  })
  .catch((err) => {
    console.error("Error during admin registration:", err);
  });

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/site-data", siteData);
app.use("/api/admin-login", adminLogin);
app.use("/api/checkAdmin", checkAdmin);
app.use("/api/log-visit", visits);

module.exports = app;
