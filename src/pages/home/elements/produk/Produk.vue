<!-- @format -->

<template>
	<div class="product-list">
		<h2>Produk</h2>
		<div class="data-product">
			<div class="row">
				<div class="col-md-3 col-custom-3" v-for="(productList, indexProduct) in stateHomepage.dataProduct" :key="indexProduct">
					<router-link :to="`#`" class="cart-product">
						<div class="images">
              <img class="img-fluid" :src="productList.mediafile" v-once :alt="productList.name">
            </div>
						<div class="product">
							<label for="">{{productList.name.length > 37 ? productList.name.slice(0,37) + '...' : productList.name}}</label>
              <div class="merchant">
                <fa :icon="['fas', 'city']" class="mr-1" />
                {{ productList.merchant }}
              </div>
              <div class="price">{{ productList.price }} </div>
						</div>
          
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
	computed: {
		...mapState({
			stateHomepage: (state) => state.stateHomepage.data,
		}),
	},
	methods: {
		...mapActions("stateHomepage", ["getDataProduct"]),
	},
	async mounted() {
		await this.getDataProduct();
	},

	setup() {
		return {};
	},
});
</script>
