<template>
  <div class='main text-center  mx-auto'>
    <div class="main-benefits d-flex flex-column px-4">
      <h4>One box. Infinite impact</h4>
      <h6 class="mighty-blue m-3">Live better</h6>
      <p>Each month, we'll send you one of our favorite clean and green products so you can start making changes that are better for you and the planet.</p>
      <hr class="green-line align-self-center m-0">

      <h6 class="mighty-blue m-3">Shop smarter</h6>
      <p>You can also head to our site to make new discoveries. As you find new healthy, green products you want to try, add them to your monthly box. It will all be shipped consciously in minimal, recyclable packaging.</p>
      <hr class="green-line align-self-center m-0">

      <h6 class="mighty-blue m-3">Save money</h6>
      <p class="mb-2">Members get up to 35% off everything -- every day! Not to mention free shipping on their monthly box</p>
      <p class="fine-print font-italic">Exclusions: Anhchor Hocking, Le Parfait, Lodge, and Weck</p>
      <hr class="green-line align-self-center m-0">

      <h6 class="mighty-blue m-3">Support businesses that care</h6>
      <p>Members get up to 35% off everything -- every day! Not to mention free shipping on their monthly box</p>

      <h6 class="mighty-blue my-3">Ready to join?</h6>
      <green-button class="green-button align-self-center p-3 mt-2" txt="GET STARTED NOW"></green-button>
      
      <hr class="dotted-border my-4">
    </div>
    <div class="d-flex flex-column main-our-team px-4">
      <h6 class="p-2">Our team loves to reserach and test the best healthy green products</h6>
      <img class="img-fluid" src="../../images/team_c@2x.jpg" alt="MightyNest team">
      <p class="py-4">
        We can't wait for you to discover and try our favorites! We've
        helped over 270,000 families make better choices for their 
        bodies, their homes, and the planet
      </p>
    </div>
  </div>
</template>

<script>
import GreenButton from '../Banner/GreenButton.vue'
export default {
  components: { GreenButton },
  name: 'Main',
}
</script>

<style scoped>
.main {
  margin-top: 100px;
  max-width: 700px;
}
h6 {
  font-size: 18px;
}
p {
  font-size: 14px;
}
.green-line {
  border: 1px solid #89cf31;
  width: 30px;
}
.fine-print {
  font-size: 9px;
}
.dotted-border {
  border: 1px dashed lightgray;
}
@media (min-width: 767px) {
  .main {
  margin-top: 185px;
  }
}

</style>