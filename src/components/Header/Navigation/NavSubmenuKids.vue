<template>
  <div class="py-md-4 d-md-flex justify-content-md-center">
    <ul class="submenu-list d-md-flex">
      <div class="px-md-5 column-1">
        <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Kids</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Toys</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Kids Table</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Bath & Body Care</a></li>
      </div>  
      <div class="px-md-5">
        <ul class="featured-items">
          <p class="pt-3 mb-2 pt-md-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
          <li><a href="#" class="text-dark text-decoration-none small-font">Healthy Kids Body Care</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Natural Baby Body Care</a></li>
        </ul>
      </div>
       <div class="d-none d-md-flex flex-column pl-md-3 justify-self-md-start px-md-4">
        <img class="vitamins-img mt-md-2" src="../../../images/MN-BBCBMenuFeature.jpg" alt="Vitamin bottles">
        <a href="#" class="mighty-blue text-center mt-md-1">Vitamins Collection</a>
      </div>   
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuKids'
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