<template>
  <div id="app">
    <Header msg="USPS is seeing delays; orders may be delayed"/>
    <Banner />
  </div>
</template>

<script>
import Banner from './components/Banner/Banner.vue'
import Header from './components/Header/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
