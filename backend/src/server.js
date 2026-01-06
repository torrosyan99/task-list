import express from "express";
import path from "path";

const __dirname = path.resolve();

import { ENV } from "#src/config/env.js";

const app = express();

app.get("/api/data", (req, res) => {
  res.send({
    success: true,
    message:'All good'
  })
})

if(ENV.MODE === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  })
}


app.listen(ENV.PORT, () => {
  console.log(`Server start in ${ENV.PORT} port`);
});
