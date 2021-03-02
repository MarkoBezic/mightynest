
<template>
  <div>
    <button class="cart mt-2 mr-1" @click="toggleSlide"><img class="cart m-2" src="https://d24zxkcptsuti0.cloudfront.net/assets/nav/cartGray_thin-8fe991da39ceeb0ad62fb61399527f5414bb7b46f6b544b57536e9c934e6cce8.png" alt="shopping cart icon"/></button>
    <a href="#" @click="toggleSlide" :class="[isOpen ? 'overlay' : 'overlay-closed']"></a>
    <div class="sidebar-right" :class="[!isOpen ? 'closedSidebar' : 'openSidebar']">
      <div class="cart-header p-3 m-1 d-flex justify-content-between">
        <h5 class="text-white">Shopping Cart</h5>
        <button class="checkout-btn px-2 py-1">Checkout</button>
      </div>
      <div class="cart-empty d-flex flex-column text-center m-5 p-1 py-4">
        <img class="cart-empty-img m-2 m-auto" src="https://d24zxkcptsuti0.cloudfront.net/assets/nav/cartEmpty-c0c2d41e56b560fc248d1d75edc75971afdc7746dc345d60fb1a24c0b88cbbc0.png" alt="shopping cart icon"/>
        <p class="my-2">Oh no! Your cart is empty...</p>
        <div class="blue-line align-self-center mb-2"></div>
        <small>Simply subscribe to $9+ in <a href="#">eligible products</a> to receive free shipping* and Member Only Prices.</small>
        <a class="link-learn-more m-2"><font-awesome-icon class="plus-circle mx-2" :icon="['fas', 'plus-circle']"></font-awesome-icon>Learn more</a>
      </div>
      <div class="subtotal d-flex">
        <p class="subtotal-txt ml-auto mr-5 pt-3 pb-1">0 Items Subtotal: $0:00</p>
      </div>
      <div class="d-inline-flex flex-column">
        <button class="cart-btn-view px-5 mx-3 mb-2">VIEW CART</button>
        <button class="cart-btn-checkout px-5 mx-3 my-2 text-white">CHECKOUT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleSlide() {
      this.isOpen = !this.isOpen
    }
  }
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

  .closedSidebar{
    transform: translateX(20%);
    transition: .3s ease-out;
  }
  .openSidebar {
    transform: translateX(-85%);
    transition: .3s ease-out;
  }
  
  .sidebar-right {
    background: white;
    z-index: 3;
    position: fixed;
    top: 93px;
    height: 100%;
    width: 390px;
    box-shadow: 3px 10px 15px 0px; 
  }

  .cart-header {
    background-color: #05afc6 ;
  }

  .checkout-btn {
    font-size: 12px;
    background: white;
    border: 1px solid lightgray;
  }

  .checkout-btn:hover, .cart-btn-view:hover {
    background: #e4e4e4;
    color:#05afc6;
  }

  .checkout-btn:active, .cart-btn-view:active {
    background: linear-gradient(#c5c5c5 , #d3d3d3 15%, #d3d3d3 89%, #c5c5c5 95%);
  }

  .cart-empty {
    background: #e9f8f9;
  }

  .cart-empty-img {
    height: 50px;
  }

  .blue-line {
    border: 1px solid #05afc6;
    width: 60px;
  }

  .plus-circle {
    transform: scale(1.3);
  }

  a {
    color: #05afc6;
  }

  a:hover {
    color:#0398ac;
  }

  .overlay {
    width: 1000vh;
    height: 1000vh;
    background: white;
    opacity: .7;
    position: absolute;
    transform: translate(-2400px, -52px);
    z-index: 3;
  }

  .overlay-closed {
    display: none;
  }

  .subtotal-txt {
    color: #777;
    border-top: 1px solid #e5e5e5;
  }

  .cart-btn-view {
    border: 1px solid #e5e5e5;
    background: white;
    color: #666;
  }

  .cart-btn-checkout {
    border: 1px solid #0398ac;
    background: #05afc6;
  }

  .cart-btn-checkout:hover {
    background: #01899b;
  }

  .cart-btn-checkout:active {
    background: #006f7e;
  }

  .cart-btn-view, .cart-btn-checkout {
    height: 50px;
  }

@media (min-width: 767px) {
  .sidebar-right {
    top: 0;
  }
}
</style>