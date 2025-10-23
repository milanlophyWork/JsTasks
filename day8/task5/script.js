function productFn(myProduct) {
    return "Product ".concat(myProduct.id, ": ").concat(myProduct.name, " costs $").concat(myProduct.price);
}
var pdt1 = {
    id: 101,
    name: 'Watch',
    price: 300
};
console.log(productFn(pdt1));
