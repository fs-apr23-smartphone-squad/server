// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { Request, Response } from 'express';
import type { ProductType } from '../types';
import { Product } from '../models/Product/product.model';
import { Op } from 'sequelize';

const validSortByOptions = ['year', 'price'];
const validSortOrderOptions = ['ASC', 'DESC'];
const validProductTypeOptions = ['phones', 'tablets', 'accessories'];

export const getProductList = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const {
      ids,
      limit,
      offset,
      sortBy,
      sortOrder,
      productType,
      group,
      query } =
      req.query;

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const hasQueries = sortBy && sortOrder;

    if (productType !== undefined) {
      if (!validProductTypeOptions.includes(productType as string)) {
        res.status(400).json({ error: 'Invalid productType option' });
        return;
      }
      const products = await Product.findAll();

      if (productType === 'phones') {
        res.json(
          products.filter(
            (product: ProductType) => product.category === 'phones',
          ),
        );

        return;
      }

      if (productType === 'tablets') {
        res.json(
          products.filter(
            (product: ProductType) => product.category === 'tablets',
          ),
        );

        return;
      }

      if (productType === 'accessories') {
        res.json(
          products.filter(
            (product: ProductType) => product.category === 'accessories',
          ),
        );

        return;
      }

      res.json([]);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ids) {
      const products =
        typeof ids === 'string'
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
    if (
      !validSortByOptions.includes(sortBy as string) ||
      !validSortOrderOptions.includes(sortOrder as string)
    ) {
      res.status(400).json({ error: 'Invalid sortBy or sortOrder option' });
      return;
    }

    const products = await Product.findAndCountAll({
      raw: true,
      where: {
        category: group,
        name: {
          [Op.iLike]: `%${query as string}%`,
        },
      },
      order: [[sortBy as string, sortOrder as string]],
      limit: Number(limit),
      offset: Number(offset),
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getNewProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await Product.findAll();
    const newProducts = products
      .sort((a: ProductType, b: ProductType) => b.year - a.year)
      .slice(0, 20);

    res.json(newProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getDiscountedProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await Product.findAll();
    const discountedPhones = products
      .sort(
        (a: ProductType, b: ProductType) =>
          b.fullPrice - b.price - (a.fullPrice - a.price),
      )
      .slice(0, 20);

    res.json(discountedPhones);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRecommendedPhones = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const phones = await Product.findAll({
      where: {
        category: 'phones',
      },
    });

    const phone = phones.find((phone: ProductType) => phone.itemId === id);

    if (phone === undefined) {
      res.status(404).json({ error: 'Phone not found' });
      return;
    }

    const recommendedPhones = phones
      .filter((product: ProductType) => {
        const priceDifference = Math.abs(product.price - phone.price);
        return priceDifference <= 200 && priceDifference !== 0;
      })
      .slice(0, 8);

    res.json(recommendedPhones);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const getRecommendedTablets = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const tablets = await Product.findAll({
      where: {
        category: 'tablets',
      },
    });

    const tablet = tablets.find((tablet: ProductType) => tablet.itemId === id);

    if (tablet === undefined) {
      res.status(404).json({ error: 'Tablet not found' });
      return;
    }

    const recommendedTablets = tablets
      .filter((product: ProductType) => {
        const priceDifference = Math.abs(product.price - tablet.price);
        return priceDifference <= 200 && priceDifference !== 0;
      })
      .slice(0, 8);

    res.json(recommendedTablets);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const getRecommendedAccessories = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const accessories = await Product.findAll({
      where: {
        category: 'accessories',
      },
    });

    const accessory = accessories.find(
      (accessory: ProductType) => accessory.itemId === id,
    );

    if (accessory === undefined) {
      res.status(404).json({ error: 'Phone not found' });
      return;
    }

    const recommendedAccessories = accessories
      .filter((product: ProductType) => {
        const priceDifference = Math.abs(product.price - accessory.price);
        return priceDifference <= 200 && priceDifference !== 0;
      })
      .slice(0, 8);

    res.json(recommendedAccessories);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
