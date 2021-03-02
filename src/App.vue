<template>
  <div id="app">
    <Header 
      msg="USPS is seeing delays; orders may be delayed"
      :navItems="navItems"
      />
    <Banner />
    <Main />
    <MainJoinMightyFix />
    <MainOurPledge />
    <Footer />
  </div>
</template>

<script>
import Banner from './components/Banner/Banner.vue'
import Header from './components/Header/Header.vue'
import Main from './components/Main/Main'
import MainJoinMightyFix from './components/Main/MainJoinMightyFix'
import MainOurPledge from './components/Main/MainOurPledge'
import Footer from './components/Footer/index'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Main,
    MainJoinMightyFix,
    MainOurPledge,
    Footer,
  },
  data() {
      return {
        menuOpen: false,
        navItems: [
          { 
            heading: 'Already a member? Log-in',
            submenu: false,
            freeShipping: false,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'Subscribe',
            submenu: true,
            menuOpen: false,
            displayContent: false,
            content: 'Subscribe dropdown'
          },
          { 
            heading: 'Essentials',
            submenu: false,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'New',
            submenu: false,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'Gifts',
            submenu: true,
            menuOpen: false,
            displayContent: false,
            content: 'Gifts Dropdown'           
          },
          { 
            heading: 'Kitchen',
            submenu: true,
            menuOpen: false,
            displayContent: false,

          },
          { 
            heading: 'On the go',
            submenu: true,
            menuOpen: false,
            displayContent: false,

          },
          { 
            heading: 'Cleaning',
            submenu: true,
            menuOpen: false,
            displayContent: false,

          },
          { 
            heading: 'Body',
            submenu: true,
            menuOpen: false,
            displayContent: false,

          },
          { 
            heading: 'Wellness',
            submenu: true,
            menuOpen: false,
            displayContent: false,

          },
          { 
            heading: 'Kids',
            submenu: true,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'Pets',
            submenu: true,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'Sale',
            submenu: true,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'Free Shipping over $50',
            freeShipping: true,
            submenu: false,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'MIGHTYLIFE BLOG',
            submenu: false,
            menuOpen: false,
            displayContent: false,
          },
          { 
            heading: 'LOG-IN',
            submenu: false,
            menuOpen: false,
            displayContent: false,
          },
        ]
      }
  },

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
