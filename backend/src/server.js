import path from 'path';

import express from 'express';

import { ENV } from '#src/config/env.js';
import './config/db.js';
import User from '#src/model/User.js';

const server = express();

server.use(express.json());

const __dirname = path.resolve();

server.post('/api/register', async (req, res) => {
  console.log(req.body)
  const user = await User.create(req.body);
  res.send(user);
});

server.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

if (ENV.MODE === 'production') {
  server.use(express.static(path.resolve(__dirname, '../frontend/dist')));
  server.get('/{*any}', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
  });
}

server.listen(ENV.PORT, () => {
  console.log('Server started ' + ENV.PORT + ' port');
});
