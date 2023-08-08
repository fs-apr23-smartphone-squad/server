// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { Product } from '../models/Product/product.model';

export class ProductService {
  findById(itemId: string, arr: Product[]): Product | undefined {
    return arr.find((phone) => phone.itemId === itemId);
  }
}
