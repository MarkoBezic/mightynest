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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
body {
  font-family: 'Montserrat', sans-serif;
}
.mighty-blue {
  color: #05afc6;
}
.mighty-blue:hover {
  color: #05afc6;
}

</style>
