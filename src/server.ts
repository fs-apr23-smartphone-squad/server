import express from 'express';
import cors from 'cors';
import { sequelize } from './services/db.service';
// import { Product } from './models/Product.model';
import { productRoutes } from './routes/product.routes';

const PORT = 5000;

const app = express();

app.use(cors());

// Sequelize starts

const res = sequelize.authenticate();
console.log(res);

// Sequelize ends

app.use(express.static('public'));

app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:5000 🚀🚀🚀');
});
