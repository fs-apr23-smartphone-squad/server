import type { Request, Response } from 'express';
import { Phone } from '../models/phone.model';

export const getSinglePhone = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const phones = await Phone.findAll();

    const phone = phones.find((phone) => phone.id === id);

    res.json(phone);
  } catch (error) {
    console.error('Error fetching phone:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
