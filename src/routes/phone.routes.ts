/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { getSinglePhone } from '../controllers/phone.controller';

export const phoneRoutes = express.Router();

phoneRoutes.get('/phones/:id', express.json(), getSinglePhone);
