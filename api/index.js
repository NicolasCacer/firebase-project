import express from 'express';
import cors from 'cors';
import userRouter from '../routes/users.js';


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/users',userRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Esta ruta no existe' });
});
app.use((err, req, res, next) => {
  console.error(err.stack); // Loggear el error para depuración
  res.status(500).json({
    message_error: err.message || 'Error interno del servidor',
  });
});
app.listen(port,(req,res)=>{
  console.log(`Server running on http://localhost:${port}`)
})

export default app;