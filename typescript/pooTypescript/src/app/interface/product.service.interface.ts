import { CreateProductDto, UpdateProductDto } from "../dtos/product.tdos";
import { httpResponseError } from "./interface";
import { Product } from "./product.interface";

export interface ProductService {
  getAll(): Product[] | Promise<Product[] | httpResponseError>;
  update(
    id: Product["id"],
    changes: UpdateProductDto
  ): Product | Promise<Product | httpResponseError>;
  create(
    data: CreateProductDto
  ): Product | Promise<Product | httpResponseError>;
  findOne(
    id: Product["id"]
  ): Product | undefined | Promise<Product | undefined | httpResponseError>;
}
