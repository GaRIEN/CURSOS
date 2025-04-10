import faker from '@faker-js/faker';
export const products = [];
export const addProduct = (data) => {
    const newProduct = Object.assign(Object.assign({}, data), { id: faker.datatype.uuid(), createdAt: faker.date.recent(), updatedAt: faker.date.recent(), category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        } });
    products.push(newProduct);
    return newProduct;
};
export const updateProduct = (id, changes) => {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index] = Object.assign(Object.assign({}, prevData), changes);
    return products[index];
};
export const findProducts = (dto) => {
    // code
    // dto.color = 'blue';
    // dto.isNew = true;
    // dto.tags = [];
    // dto.tags?.pop();
    // dto.tags?.push();
    return products;
};
