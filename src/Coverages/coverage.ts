import { Product } from "src/product";

export interface ICoverage {
    updatePrice(product: Product): void;
}

export interface ICoverageFactory {
    createCoverage(coverageType: string): ICoverage;
}
