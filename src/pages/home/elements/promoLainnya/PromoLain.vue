<!-- @format -->

<template>
	<div class="another-promo">
		<h2>Promo Lainnya</h2>
		<VCarousel v-bind="settings" :breakpoints="breakpoints">
			<Slide
				v-for="(itemsCarousel, index) in dataPromo.data.items"
				:key="index">
				<img
					class="img-fluid images-carousel"
					:src="itemsCarousel.image_path"
					:alt="itemsCarousel.name" />
			</Slide>
		</VCarousel>
	</div>
</template>
<script setup>
import { Slide } from "vue3-carousel";
import VCarousel from "@/components/v-carousel/Carousel.vue";
import dataPromo from "./promo.json";
import { ref } from "vue";

const settings = ref({
	itemsToShow:1,
	snapAlign: "center",
});
const breakpoints = ref({
	700: {
		itemsToShow: 3,
		snapAlign: "center",
	},
	// 1024 and up
	1024: {
		itemsToShow: 3,
		snapAlign: "start",
	},
});
</script>
