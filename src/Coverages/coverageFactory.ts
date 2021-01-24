import { ICoverageFactory, ICoverage } from "./coverage";
import { FullCoverage } from "./fullCoverage";
import { LowCoverage } from "./lowCoverage";
import { MediumCoverage } from "./mediumCoverage";
import { MegaCoverage } from "./megaCoverage";
import { SpecialFullCoverage } from "./specialFullCoverage";
import { SuperSaleCoverage } from "./superSaleCoverage";

export class CoverageFactory implements ICoverageFactory {
  createCoverage(coverageType: string): ICoverage {
    switch (coverageType) {
      case "Mega Coverage":
        return new MegaCoverage();

      case "Super Sale":
        return new SuperSaleCoverage();

      case "Special Full Coverage":
        return new SpecialFullCoverage();

      case "Full Coverage":
        return new FullCoverage();

      case "Medium Coverage":
        return new MediumCoverage();

      case "Low Coverage":
        return new LowCoverage();

      default:
        throw new Error(`Coverage type (${coverageType}) not found`);
    }
  }
}
