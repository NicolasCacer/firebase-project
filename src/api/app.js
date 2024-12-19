import express from "express";
import userRouter from "../routes/users.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:3000", process.env.FRONT_END_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;
