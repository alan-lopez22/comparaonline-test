import { MegaCoverage } from "./megaCoverage";
import { SuperSaleCoverage } from "./superSaleCoverage";
import { SpecialFullCoverage } from "./specialFullCoverage";
import { FullCoverage } from "./fullCoverage";

class CoverageFactory {
  create(coverageType) {
    switch (coverageType) {
      case "Mega Coverage":
        return new MegaCoverage();

      case "Super Sale":
        return new SuperSaleCoverage();

      case "Special Full Coverage":
        return new SpecialFullCoverage();

      case "Full Coverage":
        return new FullCoverage();

      default:
        throw "Coverage type (" + coverageType + ") not found";
    }
  }
}

export default CoverageFactory;
