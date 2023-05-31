<template>
  <div class="carts">
    <label for="" class="carts__name">Keranjang</label>
    <div class="row">
      <div class="col-md-8">
        <div class="carts__check__all">
            <div class="check">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
              <label for="vehicle1"> Pilih Semua</label>
            </div>
            <div class="delete_all">
              Hapus semua
            </div>
        </div>

        <div class="carts__shopping" v-for="(cart, indexCart) in stateCart.listCart" :key="indexCart">
          <div class="merchant">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <div class="images">
              <img src="@/assets/logo/logo-superindo.webp" class="img-fluid mr-2" alt="">
              <label for="">{{cart.product.merchant}}</label>
            </div>
          </div>
          <hr>
          <div class="products">
            <div class="data_product">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
              <div class="information_product">
                <img class="img-fluid" :src="cart.product.mediafile" alt="">
                <div class="name-price">
                  <label for="">{{ cart.product.name }}</label>
                  <div class="price">{{formatCurrency(cart.product.price)}}</div>
                </div>
              </div>
            </div>
            <div class="plus-qty">
              <div></div>
              <div class="qty-process">
                <button @click="deleteCart(cart.uuid)" class="btn-transparent-superindo text-white">
                  <fa :icon="['fas', 'trash']" class="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { defineComponent} from "vue";
// import { useRoute } from "vue-router";
import useHelper from "@/settings/helper";

export default defineComponent({
  computed: {
		...mapState({
			stateCart: (state) => state.stateCart.data,
		}),
	},

  async mounted(){
    await this.getListCart();
  },

  methods:{
    async deleteCart(payload){
      await this.deleteFromCart({uuid: payload});
      await this.getListCart();
    }
    
  },

  setup(){
    const { getListCart,deleteFromCart } = mapActions("stateCart", ['getListCart','deleteFromCart']);
		const { formatCurrency } = useHelper();

    return{
      getListCart,
      deleteFromCart,
      formatCurrency,
    }
  }
});

</script>