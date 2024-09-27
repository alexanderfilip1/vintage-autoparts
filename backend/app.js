var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
<<<<<<< Updated upstream
var usersRouter = require("./routes/users");
=======
const siteData = require("./routes/siteData");
const adminLogin = require("./routes/adminLogin");
const registerAdmin = require("./middlewares/registerAdmin");
const checkAdmin = require("./routes/checkAdmin");
const visits = require("./routes/visits");
const categoryRoutes = require("./routes/adminCategories");
const partRoutes = require("./routes/adminParts");
>>>>>>> Stashed changes

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
<<<<<<< Updated upstream
=======
app.use("/api/site-data", siteData);
app.use("/api/admin-login", adminLogin);
app.use("/api/checkAdmin", checkAdmin);
app.use("/api/log-visit", visits);
app.use("/api/categories", categoryRoutes);
app.use("/api/parts", partRoutes);
app.use("/uploads", express.static("uploads"));
>>>>>>> Stashed changes

module.exports = app;
