import { apiAxios } from "../utils";

export const GetProductCategory = async () => await apiAxios().get('/product-category');

