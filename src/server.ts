import express from 'express';
import cors from 'cors';
import path from 'path';
import { initDB } from './initDB';

const PORT = 5000;
const app = express();

app.use(cors());

// Sequelize starts

const sequelize = initDB();

const res = sequelize.authenticate();

console.log(res);

// Sequelize ends

app.use(express.static(path.resolve('public')));

app.get('/products', (req, res) => {
  const filePath = path.resolve('api', 'phones.json');

  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:5000 🚀🚀🚀');
});
