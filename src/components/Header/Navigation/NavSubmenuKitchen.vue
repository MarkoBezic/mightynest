<template>
  <div>
    <ul class="kitchen submenu-list m-md-auto justify-content-md-center pb-md-5 pt-md-3" >
      <div class="column-1">
        <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Kitchen</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Kitchen Gift Boxes</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Food Storage</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Kitchen Tools</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Cooking & Baking</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Coffee & Tea</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Pantry Organization & Canning</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Compost & Rubbish</a></li>
      </div>

      <div class="column-2">
        <p class=" pt-3 mb-2 pt-md-2 " ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Table</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Bowls & Plates</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Drinkware</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Serveware</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Linens</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Air Purifying Candles</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Outdoor eating</a></li>
      </div>

      <ul class="featured-items column-3 ml-md-3">
        <p class=" pt-3 mb-2 pt-md-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
        <li><a href="#" class="text-dark text-decoration-none small-font">Glass Food Storage</a></li>
        <li><a href="#" class="text-dark text-decoration-none small-font">Reusable Storage Bags</a></li>
        <li><a href="#" class="text-dark text-decoration-none small-font">Cooking Without Plastic</a></li>
        <li><a href="#" class="text-dark text-decoration-none small-font">Plastic Free Food Wrap</a></li>
        <li><a href="#" class="text-dark text-decoration-none small-font">Bamboo Cutting Boards</a></li>
      </ul>

      <div class="column-4 d-none d-md-flex flex-column mx-md-auto pl-md-3 justify-self-md-start">
        <img class="glass-container-img mt-md-2" src="../../../images/FHGlassLidsMenuFeature.jpg" alt="Glass food containers on counter">
        <a href="#" class="mighty-blue text-center mt-md-1">Innovative solutions for plastic-free food storage</a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuKitchen'
}
</script>

<style scoped>
  @media (min-width: 767px) {

    .kitchen {
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
    }
    .column-2 {
     border-right: 1px solid #ecebebb0;
   }
    .glass-container-img {
      height: 150px;
      width: auto;
    }

  }
</style>