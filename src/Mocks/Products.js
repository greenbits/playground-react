import faker from 'faker';

function buildProduct() {
  return {
    id:               faker.random.uuid(),
    name:             faker.commerce.productName(),
    price:            faker.commerce.price(),
    expirationDate:   faker.date.future(),
    quantity:         faker.random.number(),
    tags:             [ faker.commerce.productAdjective() ]
  };
}

function buildProducts(numberOfProducts) {
  const products = []

  for (let i = 0; i < numberOfProducts; i++) {
    products.push(buildProduct());
  }

  return products;
}

export {
  buildProduct,
  buildProducts
}
