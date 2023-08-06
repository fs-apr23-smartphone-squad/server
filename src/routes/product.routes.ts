/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import {
  getProductList,
  getNewProducts,
  getDiscountedProducts,
  getSingleProduct,
  getRecommendedProducts
} from '../controllers/product.controller';

export const productRoutes = express.Router();

productRoutes.get('/products', express.json(), getProductList);
productRoutes.get('/products/new', express.json(), getNewProducts);
productRoutes.get('/products/discount', express.json(), getDiscountedProducts);
productRoutes.get('/products/:itemId', express.json(), getSingleProduct);
productRoutes.get('/products/:itemId/recommended', express.json(), getRecommendedProducts);
