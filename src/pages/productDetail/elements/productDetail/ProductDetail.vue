<!-- @format -->

<template>
	<div class="product-detail">
		<div class="row">
			<div class="col-md-4">
				<div class="images">
					<img
						class="img-fluid"
						v-once
						:src="
							stateProductDetail &&
							stateProductDetail.dataDetail &&
							stateProductDetail.dataDetail.mediafile
						"
						:alt="stateProductDetail.dataDetail.name" />
				</div>
			</div>
			<div class="col-md-5">
				<div class="title">
					<h1>{{
						stateProductDetail.dataDetail && stateProductDetail.dataDetail.name
					}}</h1>
					<hr />
				</div>
				<div class="price">
					<label for="">
						{{
							formatCurrency(
								stateProductDetail.dataDetail &&
									stateProductDetail.dataDetail.price
							)
						}}
					</label>
				</div>
				<div class="description">
					<label for="Deskripsi Produk">Deskripsi Produk</label>
					<p>
						{{
							stateProductDetail.dataDetail &&
							stateProductDetail.dataDetail.description
						}}
					</p>
				</div>
				<div class="merchant">
					<hr />
					<div class="information">
						<img
							class="img-fluid"
							v-once
							src="../../../../assets/logo/logo-superindo.webp"
							alt="" />
						<div class="merchant-name">
							<label for="">
								<fa :icon="['fas', 'circle-check']" class="mr-1 icon-check" />
								{{
									stateProductDetail.dataDetail &&
									stateProductDetail.dataDetail.merchant
								}}
							</label>
							<div class="status-merchant">
								<div class="circle-green"></div>
								<label for="">Online</label>
							</div>
						</div>
					</div>
					<hr />
				</div>
			</div>
			<div class="col-md-3">
				<div class="transaction">
					<label for="">Atur Pembelian</label>
					<div class="input-selling">
						<button
							class="btn btn-sell"
							@click="funcMinus()"
							:class="qtyProduct === 1 ? `disabled` : ``">
							<fa :icon="['fas', 'minus']" class="mr-1" />
						</button>
						<input class="sell" type="text" v-model="qtyProduct" />
						<button
							class="btn btn-sell"
							@click="funcPlus()"
							:class="
								stateProductDetail.dataDetail.stock === 0 ? `disabled` : ``
							">
							<fa :icon="['fas', 'plus']" class="mr-1" />
						</button>
					</div>
					<div class="stock">
						<div class="data-stock">Stok Total :</div>
						<span>Sisa {{ stateProductDetail.dataDetail.stock }}</span>
					</div>
					<div class="subtotal">
						<div class="total"> Subtotal </div>
						<div class="rupiah">
							{{
								formatCurrency(
									stateProductDetail.dataDetail &&
										stateProductDetail.dataDetail.price * qtyProduct
								)
							}}
						</div>
					</div>
					<button
						@click="postDataCart(qtyProduct, $route.params.id)"
						class="btn btn-primary-superindo w-100 mb-3 mt-3">
						+ Tambah Keranjang
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import useHelper from "@/settings/helper";

export default defineComponent({
	computed: {
		...mapState({
			stateProductDetail: (state) => state.stateProductDetail.data,
			stateCart: (state) => state.stateCart.data,
		}),
	},
	methods: {
		async postDataCart(qty, product_uuid) {
			await this.postToCart({
				qty: qty,
				product_uuid: product_uuid,
			});
			await this.getListCart();
			
		},
	},
	async mounted() {
		await this.getDataDetailProduct({ uuid: this.product_uuid });
	},

	setup() {
		const route = useRoute();
		const { formatCurrency } = useHelper();
		const { postToCart, getListCart } = mapActions("stateCart", [
			"postToCart",
			"getListCart",
		]);
		const { getDataDetailProduct } = mapActions("stateProductDetail", [
			"getDataDetailProduct",
		]);

		const product_uuid = route.params.id;
		const qtyProduct = ref(1);

		const funcPlus = () => {
			qtyProduct.value += 1;
		};
		const funcMinus = () => {
			qtyProduct.value -= 1;
		};

		return {
			postToCart,
			getListCart,
			getDataDetailProduct,
			funcPlus,
			funcMinus,
			formatCurrency,
			qtyProduct,
			product_uuid,
		};
	},
});
</script>
