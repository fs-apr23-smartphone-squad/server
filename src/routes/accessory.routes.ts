/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { getSingleAccessory } from '../controllers/accessory.controller';

export const accessoryRoutes = express.Router();

accessoryRoutes.get('/accessories/:id', express.json(), getSingleAccessory);
