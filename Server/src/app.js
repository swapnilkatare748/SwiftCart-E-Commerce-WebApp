const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/db');
const Routes = require("./routes/routes"); // ✅ Import userRoutes
const path = require('path');


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Connect to Database
connectDB();

// Routes  http://localhost:8080
app.use('/apis',Routes);

//midleware for serve static files 
app.use("/Public", express.static(path.join(__dirname, "../Public")));


app.get('/api', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
