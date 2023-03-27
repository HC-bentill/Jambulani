import axios from "axios";

export const base_url = "https://camiestas-futbol.effectstudios.co/api/v1";

export const apiAxios = () =>
  axios.create({
    baseURL: base_url,
  });

export const truncateText = (strn, len) => {
  if (strn?.length > len) {
    strn = strn.substring(0, len) + "...";
    return strn;
  } else {
    return strn;
  }
};
