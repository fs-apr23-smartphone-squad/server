import type { Request, Response } from 'express';
import { Product } from '../models/Product.model';

const sortByOptions = ['year', 'price'];

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    ids,
    limit = 64,
    offset = 0,
    sortBy = 'year',
    sortOrder = 'ASC'
  } = req.query;

  if (!sortByOptions.includes(sortBy as string)) {
    res.status(400).json({ error: 'Invalid sortBy option' });
    return;
  }

  if (!['ASC', 'DESC'].includes(sortOrder as string)) {
    res.status(400).json({ error: 'Invalid sortOrder option' });
    return;
  }

  try {
    let products;

    if (typeof ids === 'string') {
      const idsArray = ids.split(',');

      products = await Product.findAll({
        where: {
          id: idsArray
        },
        order: [[sortBy as string, sortOrder as string]],
        limit: Number(limit),
        offset: Number(offset)
      });
    } else {
      products = await Product.findAll({
        raw: true,
        order: [[sortBy as string, sortOrder as string]],
        limit: Number(limit),
        offset: Number(offset)
      });
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getNewest = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.findAll({
      order: [['year' as string, 'DESC' as string]],
      limit: Number(20)
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBestDiscounts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.findAll();
    const tenBestDiscountsIds = products
      .map((product) => ({
        discount: product.fullPrice - product.price,
        id: product.id
      }))
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 20)
      .map((item) => item.id);

    const bestProducts = await Product.findAll({
      where: {
        id: tenBestDiscountsIds
      }
    });

    res.json(bestProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
