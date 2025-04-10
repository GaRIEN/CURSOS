import { CreateProductDto, UpdateProductDto } from "../dtos/product.tdos";
import { Product } from "../interface/product.interface";
import { ProductService } from "../interface/product.service.interface";
import { helpHttp } from "./http.service";

const API_URL = "https://api.escuelajs.co/api/v1/products";
const api = helpHttp();

export class ProducHttppService implements ProductService {
  async getAll(): Promise<Product[]> {
    const data = await api.get(`${API_URL}`);
    return data;
  }

  async update(id: Product["id"], changes: UpdateProductDto): Promise<Product> {
    const updatedata = await api.put(`${API_URL}/${id}`, {
      body: changes,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return updatedata;
  }

  async create(data: CreateProductDto): Promise<Product> {
    const createdata = await api.post(`${API_URL}`, {
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return createdata;
  }

  async findOne(id: Product["id"]): Promise<Product> {
    const findproduct = await api.get(`${API_URL}/${id}`);
    return findproduct;
  }
}
