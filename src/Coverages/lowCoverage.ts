import { Product } from "src/product";
import { ICoverage } from "./coverage";

export class LowCoverage implements ICoverage {
    updatePrice(product: Product): void {
        if (product.price > 0) {
            product.price = product.price - 1;
        }
        
        product.sellIn = product.sellIn - 1;
        if (product.sellIn < 0 && product.price > 0) {
            product.price = product.price - 1;
        }
    }
}
