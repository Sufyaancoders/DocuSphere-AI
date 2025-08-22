const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
// Load environment variables first
dotenv.config();
const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });

const mongoose = require('./config/database');
mongoose.connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/v1/auth", require("./routes/user"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
