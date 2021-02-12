
<template>
  <div>
    <button class="cart mt-2 mr-1" v-b-toggle.sidebar-right><img class="m-2" src="https://d24zxkcptsuti0.cloudfront.net/assets/nav/cartGray_thin-8fe991da39ceeb0ad62fb61399527f5414bb7b46f6b544b57536e9c934e6cce8.png" alt="shopping cart icon"/></button>
    <b-sidebar id="sidebar-right" title="Shopping Cart" right shadow>
      <div class="px-3 py-2">
        SHOPPING CART GOES HERE
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
}
</script>

<style scoped>
  img {
    height: 25px;
    
  }
  .cart {
    border: none;
    background: none;
  }
</style>