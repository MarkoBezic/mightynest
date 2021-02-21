<template>
  <div>
    <p class="text-dark font-weight-bolder mb-2 pt-1">Choose a monthly membership</p>
    <h6 class="mighty-blue">Join the MightyFix</h6>
    <p class="mb-2">Surprise me! Get one hand-picked healthy, green product each month that we think you'll love.</p>
    <green-button class="btn-small mb-1" txt="Get Started"><a href="#"></a></green-button>
    <a href="#" class="mighty-blue text-decoration-none p-3" id="gift-it">or Gift it</a>
    <h6 class="mighty-blue mt-4">Join Mighty Essentials</h6>
    <p class="mb-2">Stay Supplied! Created your own monthly shipment from our favorite healthy-living essentials</p>
    <green-button class="btn-small mb-2" txt="Get Started"><a href="#"></a></green-button>
    <hr class="mt-4">
    <p class="my-2 mx-1">MightyNest Memmber Benefits:</p>
    <ul class="benefits-list mb-2">
      <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Exclusive Member Prices</li>
      <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Fre Shipping*</li>
      <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Expert Guidance</li>
    </ul>
    <a href="#" class="mighty-blue text-decoration-none" id="learn-more">Learn more</a>
    <p class="mb-1">Already a member? <a href="#" class="mighty-blue" id="log-in">Log in</a></p>
    <h6 class="text-center redeem-here text-white">Receive a MightyFix gift card? Redeem it here</h6>
  </div>
</template>

<script>
import GreenButton from '../../Banner/GreenButton'


export default {
  name: 'NavSubmenuSubscribe',
  components: {
    GreenButton,
  }
}
</script>

<style scoped>
  .btn-small {
    font-size: 14px;
    font-weight: 400;
    padding: 5px 10px;
  }

  p, li {
    font-size: 14px;
  }

  #gift-it {
    font-size: 14px;
  }
  hr {
    background-color: #05afc6;
  }

  ul {
    list-style: none;
  }

  .check-circle {
    transform: scale(1.4);
  }

  li {
    border-bottom: 1px solid rgba(236, 235, 235, 0.692);
    padding: 2px;
  }
  
  #learn-more, #log-in {
    font-size: 12px;
  }
  #log-in {
    text-decoration: underline;
  }
  .redeem-here {
    background: #05afc6;
    padding: 8px 15px;
    margin: 0 -12px;
  }
  h6 {
    font-size: 18px;
  }
</style>