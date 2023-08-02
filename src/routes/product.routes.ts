import express from 'express';
import { getProducts } from '../controllers/product.controller';

export const productRoutes = express.Router();

productRoutes.get('/', express.json(), getProducts);
