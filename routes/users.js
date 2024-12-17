import express from 'express'
const userRouter = express.Router();

userRouter.get('/', (req, res)=>{res.send({server:'Get all'})});
userRouter.get('/:id', (req, res)=>{res.send({server:`Get ${req.params.id}`})});

export default userRouter;