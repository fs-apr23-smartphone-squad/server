import type { Request, Response } from 'express';
import { Accessories } from '../models/accessories.model';

export const getSingleAccessory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const accessories = await Accessories.findAll();

    const accessory = accessories.find((accessory) => accessory.id === id);

    res.json(accessory);
  } catch (error) {
    console.error('Error fetching accessory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
