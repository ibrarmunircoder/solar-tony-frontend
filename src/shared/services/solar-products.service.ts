import { apiClient } from "shared/utils";

class SolarProductsService {
  public async getSolarProducts() {
    const response = await apiClient.get("/products");
    return response.data;
  }
}

export const solarProductsService = new SolarProductsService();
