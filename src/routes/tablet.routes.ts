/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { getSingleTablet } from '../controllers/tablet.controller';

export const tabletRoutes = express.Router();

tabletRoutes.get('/tablets/:id', express.json(), getSingleTablet);
