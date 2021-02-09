
<template>
  <div>
    <button class="cart mt-2 mr-1" v-b-toggle.sidebar-right><img class="m-2" src="https://d24zxkcptsuti0.cloudfront.net/assets/nav/cartGray_thin-8fe991da39ceeb0ad62fb61399527f5414bb7b46f6b544b57536e9c934e6cce8.png" alt="shopping cart icon"/></button>
    <b-sidebar id="sidebar-right" title="Shopping Cart" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="/src/images/Baggu-maskbagMadras18x13.jpg" fluid thumbnail></b-img>
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