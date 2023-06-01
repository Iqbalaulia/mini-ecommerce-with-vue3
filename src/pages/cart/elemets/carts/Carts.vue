<!-- @format -->

<template>
	<div class="carts">
		<label for="" class="carts__name">Keranjang</label>
		<div class="row">
			<div class="col-md-8">
				<div class="carts__check__all">
					<div class="check">
						<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
						<label for="vehicle1"> Pilih Semua</label>
					</div>
					<div class="delete_all"> Hapus semua </div>
				</div>

				<div
					class="carts__shopping"
					v-for="(cart, indexCart) in stateCart.listCart"
					:key="indexCart">
					<div class="merchant">
						<input type="checkbox" id="vehicle1" name="vehicle1" value="" @change="funcCheckItem(cart)" />
						<div class="images">
							<img
								src="@/assets/logo/logo-superindo.webp"
								class="img-fluid mr-2"
								alt="" />
							<label for="">{{ cart.product.merchant }}</label>
						</div>
					</div>
					<hr />
					<div class="products">
						<div class="data_product">
							<input
								type="checkbox"
								id="vehicle1"
								name="vehicle1"
								@change="funcCheckItem(cart)" />
							<div class="information_product">
								<img class="img-fluid" :src="cart.product.mediafile" alt="" />
								<div class="name-price">
									<label for="">{{ cart.product.name }}</label>
									<div class="price">{{
										formatCurrency(cart.product.price)
									}}</div>
								</div>
							</div>
						</div>
						<div class="plus-qty">
							<div></div>
							<div class="qty-process">
								<button
									@click="deleteCart(cart.uuid)"
									class="btn-transparent-superindo text-white">
									<fa :icon="['fas', 'trash']" class="" />
								</button>

								<div class="input-qty">
									<button class="btn btn-sell" @click="minusItem(cart.qty, cart.uuid)" >
										<fa :icon="['fas', 'minus']" class="mr-1"  />
									</button>
									<input class="sell" type="text" v-model="cart.qty" />
									<button class="btn btn-sell" @click="plusItem(cart.qty, cart.product.uuid)">
										<fa :icon="['fas', 'plus']" class="mr-1" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="carts__shopping-conclusion">
					<label for="">Ringkasan belanja</label>
					<div class="sub-total">
						<div class="total-goods"> Total Harga ( {{ calculateTotalItems }} barang) </div>
						<div class="total-prices"> {{ formatCurrency(funcTransactionPrice(dataChecklistItem)) }} </div>
					</div>
					<hr />
					<div class="total-all">
						<div class="title-price"> Total Harga </div>
						<div class="number-price"> {{ formatCurrency(funcTransactionPrice(dataChecklistItem)) }}</div>
					</div>
          <button class="btn btn-primary-superindo w-100 mt-4">
            Beli ({{ calculateTotalItems }})
          </button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { defineComponent, ref } from "vue";
// import { useRoute } from "vue-router";
import useHelper from "@/settings/helper";

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
		async deleteCart(payload) {
			await this.deleteFromCart({ uuid: payload });
			await this.getListCart();
		},

    async plusItem(qty, product_uuid){
      let value = 0
      await this.postToCart({
        qty: value += 1,
        product_uuid: product_uuid
      })
      await this.getListCart();
    },

    async minusItem(qty, product_uuid){
      if(qty === 1) await this.deleteFromCart({uuid: product_uuid})
      if(qty > 1) await this.updateToCart({
        qty: qty -= 1,
        product_uuid: product_uuid
      })
      await this.getListCart();
    }
	},

	setup() {
		const { getListCart, deleteFromCart , updateToCart, postToCart} = mapActions("stateCart", [
			"getListCart",
			"deleteFromCart",
      'updateToCart',
      'postToCart'
		]);
		const { formatCurrency } = useHelper();
    const dataChecklistItem = ref([]);
    const calculateTotalItems = ref(0);

    const funcCheckItem = (item) => {
      dataChecklistItem.value.push(item);
    };

    const funcTransactionPrice = (items) =>{
      funcTransactionItem(items)
      return items.reduce((acc, product) => {
        return acc + (product.qty * product.product.price)
      },0);
    }

    const funcTransactionItem = (product) =>{
      calculateTotalItems.value = product.reduce((acc, items) => {
        return acc + items.qty
      },0);
    }

		return {
			getListCart,
			deleteFromCart,
      updateToCart,
      postToCart,
      funcCheckItem,
      funcTransactionPrice,
      funcTransactionItem,
      calculateTotalItems,
      dataChecklistItem,
			formatCurrency,
		};
	},
});
</script>
