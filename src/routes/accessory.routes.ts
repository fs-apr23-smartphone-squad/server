/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { getSingleAccessory } from '../controllers/accessory.controller';

export const accessoryRoutes = express.Router();

accessoryRoutes.get('/products/:id', express.json(), getSingleAccessory);
