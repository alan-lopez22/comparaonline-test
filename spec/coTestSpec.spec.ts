import { expect } from 'chai';
import { CarInsurance } from '../src/carInsurance';
import { Product } from '../src/product';
import { expectedProducts } from './expected-products';

describe("Co Test", function () {
  var coTest = null;

  it("should check for coverage results", function () {

    coTest = new CarInsurance(
      [
        new Product('Medium Coverage', 10, 20),
        new Product('Full Coverage', 2, 0),
        new Product('Low Coverage', 5, 7),
        new Product('Mega Coverage', 0, 80),
        new Product('Mega Coverage', -1, 80),
        new Product('Special Full Coverage', 15, 20),
        new Product('Special Full Coverage', 10, 49),
        new Product('Special Full Coverage', 5, 49),
        new Product('Super Sale', 3, 6),
      ]
    );

    var products = coTest.products;
    for (let i = 0; i <= 30; i++) {

      if (i > 0)
        products = coTest.updatePrice();

      for (let x = 0; x < products.length; x++) {
        const element = products[x] as Product;
        const dayExpectedProducts = expectedProducts.filter(f => f.day === i);
        var prod = dayExpectedProducts[x];

        expect(element.name).equal(prod.name);
        expect(element.price).equal(prod.price);
        expect(element.sellIn).equal(prod.sellIn);
      }
    }

    expect(true).equal(true);
  });

  it ("should throw an exception for unregistered coverage", function(){
    coTest = new CarInsurance(
      [
        new Product('Test Coverage', 10, 20),
      ]
    );

    expect(function() {
      coTest.updatePrice();
    }).to.throw('Coverage type (Test Coverage) not found');
  });
});
