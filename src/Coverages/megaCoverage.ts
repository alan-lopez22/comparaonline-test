import { Product } from "src/product";
import { ICoverage } from "./coverage";

export class MegaCoverage implements ICoverage{
  updatePrice(product: Product): void {
    product.price = 80;
  }
}
