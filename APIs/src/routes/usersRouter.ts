import { ObjectId } from "mongodb";
import express from "express";
import { getClient } from "../db";
import User from "../models/User";

export const usersRouter = express.Router();

const errorResponse = ( error: any , res: any) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "internal Server Error"});
}

usersRouter.get('/users', async(req, res) => {
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
          .collection<User>('users').find(query)
          .sort({price: -1});

      if (limit) {
        results = results.limit(+limit);
      }

      //const newResults = await results.toArray();

      res.json(results.toArray());

    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

usersRouter.post('/users', async(req, res) => {
    try {  
      const user = req.body as User;
      const client = await getClient();
      await client.db()
        .collection<User>('users')
        .insertOne(user);
      res.status(201).json(user);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }
  });

usersRouter.put('/users/:id',async (req, res) => {
    try {
        const _id = new ObjectId(req.params.id);
        const client = await getClient();
        const results = await client.db().collection<User>('users').updateOne({_id: _id},{$set:req.body});
        res.json(results);
      } catch (err) {
        return errorResponse;
      }    
  });

  
//module.exports = usersRouter;

export default usersRouter;