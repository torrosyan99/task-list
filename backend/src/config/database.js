import mongoose from "mongoose";

import { ENV } from "#src/config/env.js";

mongoose
  .connect(ENV.MONGO_DB)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log("Error connecting MongoDB");
  });
