import express from "express";
import userRouter from "../routes/users.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://next-project-liart-three.vercel.app/",
    ], // Add your frontend URLs
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;
