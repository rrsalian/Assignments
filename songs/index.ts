import express from "express";
import { songsRouter } from './routes/songs';

const app = express();

app.use(express.json());

app.use("/", songsRouter);

app.listen(3000, () => console.log('Server Running!'));