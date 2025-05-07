const express = require("express");
const app = express();
const contactRoutes = require("./routes/contact");

app.use(express.json());
app.use("/api/contact", contactRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
