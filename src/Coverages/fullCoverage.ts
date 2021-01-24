import { Product } from "src/product";
import { ICoverage } from "./coverage";

export class FullCoverage implements ICoverage {
  updatePrice(product: Product): void {
    if (product.price > 49) product.price = 50;

    product.sellIn = product.sellIn - 1;

    // if (product.sellIn < 0 && product.price < 50) {
    //   product.price = product.price + 1;
    // }
    const multiplier = product.sellIn < 0 ? 2 : 1;
    const price = product.price + 1 * multiplier;
    product.price = price < 50 ? price : 50;
  }
}
