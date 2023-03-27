import { apiAxios, base_url } from "../utils";

export const GetPopularProducts = async () => await apiAxios().get('/popular-products');
export const GetSingleProduct = async (slug) => await apiAxios().get(`/product-single/${slug}`);

