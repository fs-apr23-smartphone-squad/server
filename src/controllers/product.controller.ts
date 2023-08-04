// product.controller.ts
import type { Request, Response } from 'express';
import { Product } from '../models/Product.model';
import { ProductService } from '../services/products.service';

const validSortByOptions = ['year', 'price'];
const validSortOrderOptions = ['ASC', 'DESC'];

export const getProductList = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ids, limit, offset, sortBy, sortOrder } = req.query;

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const hasQueries = sortBy && sortOrder;

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ids) {
      const products = typeof ids === 'string'
        ? await Product.findAll({ where: { id: ids.split(',') } })
        : await Product.findAll({ raw: true });

      res.json(products);

      return;
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!hasQueries) {
      const products = await Product.findAll();
      res.json(products);
      return;
    }

    // If there are queries, apply sorting
    if (!validSortByOptions.includes(sortBy as string) || !validSortOrderOptions.includes(sortOrder as string)) {
      res.status(400).json({ error: 'Invalid sortBy or sortOrder option' });
      return;
    }

    const products = await Product.findAndCountAll({
      raw: true,
      order: [[sortBy as string, sortOrder as string]],
      limit: Number(limit),
      offset: Number(offset)
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// export const getProductsByIds = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { ids } = req.query;
//     const products = await Product.findAll();
//     const products = typeof ids === 'string'
//       ? await Product.findAll({ where: { id: ids.split(',') } })
//       : await Product.findAll({ raw: true });

//     res.json(products);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const getNewProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.findAll();
    const newProducts = products
      .sort((a, b) => b.year - a.year)
      .slice(0, 20);

    res.json(newProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getDiscountedProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.findAll();
    const discountedPhones = products
      .sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price))
      .slice(0, 20);

    res.json(discountedPhones);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSingleProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productService = new ProductService();
    const { phoneId } = req.params;
    const products = await Product.findAll();

    const phone = productService.findById(phoneId, products);

    res.json(phone);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRecommendedProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const productService = new ProductService();
    const { phoneId } = req.params;
    const products = await Product.findAll();

    const phone = productService.findById(phoneId, products);

    if (phone === undefined) {
      res.status(404).json({ error: 'Phone not found' });
      return;
    }

    const recommendedProducts = products
      .filter(product => {
        const priceDifference = Math.abs(product.price - phone.price);
        return priceDifference <= 200 && priceDifference !== 0;
      })
      .slice(0, 8);

    res.json(recommendedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
