import express from 'express';
import dotenv from 'dotenv';
import {userRouter} from '../routes/userRoutes.js';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use(express.json());
app.use("/users",userRouter);


app.listen(3000, () => console.log('Server ready on port 3000.'));
