/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import {
  getProductList,
  getNewProducts,
  getDiscountedProducts,
  getRecommendedPhones,
  getRecommendedTablets,
  getRecommendedAccessories,
} from '../controllers/product.controller';

export const productRoutes = express.Router();

productRoutes.get('/products', express.json(), getProductList);
productRoutes.get('/products/new', express.json(), getNewProducts);
productRoutes.get('/products/discount', express.json(), getDiscountedProducts);

productRoutes.get(
  '/phones/:id/recommended',
  express.json(),
  getRecommendedPhones,
);
productRoutes.get(
  '/tablets/:id/recommended',
  express.json(),
  getRecommendedTablets,
);
productRoutes.get(
  '/accessories/:id/recommended',
  express.json(),
  getRecommendedAccessories,
);
