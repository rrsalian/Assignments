import express from "express";
import Movie from "../models/movies";
import { getClient } from "../db";
import { ObjectId } from "mongodb";

export const moviesRouter = express.Router();

const movies: Movie[] = 
[{ id: 1, title : 'Mario Bros', year : 2023},
 { id: 2, title : 'Goonies', year: 1985}                         
];

moviesRouter.get('/movies', async(req, res) => {
    try {
        const client = await getClient();
        const results = await client.db()
            .collection<Movie>('movies').find().toArray();
        res.json(results);

    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

moviesRouter.post('/movies', async(req, res) => {

    try {
        const movie = req.body as Movie;
        const client = await getClient();
        await client.db()
            .collection<Movie>('movies')
            .insertOne(movie);
        res.status(201).json(movie);        
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }

});

moviesRouter.delete('/movies/:id', async (req, res) => {
    try {
        const _id = new ObjectId(req.params.id);
        const client = await getClient();
        const result = await client.db().collection<Movie>('movies')
            .deleteOne({ _id: _id});
        if (result.deletedCount === 0) {
            res.status(404).json({message: "Not Found"});
        } else {
            res.status(204).end();
        }
    } catch(err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }
})

moviesRouter.put('/movies/:id', async(req, res) => {
    try {
        const _id = new ObjectId(req.params.id);
        const data = req.body as Movie;
        //delete data.id;  //remove _id from body so we only have one
        const client = await getClient();
        const result = await client.db().collection<Movie>('movies')
            .replaceOne({ _id: _id}, data);
        if (result.modifiedCount === 0) {
            res.status(404).json({ message : "Not Found" });
        } else {
            //data._id = new ObjectId(id);
            res.json(data);
        }
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

function replaceOne(arg0: { _id: ObjectId; }, data: Movie) {
    throw new Error("Function not implemented.");
}
