import express from "express";
import { getClient } from "../db";
import Product from "../models/Product";
const productRouter = express.Router();

const errorResponse = ( error: any , res: any) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "internal Server Error"});
}

//module.exports = productRouter;

export default productRouter;