//Task5: 
type Product = { // creating custom type Product
    id: number,
    name: string,
    price: number
}

function productFn(myProduct:Product):string{
    return `Product ${myProduct.id}: ${myProduct.name} costs $${myProduct.price}`
}

const pdt1:Product= { // creating product 1 of type Product
    id: 101,
    name: 'Watch',
    price: 300
}
console.log(productFn(pdt1))