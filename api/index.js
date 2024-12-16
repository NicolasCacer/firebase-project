import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => console.log('Server ready on port 3000.'));
