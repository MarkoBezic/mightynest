<template>
  <div class="banner">
    <img class="background-img" src="../../images/home-hero-products@2x.jpg" alt="home hero products"/>
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
  .banner {
    height:40vh;
    min-height: 250px;
    max-height: 300px;
    overflow: hidden;
    position: relative;
  }

  .background-img {
    z-index: -1;
    height: 40vh;
    min-height: 250px;
    max-height: 300px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);

  }
  .discover {
    height: 40%;
    position: absolute; 
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
  }
  .tagline {
    color: #555;
    width: 240px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .join-now-btn {
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 500px) {
    .banner {
      min-height: 350px;
      max-height: 380px;
    }
    .background-img {
      min-height: 350px;
      max-height: 350px;
    }
    .discover {
      height: 50%;
    }
    .tagline {
      top: 58%;
    }
  }

  @media (min-width: 767px) {
    .banner {
      min-height: 440px;
      max-height: 440px;
    }
    .background-img {
      min-height: 460px;
      max-height: 460px;
    }
    .tagline {
      width: 390px ;
      font-size: 26px;
      line-height: 30px;
    }
  }

  @media (min-width: 992px) {
    .banner {
      min-height: 500px;
      max-height: 500px;
    }
    .background-img {
      min-height: 560px;
      max-height: 570px;
    }
  }
  @media (min-width: 1200px) {
   .banner {
      min-height: 520px;
      max-height: 520px;
      width: auto;
      height: auto;
    }
    .background-img {
      min-height: 580px;
      max-height: 700px;
      width: auto;
      height: auto;
    }
    .discover {
      max-height: 220px;
      top: 15%;
    }
    .tagline {
      width: 430px;
      font-size: 30px;
    }
    .join-now-btn {
      top: 78%;
    }
  }
</style>