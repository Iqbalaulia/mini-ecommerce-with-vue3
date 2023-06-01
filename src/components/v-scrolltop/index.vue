<!-- @format -->

<template>
	<button v-show="showButton" @click="scrollToTop" class="scroll-top-button">
		<fa :icon="['fas', 'arrow-up']" />
	</button>
</template>

<script setup>
import { onMounted, ref } from "vue";

const showButton = ref(false);
const handleScroll = () => {
	showButton.value = window.pageYOffset > 100;
};

const scrollToTop = () => {
	const scrollStep = -window.scrollY / (500 / 15);
	const scrollInterval = setInterval(() => {
		if (window.scrollY !== 0) {
			window.scrollBy(0, scrollStep);
		} else {
			clearInterval(scrollInterval);
		}
	}, 15);
};
onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

</script>
