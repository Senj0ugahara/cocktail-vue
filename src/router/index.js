import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'

const routes = [
  {
    path: ROUTES_PATHS.HOME,
    name: ROUTES_PATHS.HOME,
    component: Home
  },
  {
    path: ROUTES_PATHS.COCKTAILS,
    name: ROUTES_PATHS.COCKTAILS,
    component: Cocktail
  },
  {
    path: ROUTES_PATHS.COCKTAIL_RANDOM,
    name: ROUTES_PATHS.COCKTAIL_RANDOM,
    component: CocktailRandom
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router