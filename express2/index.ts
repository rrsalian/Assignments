import express from "express";
import { moviesRouter } from './routes/movies';
import { usersRouter } from "./routes/users";

const app = express();

app.use(express.json());

app.use("/", moviesRouter);
app.use("/", usersRouter);

app.listen(3000, () => console.log('Server Running!'));