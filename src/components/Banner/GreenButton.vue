<template>
  <button class="text-white">{{ txt }}</button>
</template>

<script>
export default {
  name: 'GreenButton',
  props: {
    txt: String
  }
}
</script>

<style scoped>

  button {
    font-weight: 400;
    background-color: #89cf31;
    padding: 12px 60px;
    border: #7bbb2c solid 1px;
    transition: .4s;
  }
  button:hover {
    background-color:#6ba525;
    transition: .4s ease-in-out;
  }
 

  @media (min-width: 767px) {
    button {
    font-weight: 400;
    font-size: 18px;
    padding: 20px 75px;
    }
  }
</style>