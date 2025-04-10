import { faker } from "@faker-js/faker";
import { Product } from "../interface/product.interface";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.tdos";
import { ProductService } from "../interface/product.service.interface";

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll(): Product[] | Promise<Product[]> {
    return this.products;
  }
  create(data: CreateProductDto): Product {
    const newProduct: Product = {
      ...data,
      id: faker.number.int(),
      images: [faker.image.url(), faker.image.url()],
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
        creationAt: faker.date.recent().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
      },
    };
    this.products.push(newProduct);
    return newProduct;
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: Product["id"], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product["id"]) {
    return this.products.find((item) => item.id === id);
  }
}
