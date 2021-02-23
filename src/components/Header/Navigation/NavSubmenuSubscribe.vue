<template>
  <div class="menu-container">
    <div class="menu-container-content container-fluid">
      <p class="title top-row text-dark font-weight-bolder mb-2 pt-1 px-md-3">Choose a monthly membership</p>
      <div class="column-1 px-md-3">
        <h6 class="mighty-blue pr-md-4" >Join the MightyFix</h6>
        <p class="mb-2">Surprise me! Get one hand-picked healthy, green product each month that we think you'll love.</p>
        <green-button class="btn-small mb-1" txt="Get Started"><a href="#"></a></green-button>
        <a href="#" class="mighty-blue text-decoration-none p-3 p-md-2 d-md-inline-flex" id="gift-it">or Gift it</a>
      </div>

      <div class="column-2 px-md-3">
        <h6 class="mighty-blue mt-4 mt-md-0">Join Mighty Essentials</h6>
        <p class="mb-2 pr-md-1">Stay Supplied! Created your own monthly shipment from our favorite healthy-living essentials</p>
        <green-button class="btn-small mb-2" txt="Get Started"><a href="#"></a></green-button>
        <hr class="mt-4 d-md-none">
      </div>
      
      <div class="column-3 px-md-5">
        <p class="title my-2 my-md-0 mx-1">MightyNest Memmber Benefits:</p>
        <ul class="benefits-list mb-2">
          <li class="benefits px-1 my-md-3"><font-awesome-icon class="check-circle mighty-blue mr-2 mr-md-3" icon="check-circle"></font-awesome-icon> Exclusive Member Prices</li>
          <li class="benefits px-1 my-md-3"><font-awesome-icon class="check-circle mighty-blue mr-2 mr-md-3" icon="check-circle"></font-awesome-icon> Free Shipping*</li>
          <li class="benefits px-1 my-md-3"><font-awesome-icon class="check-circle mighty-blue mr-2 mr-md-3" icon="check-circle"></font-awesome-icon> Expert Guidance</li>
        </ul>
        <a href="#" class="mighty-blue text-decoration-none mr-md-5" id="learn-more">Learn more</a>
        <p class="mb-1 d-md-inline-flex" id="already-a-member">Already a member? <a href="#" class="mighty-blue px-md-1" id="log-in">Log in</a></p>
      </div>
    </div>
    <h6 class="bottom-row text-center redeem-here text-white mt-md-4">Receive a MightyFix gift card? Redeem it here</h6>
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

  @media (min-width: 767px) {
    .menu-container {
      background: #efefef;
      margin-left: -14px;
      margin-right: -15px;
    }

    .menu-container-content {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      max-width: 1000px;
    }

    .top-row {
      grid-column: 1/4;
      grid-area: 'top';
      padding: 10px;
    }
    .title {
      font-weight: 400 !important;
      font-size: 20px;
    }

    #gift-it {
      width: 90px;
    }

    .benefits {
      font-size: 15px;
    }

    #already-a-member {
      font-size: 12px;
    }

    .check-circle {
      transform: scale(2.1);
    }

    .column-3 {
      border-left: 1px solid #05afc6;
    }

    .bottom-row {
      grid-column: 1/4;
    }

    .redeem-here {
      padding: 15px;
    }
  }
</style>