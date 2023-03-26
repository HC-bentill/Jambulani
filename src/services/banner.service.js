import { base_url } from "../utils";

export const GetBanners = async () => {
   const res = await fetch(base_url + '/banner');

   const data = await res.json()

   return data;
}
