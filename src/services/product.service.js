import { base_url } from "../utils";

export const GetPopularProducts = async () => {
   const res = await fetch(base_url + '/popular-products');

   const data = await res.json()

   return data;
}

