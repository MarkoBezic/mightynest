<template>
   <div class="main-join-now-container p-5 text-center">
      <h4>Join the MightyFix</h4>
      <hr class="blue-line mx-auto my-3">
      <h6 class="my-4 mx-md-4">Get one hand-picked healthy, green product each month that we think you'll love.</h6>
      <green-button class="green-button" txt="JOIN NOW"></green-button>
    </div>
</template>

<script>
import GreenButton from '../Banner/GreenButton'

export default {
  name: 'MainJoinMightyFix',
  components: {
    GreenButton
  }
}
</script>

<style scoped>
  .main-join-now-container {
  background-color: #f7f7f7;
  }
  .blue-line {
    border: 1px solid  #05afc6;
    width: 30px;
  }
  h6 {
  font-size: 18px;
  }
@media (min-width: 767px) {
  .green-button {
    padding: 12px 60px;
  }
}

</style>