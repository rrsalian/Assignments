import express from 'express';
import cors from "cors";
import productRouter from './routes/productRouter';
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", productRouter);
const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));