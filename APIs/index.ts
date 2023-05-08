import express from 'express';
import cors from "cors";
import { productsRouter } from './src/routes/productsRouter';
import { usersRouter } from './src/routes/usersRouter';
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", productsRouter);
app.use("/", usersRouter);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));