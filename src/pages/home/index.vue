<template>
  <div class="information-banner container-fluid">
    <VCarousel :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="(itemsCarousel, index) in dataCarousel.data.items" :key="index">
        <img class="img-fluid images-carousel" :src="itemsCarousel.images_path" :alt="itemsCarousel.name">
      </Slide>
    </VCarousel>
  </div>
</template>

<script setup>
import { Slide } from 'vue3-carousel'
import VCarousel from '@/components/v-carousel/Carousel.vue'
import dataCarousel from './data/carousel.json'
</script>