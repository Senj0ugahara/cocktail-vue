<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl='cocktail.strDrinkThumb'>
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              :breakpoints="swiperOptions.breakpoints"
              class="swiper"
            >
              <swiper-slide
                v-for="(ingredient, key) in ingredients"
                :key="key"
              >
                <img :src="`${INGREDIENT_PIC}${ingredient}-Small.png`">
                <div class="name">
                  {{ ingredient }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';
import { COCKTAIL_RANDOM, INGREDIENT_PIC } from '@/constants';
import AppLayout from '../components/AppLayout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = cocktail.value[`strIngredient${i}`]

    ingredients.push(ingredient)
  }

  return ingredients;
})

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_RANDOM}`);
  cocktail.value = data?.data?.drinks[0];
}

function goBack() {
  router.go(-1)
}

getCocktail();

const swiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,       
      spaceBetween: 50 
    }
  }
}

</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.slider
  padding: 50px 0

.swiper
  width: 590px

  @media (max-width: 479.98px) 
    width: 300px

.name
  padding-top: 20px
</style>