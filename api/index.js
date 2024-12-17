import express from 'express';
import cors from 'cors';
import userRouter from '../routes/users.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.get('/',(req, res)=>{res.send({message:'Home'})});
app.use('/users', userRouter);
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;