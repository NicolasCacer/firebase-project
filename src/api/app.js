import express from "express";
import userRouter from "../routes/users.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;
