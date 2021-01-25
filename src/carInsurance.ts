import { CoverageFactory } from "./Coverages/coverageFactory";
import { Product } from "./product";

export class CarInsurance {
  products: Product[];

  constructor(products: Product[] = []) {
    this.products = products;
  }

  productPrinter = (product: Product) => {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };

  updatePrice() {
    const coverageFactory = new CoverageFactory();

    for (let i = 0; i < this.products.length; i++) {
      try {
        const product = this.products[i];

        const coverage = coverageFactory.createCoverage(product.name);
        coverage.updatePrice(product);
      } catch (error) {
        throw error;
      }
    }

    return this.products;
  }
}
