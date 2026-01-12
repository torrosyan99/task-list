import cookieParser from "cookie-parser";
import express from "express";
import path from "path";

import "#src/config/database.js";
import { ENV } from "#src/config/env.js";
import { errorMiddleware } from "#src/middlewares/error.middleware.js";
import router from "#src/routes/index.js";

const __dirname = path.resolve();

const app = express();

app.get("/api/data", (req, res) => {
  res.send({
    success: true,
    message: "All good",
  });
});

app.use(express.json());
app.use(cookieParser());
app.use(router);

if (ENV.MODE === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/dist")));
  app.get("{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
}

app.use(errorMiddleware);

app.listen(ENV.PORT, () => {
  console.log(`Server start in ${ENV.PORT} port`);
});
