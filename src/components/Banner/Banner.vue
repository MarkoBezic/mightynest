<template>
  <div class="banner">
    <img class="background" src="../../images/home-hero-products@2x.jpg" alt="home hero products"/>
    <img class="discover" src="../../images/discover-d3b91d6a26f47dc0e4a783485e952f4535d84f534dd129f588a5f6d1dd5f23de.png" alt="Discover">
    <p class="tagline text-center">the delightfully simple way to a greener, healthier life.</p>
    <green-button class="join-now-btn" txt="JOIN NOW"></green-button>
  </div>
</template>

<script>
import GreenButton from './GreenButton.vue'
export default {
  components: {
    GreenButton
  },
  name: 'Banner'
}
</script>

<style scoped>
  .background {
    z-index: -1;
    max-width: 226%;
    position: absolute;
    left: 50%;
    transform: translateX(-51%);
  }
  .discover {
    max-height: 14%;
    position: absolute;
    left: 50%;
    transform: translate(-51%, 32%);
  }
  .tagline {
    font-size: 17px;
    line-height: 18px;
    color: #666;
    width: 230px;
    position: absolute;
    left: 50%;
    transform: translate(-48%, 300%);
  }
  .join-now-btn {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 360%);
  }
  

  @media(min-width: 500px) {
    .background {
    max-height: 65%;
    position: absolute;
    left: 50%;
    transform: translateX(-51%);
    }
  }
  @media(min-width: 767px) {
    .background {
    max-height: 72%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    }
  }
</style>