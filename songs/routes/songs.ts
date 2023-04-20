import express from "express";
import Song from "../models/songs";

export const songsRouter = express.Router();

const songs: Song[] = 
[{ id: 1, title : 'Backstreet Boys', artist : 'artist1', genre : 'genre1'},
 { id: 2, title : 'XYZ', artist: 'artist2' , genre : 'genre2'  }                        
];

songsRouter.get('/songs', (req, res) => {
    res.json(songs);
});

songsRouter.get('/songs/:id', (req, res) => {
    const song = songs.find(song => song.id === +req.params.id);
    res.json(song);
});


songsRouter.post('/songs', (req, res) => {
    //movies.push(req.body);
    //res.json(req.body);

    const newSong = {
        id : songs.length + 1,
        title : req.body.title,
        artist : req.body.artist,
        genre : req.body.genre
    }
    songs.push(newSong);
    res.json(newSong);
});

//export default router;