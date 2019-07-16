const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./config");
const budgets = require("./routes/budgets");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || db.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch(err => {
    console.log(err);
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use router for requests
app.use("/budgets", budgets);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
