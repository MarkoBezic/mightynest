<template>
  <div class="py-md-4">
    <ul class="submenu-list d-md-flex container-fluid p-0 justify-content-md-center">
      <div class="column-1 px-md-4">
        <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Wellness</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Vitamins & Supplements</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Essential Oils</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Natural Remedies</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Bug Repellent</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Cloth Masks</a></li>
      </div>
      <div>
        <ul class="featured-items px-md-4">
          <p class=" pt-3 mb-2 pt-md-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
          <li><a href="#" class="text-dark text-decoration-none small-font">Natural Remedies</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Women's Vitamins</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Men's Vitamins</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Kid's Vitamins</a></li>
        </ul>
      </div> 
      <div class="d-none d-md-flex flex-column pl-md-3 justify-self-md-start px-md-4">
        <img class="vitamins-img mt-md-2" src="../../../images/open-uri20190208-4-1y0k6mk.jpg" alt="Vitamin bottles">
        <a href="#" class="mighty-blue text-center mt-md-1">Vitamins Collection</a>
      </div>       
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuWellness'
}
</script>

<style scoped>
 @media(min-width: 767px) {
    .submenu-list{
      max-width: 760px;
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
    .column-1 {
     border-right: 1px solid #ecebebb0;
    }
     .vitamins-img {
      height: 150px;
      width: auto;
    }
   }
</style>