const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
const bodyParsar = require("body-parser");
const app = express();
app.use(bodyParsar.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define routes
app.use('/api', require('./routes/auth')); // Authentication routes
app.use('/api/wallet', require('./routes/wallet')); // Wallet routes
app.use('/api/transaction', require('./routes/transaction')); // Transaction routes

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




