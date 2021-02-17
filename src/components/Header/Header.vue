<template>
  <div class="header">
    <div class="shipping-banner d-md-flex flex-md-row">
      <p class="text-white text-center d-md-flex p-2 pl-2 my-auto  ">{{ msg }}</p>
      <p class="d-none d-md-flex text-white ml-auto p-2 px-3 my-auto ">Our Mission</p>
      <p class="d-none d-md-flex text-white p-2 px-md-4 my-auto ">Blog</p>
    </div>
    <div class="d-flex">
      <sidebar />
      <SearchIcon class="my-2" />
      <img class="my-2 mx-auto d-md-none" src="../../images/mnLogo_text.png" alt="MightyNest Logo">
      <img class="my-3 mx-auto d-none d-md-inline" src="../../images/logo.png" alt="MightNest Logo">
      <ShoppingCart class="cart ml-0"/>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar/Sidebar.vue'
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

  
  @media (min-width: 767px) {
    .shipping-banner {
      font-size: 14px;
    }
  }

</style>