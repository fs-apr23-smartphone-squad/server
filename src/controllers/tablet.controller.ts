import type { Request, Response } from 'express';
import { Tablets } from '../models/Tablets/tablets.model';

export const getSingleTablet = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const tablets = await Tablets.findAll();

    const tablet = tablets.find((tablet) => tablet.id === id);

    res.json(tablet);
  } catch (error) {
    console.error('Error fetching accessory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
