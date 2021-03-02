<template>
  <div class="header-container">
    <div class="header">
      <div class="shipping-banner d-md-flex flex-md-row">
        <p class="text-white text-center d-md-flex p-2 pl-2 my-auto  ">{{ msg }}</p>
        <p class="d-none d-md-flex text-white ml-auto p-2 px-3 my-auto "><a href="#" class="our-mission">Our Mission</a></p>
        <div class="position-relative" @mouseover="dropdownOpen = true" @mouseleave="dropdownOpen = false" @click="dropdownOpen = false">
          <p class="d-none d-md-flex text-white p-2 px-md-4 my-auto "><a href="#" class="blog">Blog</a></p>
          <blog-dropdown class="position-fixed"  v-if="dropdownOpen"  />
        </div>
      </div>
      <div class="main-navbar d-flex">
        <input class="align-self-center ml-3 d-none d-md-block px-1 py-2 t" type="text" placeholder="What are you looking for?">
        <SearchIcon class="search-icon my-3 ml-md-3 align-self-center" />
        <a href="#" class="my-2 mx-auto d-md-none"><img class="logo-sm" src="../../images/mnLogo_text.png" alt="MightyNest Logo"></a>
        <a href="#" class="my-3 mx-auto d-none d-md-inline"><img class="logo-md" src="../../images/logo.png" alt="MightNest Logo"></a>
        <a href="#" class="sign-up-link mx-4 pl-5 align-self-center d-none d-md-block">Sign in/Sign up</a>
        <ShoppingCart class="cart ml-0 my-auto"/>
      </div>
      <row-navigation :navItems="navItems" />
    </div>
    <sidebar :navItems="navItems" />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import SearchIcon from './SearchIcon'
import ShoppingCart from './ShoppingCart.vue'
import RowNavigation from './Navigation/RowNavigation.vue'
import BlogDropdown from './BlogDropdown.vue'

export default {
  components: { 
    Sidebar,
    SearchIcon,
    ShoppingCart,
    RowNavigation,
    BlogDropdown,
    },
  name: 'Header',
  props: ['msg', 'navItems'],
  data() {
    return {
      dropdownOpen: false
    }
  }
}

</script>

<style scoped>

  .header {
    box-shadow: 0 -3px 10px;
    position: fixed;
    width: 100%;
    z-index: 3;
  }

  .shipping-banner {
    background-color: #89cf31;
    font-size: 11px;
  }
  .our-mission:visited, .blog:visited {
    color: white;
  }

  .main-navbar {
    background:white;
    z-index: 3;
  }

  .search-icon {
    margin-left: 55px;
  }
  
  .logo-sm {
    height: 40px;
  }

  .logo-md {
    height: 47px;
  }

  .cart {
    margin-left: auto;
  }
  
  @media (min-width: 767px) {
    .shipping-banner {
      font-size: 14px;
    }
    input {
      font-size: 11px;
      width: 160px;
      border: none;
      border-bottom: 1px solid #eee;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: #ababab;
    }
    
    .search-icon {
      fill: #e4e4e4;
   }
    .sign-up-link {
      font-size: 12px;
      color: #666;
    }
  }

</style>