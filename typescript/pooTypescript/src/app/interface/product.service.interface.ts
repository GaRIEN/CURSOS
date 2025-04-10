import { CreateProductDto, UpdateProductDto } from "../dtos/product.tdos";
import { Product } from "./product.interface";

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  update(
    id: Product["id"],
    changes: UpdateProductDto
  ): Product | Promise<Product>;
  create(data: CreateProductDto): Product | Promise<Product>;
  findOne(
    id: Product["id"]
  ): Product | undefined | Promise<Product | undefined>;
}
