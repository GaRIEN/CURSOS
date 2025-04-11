import { CreateProductDto, UpdateProductDto } from "../dtos/product.tdos";
import { httpResponseError } from "../interface/interface";
import { Product } from "../interface/product.interface";
import { ProductService } from "../interface/product.service.interface";
import { helpHttp } from "./http.service";

const API_URL = "https://api.escuelajs.co/api/v1/products";
const api = helpHttp();

export class ProducHttppService implements ProductService {
  async getAll(): Promise<Product[]> {
    const data = await api.get(`${API_URL}`);
    return data as Product[];
  }

  async update(
    id: Product["id"],
    changes: UpdateProductDto
  ): Promise<Product | httpResponseError> {
    try {
      const response = await api.put(`${API_URL}/${id}`, {
        body: changes,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if ("err" in response || response.err === true) {
        console.error("Error:", response.statusText || "Ocurrió un error");
        console.log("err", response.status);
        return response as httpResponseError;
      }

      return response as Product;
    } catch (error: any) {
      console.error("Error inesperado:", error);
      return {
        err: true,
        status: error?.status || 500,
        statusText: error?.statusText || error?.message || "Error inesperado",
      };
    }
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
