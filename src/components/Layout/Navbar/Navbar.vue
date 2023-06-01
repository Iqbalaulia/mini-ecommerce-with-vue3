<!-- @format -->

<template>
	<div class="nav-sticky">
		<div class="navbar-social-media navbar navbar-light">
			<div class="navbar-brand">
				<a href="" class="navbar-brand__instagram">
					<fa :icon="['fab', 'instagram']" />
				</a>
				<a href="" class="navbar-brand__youtube">
					<fa :icon="['fab', 'youtube']" />
				</a>
				<a href="" class="navbar-brand__facebook">
					<fa :icon="['fab', 'facebook']" />
				</a>
				<a href="" class="navbar-brand__twitter">
					<fa :icon="['fab', 'twitter']" />
				</a>
				<div class="devider"></div>
				<a
					class="download-apps"
					href="https://play.google.com/store/apps/details?id=id.co.superindo.mysuperindo&hl=en_US&pli=1"
					for="">
					<fa :icon="['fas', 'mobile-screen-button']" class="mr-1" /> Download
					My Superindo</a
				>
			</div>

			<div class="form-inline about-us">
				<a
					href="https://www.superindo.co.id/membership/"
					target="_blank"
					class="">
					<fa :icon="['fas', 'user-check']" class="mr-1" />
					Membership
				</a>
				<div class="devider"></div>
				<div class="history">
					<a href="">
						<fa :icon="['fas', 'building']" class="mr-1" />
						Sejarah
					</a>
				</div>
			</div>
		</div>
		<nav class="navbar-custom navbar navbar-expand-lg navbar-light">
			<div class="container">
				<router-link :to="`/`" class="navbar-brand">
					<img
						src="@/assets/logo/logo-superindo.webp"
						width="40"
						height="40"
						alt="" />
					Superindo
				</router-link>

				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto mt-2 mt-lg-0 w-75">
						<li class="nav-item">
							<button
								@click="funcOpenFilter"
								class="btn-category mr-2"
								type="button"
								aria-label="Toggle navigation">
								<fa :icon="['fas', 'list']" class="mr-1" />
							</button>
						</li>
						<li class="nav-item mr-2 w-100">
							<input
								@input="searchProduct"
								class="form-control w-100"
								type="search"
								v-model="searchData"
								placeholder="Pencarian produk"
								aria-label="Search" />
						</li>
						<li class="nav-item">
							<router-link
								:to="`/carts`"
								class="btn-category"
								type="button"
								aria-label="Toggle navigation">
								<fa :icon="['fas', 'cart-shopping']" class="mr-1" />
								<span class="cart-list">
									{{ stateCart.listCart.length }}
								</span>
							</router-link>
						</li>
					</ul>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<button
								class="btn-transparent-superindo login"
								type="button"
								aria-label="Toggle navigation">
								Daftar | Login
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<div :class="!openFilter ? `d-none` : ``" class="bg-white nav-filter-data">
			<label for="">Pencarian harga</label>
			<input
				@input="validateInput"
				class="form-control w-100 border"
				type="search"
				v-model="searchPrice"
				placeholder="harga"
				aria-label="Search" />
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { defineComponent, ref } from "vue";

export default defineComponent({
	computed: {
		...mapState({
			stateCart: (state) => state.stateCart.data,
		}),
	},

	async mounted() {
		await this.getListCart();
	},

	methods: {
		searchProduct() {
			this.getDataProduct({
				page: 1,
				sort: "name",
				q: this.searchData,
			});
			this.getDataSellingProduct({
				page: 1,
				sort: "name",
				q: this.searchData,
				is_random: true,
			});
		},
		validateInput(){
			const regex = /^[0-9]+$/;
			regex.test(this.searchPrice);
			this.getDataProduct({
				page: 1,
				sort: "-price",
				q: this.searchPrice,
			});
			this.getDataSellingProduct({
				page: 1,
				sort: "-price",
				q: this.searchPrice,
				is_random: true,
			});
		}
	},

	setup() {
		const { getListCart } = mapActions("stateCart", ["getListCart"]);
		const { getDataSellingProduct, getDataProduct } = mapActions(
			"stateHomepage",
			["getDataSellingProduct", "getDataProduct"]
		);
		const openFilter = ref(false);
		const searchData = ref("");
		const searchPrice = ref(0);

		const funcOpenFilter = () => {
			openFilter.value = !openFilter.value;
		};

		return {
			getListCart,
			getDataProduct,
			getDataSellingProduct,
			funcOpenFilter,
			openFilter,
			searchData,
			searchPrice,
		};
	},
});
</script>
