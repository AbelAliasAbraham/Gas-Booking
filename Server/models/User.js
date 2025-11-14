const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { type: String, required: true, unique: true, match: /^[0-9]{10}$/ },
  // CORRECTION: Removed minlength and match as this field stores the HASHED password.
  // Raw password validation is correctly handled in the auth router (auth.js).
  password: { type: String, required: true } 
}, { timestamps: true }); // Added timestamps for better record keeping

module.exports = mongoose.model("User", userSchema);