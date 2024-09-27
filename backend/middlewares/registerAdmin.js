const bcrypt = require("bcrypt");
const crypto = require("crypto");
const db = require("../config/db");

const generateRandomString = (length) => {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
};

const adminUsername = "gwwerdy5915";

const registerAdmin = async () => {
  try {
    console.log("Starting admin registration process...");

    const [results] = await db.query("SELECT * FROM admin WHERE username = ?", [
      adminUsername,
    ]);

    if (results.length > 0) {
      console.log("Admin user already exists");
    } else {
      const password = generateRandomString(12);
      const hashedPassword = bcrypt.hashSync(password, 10);

      await db.query("INSERT INTO admin (username, password) VALUES (?, ?)", [
        adminUsername,
        hashedPassword,
      ]);
      console.log(
        `Admin user created with username: ${adminUsername} and password: ${password}`
      );
    }
  } catch (err) {
    console.error("Error during admin registration:", err);
  }
};

module.exports = registerAdmin;
