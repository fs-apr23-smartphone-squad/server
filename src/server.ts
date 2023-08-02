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
  const { ids } = req.query;

  console.log(ids);

  if (typeof ids === 'string') {
    const idsArray = ids.split(',');

    try {
      const products = await Product.findAll({
        where: {
          id: idsArray
        }
      });

      return res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    try {
      const products = await Product.findAll({ raw: true });

      return res.json(products);
    } catch (error) {
      console.error('Error connecting to the database:', error);

      return res.status(500);
    }
  }
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:5000 🚀🚀🚀');
});
