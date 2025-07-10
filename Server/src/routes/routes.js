const express = require("express");
const  authRoutes  = require("./authRoutes");
const userRoutes = require('./userRoutes');
const productRotes = require('./productRoutes');

const router = express.Router();

// http://localhost:8080/

router.use("/auth",authRoutes);

router.use('/user',userRoutes);

router.use('/product',productRotes);


module.exports = router;
