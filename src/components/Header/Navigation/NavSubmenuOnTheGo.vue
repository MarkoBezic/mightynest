<template>
  <div>
     <ul class="on-the-go submenu-list justify-content-center pt-md-4">
      <div>
        <p class=" pt-2 mb-2 pt-md-1" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Lunch Gear</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Lunch Boxes</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Food Containers</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Bags & Wraps</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Bottles & Cups</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Utensils, Napkins & More</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Cloth Masks & Hand Sanitizers</a></li>

        <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Water Bottles</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Stainless Steel Water Bottles</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Glass Water Bottles</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Kids Water Bottles</a></li>
        <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Coffee Tumblers</a></p>
        <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Shopping</a></p>
      </div>

      <div class="column-2 "> 
        <p class=" pt-3 mb-2 pt-md-1" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Straws</a></p>
      </div>

      <div class="pl-md-3">
        <ul class="featured-items">
          <p class=" pt-3 mb-2 pt-md-1" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
          <li><a href="#" class="text-dark text-decoration-none small-font">Ditch Plastic Bottles</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Waste Free Lunch</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Sustainable Straws</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Reusable Lunch Baggies</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Waste Free Grocery</a></li>
        </ul>
      </div>

      <div class="d-none d-md-flex flex-column mx-md-auto pl-md-3 justify-self-md-start">
        <img class="mask-img mt-md-2" src="../../../images/Baggu-maskbagMadras18x13.jpg" alt="Woman wearing mask">
        <a href="#" class="caption mighty-blue text-center mt-md-2">Comfy & reusable double layered organic cotton masks</a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuOnTheGo'
}
</script>

<style scoped>
  @media (min-width: 767px) {
    .on-the-go {
      display: grid;
      grid-template-columns: 180px 180px 200px 200px;
      width: 1000px;
    } 
    li {
      border: none;
    }
    li a {
      font-size: 14px !important;
    }
    .featured-items > p > a {
      color: #555 !important;
    }
    .sub-heading {
      text-transform: uppercase !important;
      color:#555 !important;
    }
    .column-2 {
     border-right: 1px solid #ecebebb0;
   }
    .mask-img {
      height: 160px;
      width: auto;
    }
    .caption {
      font-size: 14px;
      line-height: 15px;
    }
  }
</style>