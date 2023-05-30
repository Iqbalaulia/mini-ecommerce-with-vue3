<!-- @format -->

<template>
	<div class="">
		<div class="">
			<SectionBanner/>
		</div>
		<div class="container">
			<SectionKategori />
		</div>
		<div class="container">
			<SectionPromoLain />
		</div>
	</div>
</template>

<script setup>
import SectionBanner from "@/pages/home/elements/banner/Banner.vue";
import SectionKategori from "@/pages/home/elements/kategori/Kategori.vue";
import SectionPromoLain from "@/pages/home/elements/promoLainnya/PromoLain.vue";
</script>
