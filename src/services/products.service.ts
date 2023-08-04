import type { Product } from '../models/Product.model';

export class ProductService {
  findById (phoneId: string, arr: Product[]): Product | undefined {
    return arr.find(phone => phone.phoneId === phoneId);
  }
}
