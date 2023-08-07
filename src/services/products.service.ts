import type { Product } from '../models/dsfsd';

export class ProductService {
  findById(itemId: string, arr: Product[]): Product | undefined {
    return arr.find((phone) => phone.itemId === itemId);
  }
}
