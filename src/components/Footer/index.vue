<template>
  <div class="footer text-white d-flex flex-column">
    <div class="footer-inner-container mx-md-auto pt-md-2 text-md-center">
      <div class="about-mightynest d-flex d-md-inline-flex flex-column px-5 pt-4 pr-md-0 text-md-left">
        <a href="#" class="py-2"><b>ABOUT</b> MIGHTYNEST</a>
        <a href="#">Our Story</a>
        <a href="#">How the MightFix Works</a>
        <a href="#">Our Products</a>
        <a href="#">MightyNest Reviews</a>
        <a href="#">Our Team</a>
        <a href="#" class="pt-4">MightyLivingBlog</a>
        <a href="#">Careers</a>
        <a href="#">Affiliate Prorgam</a>
        <p class="all-prices-usd my-4 py-3"><b class="border border-light p-2 rounded">$ ALL PRICES IN USD</b></p>
      </div>
      <div class="customer-care d-flex d-md-inline-flex flex-column px-5 pb-2 pr-md-0 text-md-left">
        <b class="py-2">CUSTOMER CARE</b>
        <a href="#">My Account</a>
        <a href="#">FAQs</a>
        <a href="#">MightyFix FAQs</a>
        <a href="#">Shipping & Returns</a>
        <a href="#">Contact Us</a>
        <a href="#">Reedem a MightyFix Gift</a>
        <a href="#">Terms and Conditions</a>
      </div>
      <div class="contact d-flex d-md-inline-flex flex-column px-5 py-4 pr-md-0 py-md-0 text-md-left">
        <b>CONTACT US</b>
        <p class="mb-0">847-905-0567</p>
        <p class="mb-0">Monday-Friday 9am to 5pm CT</p>
        <a href="mailto:customerservice@mightynest.com">customerservice@mightynest.com</a>
        <b class="py-2">ADDRESS</b>
        <p class="mb-0">8044 St. Louis Ave</p>
        <p class="mb-0">Skokie, IL 60076</p>
      </div>
      <div class="social d-md-inline-flex flex-md-column mt-3 text-md-left">
        <b class="px-5 ">FOLLOW US!</b>
        <div class="social-icons px-5 mt-4">
          <font-awesome-icon class="social-icon mx-4" :icon="['fab', 'facebook']"></font-awesome-icon>
          <font-awesome-icon class="social-icon mx-4" :icon="['fab', 'pinterest']"></font-awesome-icon>
          <font-awesome-icon class="social-icon mx-4 instagram" :icon="['fab', 'instagram-square']"></font-awesome-icon>
        </div>
      </div>
      <div class="badges text-center py-4 pb-5">
        <div class="p-3">
          <img class="braintree-badge px-2" src="../../images/braintree-badge-dark.png" alt="braintree badge">
          <img src="../../images/entrust_site_seal.png" alt="Entrust verified seal">
        </div>
        <small>Copyright &#169; 2021 MightyNest, Inc. All rights reserved</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
  background:  #05afc6;
  font-size: 14px;
  line-height: 23px;
  }
  .footer a {
    color: white;
  }
  .social-icon {
    transform: scale(3.4);
    opacity: .6;
  }  
  .instagram {
    transform: scale(3.8);
  }
  .braintree-badge {
    height: 44px;
  }

  @media(min-width: 767px) {
    .footer {
      font-size: 12px;
      line-height: 20px;
    }

    .footer-inner-container {

    }

    .all-prices-usd {
    font-size: 12px;
    }
  }
</style>