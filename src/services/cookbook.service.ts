import axios from "axios";
import { testData } from "../constants/local";

const BASE_URL = "https://notion-db.netlify.app/.netlify/functions/cookbook";

const isLocalHost =
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1" ||
  location.hostname === "";

export class CookbookService {
  async getCookbook() {
    if (isLocalHost)
      return {
        status: 200,
        data: testData,
      };
    return axios.get(BASE_URL);
  }
}
