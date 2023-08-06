import type { Product } from '../models/Product.model';

export class ProductService {
  findById (itemId: string, arr: Product[]): Product | undefined {
    return arr.find(phone => phone.itemId === itemId);
  }
}
