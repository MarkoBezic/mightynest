<template>
  <div>
    <ul class="submenu-list d-md-flex container-fluid p-0 py-md-4">
      <div class="px-md-2">
        <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Bath & Body</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Deodorant</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Oral Care</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Period Care</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Hair Care</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Lotion</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Soaps & Bodywash</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Shaving</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Men's Body Care</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Sunscreen</a></li>
      </div>
      <div class="px-md-2 column-2 pr-md-3">
        <p class="pt-3 mb-2 pt-md-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Facial Care</a></p>
        <li><a href="#" class="text-dark text-decoration-none">Cleansers</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Toners</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Masks</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Moisturizers & Treaments</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Facial Sun Protection</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Lip Care</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Skincare Accessories</a></li>
        <li><a href="#" class="text-dark text-decoration-none">Teen & Tween</a></li>
      </div>
      <div class="px-md-2 pl-md-3">
        <ul class="featured-items">
          <p class=" pt-3 mb-2 pt-md-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
          <li><a href="#" class="text-dark text-decoration-none small-font">PitPack</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">SmilePack</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">MoonPack</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Safe Sunscreen</a></li>
          <li><a href="#" class="text-dark text-decoration-none small-font">Natural Facial Care</a></li>
        </ul>
      </div>
      <div class="column-4 d-none d-md-flex flex-column mx-md-auto pl-md-3 justify-self-md-start">
        <img class="moonpack-img mt-md-2" src="../../../images/open-uri20190208-4-97aru8.jpg" alt="Feminine products of the Moonpack">
        <a href="#" class="mighty-blue text-center mt-md-1">MoonPack</a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuBody'
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
    .column-2 {
     border-right: 1px solid #ecebebb0;
    }
     .moonpack-img {
      height: 150px;
      width: auto;
    }
   }
</style>