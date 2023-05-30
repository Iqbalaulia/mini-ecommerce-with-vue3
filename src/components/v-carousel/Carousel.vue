<template>
  <Carousel>
    <slot/>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination } from 'vue3-carousel'
export default defineComponent({
  components: {
    Carousel,
    Pagination,
    Navigation,
  },
})
</script>