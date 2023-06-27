import { defineStore } from "pinia"
import axios from 'axios'
import { INGRIDIENTS_URL, COCKTAILS_BY_INGR_URL } from "@/constants"

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: [],
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGRIDIENTS_URL)
      this.ingredients = data?.data?.drinks
    },
    async getCocktails(ingridient) {
      const data = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingridient}`)
      this.cocktails = data?.data?.drinks
    },
    setIngredient(val) {
      this.ingredient = val;
    }
  }
})