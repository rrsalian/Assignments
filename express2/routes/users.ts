import express from "express";

export const usersRouter = express.Router();

usersRouter.get('/users', (req, res) => {
    res.json([ { user : "Raj" , email : "raj.gmail.com"},
               { user: "John" , email : "john@gmail.com"} ]);

});

//export default router;