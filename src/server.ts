/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import cors from 'cors';
import { initDB } from './initDB';
import { Product } from './models/Product.model';

const PORT = 5000;

const app = express();
app.use(cors());

// Sequelize starts

const sequelize = initDB();
const res = sequelize.authenticate();

console.log(res);

// Sequelize ends

app.use(express.static('public'));

app.get('/products', express.json(), async (req, res) => {
  try {
    const { ids } = req.query;
    const products = typeof ids === 'string'
      ? await Product.findAll({ where: { id: ids.split(',') } })
      : await Product.findAll({ raw: true });

    return res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:5000 🚀🚀🚀');
});
