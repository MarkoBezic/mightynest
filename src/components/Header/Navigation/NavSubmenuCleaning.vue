<template>
  <div>
    <ul class="submenu-list d-md-flex justify-content-md-between container-fluid p-0 py-md-4">
      <div>
        <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Green Cleaning</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Household</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Laundry</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Air Purification</a></li>
        <li><a href="#" class="text-dark text-decoration-none">DIY Cleaning Supplies</a></li>
      </div>
      <div>
        <ul class="featured-items">
          <p class="pt-3 mb-2 pt-md-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
          <li><a href="#" class="text-dark text-decoration-none small-font">Healthy Laundry</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Non-Toxic</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Simple Home Cleaning</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Replace Paper Towels</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">A Better Sponge</a></li>
        </ul>
      </div>
      <div class="d-none d-md-flex flex-column">
        <img class="towels-img mt-md-2" src="../../../images/open-uri20190208-4-3exyqe.jpg" alt="Rolled up towels in a bowl">
        <a href="#" class="mighty-blue text-center mt-md-1">Replace paper towels</a>
    </div>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuCleaning'
}
</script>

<style scoped>
  .submenu-list {
    max-width: 700px;
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
    }
     .towels-img {
      height: 150px;
      width: auto;
    }
</style>