<template>
  <div class="gifts-container mx-md-auto my-md-3 px-4 py-2">
    <ul class="submenu-list column-1 ml-md-2">
      <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Gifts</a></p>
      <li><a href="#" class="text-dark text-decoration-none">Seasonal & Holiday</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Gift Subscriptions & Gift Cards</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Best Sellers</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Eco-Friendly Gift Boxes</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Cooking & Entertaining</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Relax & Renew</a></li>
      <li><a href="#" class="text-dark text-decoration-none">On-The-Go & Travel</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Mighty Kids</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Animal Lovers</a></li>
      <li><a href="#" class="text-dark text-decoration-none">Small Gifts</a></li>
    </ul>
    <div class="column-2 d-none d-md-flex flex-md-column">
      <img class="mighty-box-img mx-md-4 my-md-2 align-items-md-start" src="../../../images/MightyHomeBox18x13.jpg" alt="Mighty Home Box">
      <a class="mighty-blue caption text-center mx-md-4" href="#">All-in-one sustainable gifting, MightyNest Home Gift Box & more!</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'NavSubmenuGifts'
}
</script>

<style scoped>
 @media (min-width: 767px) {
   .gifts-container {
     display: grid;
     width: 600px;
     grid-template-columns: 250px 280px;
     justify-content: center;
   }
   .column-1 {
     border-right: 1px solid #ecebebb0;
   }

   li {
     border-bottom: none;
   }

   .caption {
     font-size: 14px;
     line-height: 16px;
   }
 }
</style>