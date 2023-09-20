import axios from "axios";
import { api } from "../api";

class Pokemon {
  async getPokemon(id: number) {
    try {
      const { data } = await api.get(`/pokemon/${id}`);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response;
        return data;
      }
      return error;
    }
  }
}
export default new Pokemon();
