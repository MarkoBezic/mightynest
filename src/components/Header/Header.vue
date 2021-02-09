<template>
  <div class="header">
    <div class="shipping-banner">
      <p class="text-white m-auto p-1 text-center">{{ msg }}</p>
    </div>
    <div class="d-flex">
      <sidebar />
      <SearchIcon class="my-2" />
      <img class="my-2 mx-auto" src="../../images/mnLogo_text.png" alt="MightyNest Logo">
      <ShoppingCart class="cart ml-0"/>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import SearchIcon from './SearchIcon'
import ShoppingCart from './ShoppingCart.vue'

export default {
  components: { 
    Sidebar,
    SearchIcon,
    ShoppingCart
    },
  name: 'Header',
  props: {
    msg: String
  }
}

</script>

<style scoped>
  .header {
    box-shadow: 0 -3px 10px;
  }

  .shipping-banner {
    background-color: #89cf31;
    font-size: 11px;
  }
  img {
    height: 40px;
  }
  .cart {
    margin-left: auto;
  }

</style>