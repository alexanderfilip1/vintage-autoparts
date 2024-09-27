const { z } = require("zod");

const adminSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .max(255, "Username must not exceed 255 characters"),
  password: z
    .string()
    .min(1, "Password is required")
    .max(255, "Password must not exceed 255 characters"),
});

module.exports = adminSchema;
