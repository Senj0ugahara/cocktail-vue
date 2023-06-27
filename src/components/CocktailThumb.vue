<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div 
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
        class="pic">
      </div>
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cocktail: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
  width: calc((100% - 76px) / 3)
  margin-right: 38px
  margin-bottom: 20px

  &:nth-child(3n + 3)
    margin-right: 0

  @media (max-width: 479.98px)
    width: calc((100% - 30px) / 3)
    margin-right: 15px

.pic
  width: 120px
  height: 120px
  margin: 0 auto
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: 100%

  @media (max-width: 479.98px)
    width: 100px
    height: 100px

.name
  width: 100%
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  padding-top: 15px
  letter-spacing: 0.1em
</style>