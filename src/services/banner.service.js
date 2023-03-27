import { apiAxios } from "../utils";

export const GetBanners = async () => await apiAxios().get('/banner');
