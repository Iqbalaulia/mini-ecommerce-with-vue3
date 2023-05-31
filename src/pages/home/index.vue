<!-- @format -->

<template>
	<div class="">
		<div class="">
			<SectionBanner />
		</div>
		<div class="container">
			<SectionKategori />
		</div>
		<div class="container">
			<SectionPromoLain />
		</div>
		<div class="container">
			<SectionProdukTerlaris/>
		</div>
		<div class="container">
			<SectionProduk />
		</div>
	</div>
</template>

<script setup>
import SectionBanner from "@/pages/home/elements/banner/Banner.vue";
import SectionKategori from "@/pages/home/elements/kategori/Kategori.vue";
import SectionPromoLain from "@/pages/home/elements/promoLainnya/PromoLain.vue";
import SectionProduk from "@/pages/home/elements/produk/Produk.vue";
import SectionProdukTerlaris from "@/pages/home/elements/produkTerlaris/ProdukTerlaris.vue";

</script>
