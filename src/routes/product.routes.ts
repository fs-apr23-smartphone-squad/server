/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import {
  getBestDiscounts,
  getNewest,
  getProducts
} from '../controllers/product.controller';

export const productRoutes = express.Router();

productRoutes.get('/', express.json(), getProducts);
productRoutes.get('/new', express.json(), getNewest);
productRoutes.get('/discount', express.json(), getBestDiscounts);
