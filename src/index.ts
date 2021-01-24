import { CarInsurance } from "./carInsurance";
import { Product } from "./product";

const productsFirstDay = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsFirstDay);
const productPrinter = function (product: Product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

console.log('OMGHAI!');

for (let i = 0; i <= 30; i += 1) {
    console.log(`-------- day ${i} --------`);
    console.log('name, sellIn, price');

    try {
        if (i === 0) {
            productsFirstDay.forEach(productPrinter);
            console.log('');
            continue;
        }

        carInsurance.updatePrice().forEach(productPrinter);
    } catch (error) {
        console.log(error);
    }

    console.log('');
}