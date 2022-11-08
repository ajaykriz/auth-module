const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", protect, getProfile);

module.exports = router;
