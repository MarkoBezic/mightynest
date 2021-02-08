<template>
  <div class="shipping-banner">
    <p class="text-white m-auto p-1">USPS is seeing delays; orders may be delayed</p>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .shipping-banner {
    transform: translateY(-60px);
    background-color: #89cf31;
    font-size: 11px;
  }

</style>