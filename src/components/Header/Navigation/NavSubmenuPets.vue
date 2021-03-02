<template>
  <div class="px-4 pb-3 py-md-4 d-md-flex justify-content-md-center">
    <ul class="submenu-list px-md-5 column-1">
      <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none sub-heading">Pets</a></p>
      <li><a href="#" class="text-dark text-decoration-none">Treats & Toys</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Grooming</a></li>
      <li ><a href="#" class="text-dark text-decoration-none">Supplements & Remedies</a></li>
    </ul>
    <div class="d-none d-md-flex flex-column pl-md-3 justify-self-md-start px-md-5">
        <img class="vitamins-img mt-md-2" src="../../../images/open-uri20190208-4-1vhe812.jpg" alt="Jar of dog/cat supplement">
        <a href="#" class="mighty-blue text-center mt-md-1">kin + kind</a>
      </div>     
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuPets'
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