<template>
  <div class="px-4 pb-3 py-md-4 d-md-flex justify-content-md-center">
    <ul class="submenu-list d-md-flex">
     <div class="column-1 px-md-5">
      <p class="pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Sales</a></p>
      <li><a href="#" class="text-dark text-decoration-none">Holiday</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Kitchen & Table</a></li>
      <li><a href="#" class="text-dark text-decoration-none">On-The-Go</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Green Cleaning</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Wellness</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Body</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Kids</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Pets</a></li>
     </div>
    
    <div class="d-none d-md-flex flex-column pl-md-3 justify-self-md-start px-md-5">
      <img class="vitamins-img mt-md-2" src="../../../images/thumbnail_sale_2x.jpg" alt="Vitamin bottles">
      <a href="#" class="mighty-blue text-center mt-md-1">Get it before its gone!</a>
    </div>    
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuSale'
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
     padding-right: 90px !important;
    }
     .vitamins-img {
      height: 150px;
      width: auto;
    }
   }
</style>