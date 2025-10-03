import "reflect-metadata";
import express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./config/data-source.js";

import { userRouter } from "./routes/user.routes.js";
import { authRouter } from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", authRouter);
app.use("/api", userRouter);

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
