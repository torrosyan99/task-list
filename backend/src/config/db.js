import mongoose from 'mongoose';

import { ENV } from '#src/config/env.js';

mongoose
  .connect(ENV.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
