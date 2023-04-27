import { ObjectId } from "mongodb";
import express from "express";
import { getClient } from "../db";
import Product from "../models/Product";

export const productRouter = express.Router();

const errorResponse = ( error: any , res: any) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "internal Server Error"});
}

productRouter.get('/products', async(req, res) => {
    try {
       let includes = req.query.includes;
       let maxPrice = req.query.maxPrice;
       let limit = req.query.limit;

       let query: any = {
         $and: [           
             maxPrice ? { price: { $lte: +maxPrice } } : {},
             includes ? { name: { $regex: `${includes}`, $options: "xi" }} : {},           
         ]
       }

      const client = await getClient();
      let results = await client.db()
          .collection<Product>('products').find(query)
          .sort({price: -1});

      if (limit) {
        results = results.limit(+limit);
      }

      const newResults = await results.toArray();

      res.json(newResults);

    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

productRouter.post('/products', async(req, res) => {
    try {  
      const product = req.body as Product;
      const client = await getClient();
      await client.db()
        .collection<Product>('products')
        .insertOne(product);
      res.status(201).json(product);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }
  });

productRouter.put('/products/:id',async (req, res) => {
    try {
        const _id = new ObjectId(req.params.id);
        const client = await getClient();
        const results = await client.db().collection<Product>('products').updateOne({_id: _id},{$set:req.body});
        res.json(results);
      } catch (err) {
        return errorResponse;
      }    
  });

  




//module.exports = productRouter;

export default productRouter;