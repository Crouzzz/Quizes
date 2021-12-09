const express = require("express")
const userRouter = express.Router();
const {getAllProduct}=require('../controllers/user')


app.get("/products",getAllProduct)