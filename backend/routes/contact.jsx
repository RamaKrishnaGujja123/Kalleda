const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // You can integrate an email service here to send the message
  return res.status(200).json({ success: "Message sent successfully" });
});

module.exports = router;
