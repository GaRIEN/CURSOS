import { Product } from "../interface/product.interface";
import { Category } from "../interface/category.interface";

export interface CreateProductDto
  extends Omit<Product, "id" | "category"> {
  categoryId: Category ["id"];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}




