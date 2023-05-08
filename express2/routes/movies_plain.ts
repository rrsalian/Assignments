import express from "express";
import Movie from "../models/movies";

export const moviesRouter = express.Router();

const movies: Movie[] = 
[{ id: 1, title : 'Mario Bros', year : 2023},
 { id: 2, title : 'Goonies', year: 1985}                         
];

moviesRouter.get('/movies', (req, res) => {
    res.json(movies);
});

moviesRouter.get('/movies/:id', (req, res) => {
    const movie = movies.find(movie => movie.id === +req.params.id);
    if (movie === undefined) 
        return res.status(404).send('Movie Not found');
    res.json(movie);
});


moviesRouter.post('/movies', (req, res) => {
    //movies.push(req.body);
    //res.json(req.body);

    const newMovie = {
        id : movies.length + 1,
        title : req.body.title,
        year : req.body.year
    }
    movies.push(newMovie);
    res.json(newMovie);
});

moviesRouter.put('/movies/:id', (req, res) => {

    const movie = movies.find(movie => movie.id === +req.params.id); 
    console.log(movie);
    if (movie === undefined) 
        return res.status(404).send('Movie Not found');
    else {
        movie.title = req.body.title;
        movie.year = req.body.year;
        res.json(movie);
    }
});

moviesRouter.delete('/movies/:id', (req, res) => {

    const movie = movies.findIndex(movie => movie.id === +req.params.id);
    if (movie === -1)
        return res.status(404).send('Movie not found');
    else
        movies.splice(movie, 1);
    return res.json(movies);
}) 

//export default router;