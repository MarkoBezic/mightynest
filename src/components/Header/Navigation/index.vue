<template>
  <div class="nav-container"> 
    <div class="nav-item-container" v-for="(nav,index) in navItems" :key="index">
      <a class="nav-item d-block px-3 py-2"  @click="toggleMenu(index)">
        <font-awesome-icon v-if="nav.freeShipping"  class="truck mr-1 mt-1" icon="truck"></font-awesome-icon>
        {{ nav.freeShipping ? nav.heading : nav.heading.toUpperCase() }} 
        <font-awesome-icon v-if="nav.submenu" class="float-right mt-1" :class="!nav.menuOpen ? 'angle-down' : 'angle-up'" :icon="!nav.menuOpen ? 'angle-down' : 'angle-up'"></font-awesome-icon>
      </a>
      <div class="d-md-none" :class="nav.displayContent ? '' : 'd-none'">
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Subscribe'">
          <nav-submenu-subscribe />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Gifts'">
          <nav-submenu-gifts />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Kitchen'">
          <nav-submenu-kitchen />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'On the go'">
          <nav-submenu-on-the-go />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Cleaning'">
          <nav-submenu-cleaning />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Body'">
          <nav-submenu-body />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Wellness'">
          <nav-submenu-wellness />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Kids'">
          <nav-submenu-kids />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Pets'">
          <nav-submenu-pets />
        </div>
        <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Sale'">
          <nav-submenu-sale />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavSubmenuBody from './NavSubmenuBody.vue';
import NavSubmenuCleaning from './NavSubmenuCleaning.vue';
import NavSubmenuGifts from './NavSubmenuGifts.vue';
import NavSubmenuKids from './NavSubmenuKids.vue';
import NavSubmenuKitchen from './NavSubmenuKitchen.vue';
import NavSubmenuOnTheGo from './NavSubmenuOnTheGo.vue';
import NavSubmenuPets from './NavSubmenuPets.vue';
import NavSubmenuSale from './NavSubmenuSale.vue';
import NavSubmenuSubscribe from './NavSubmenuSubscribe.vue';
import NavSubmenuWellness from './NavSubmenuWellness.vue';

export default {
  components: { 
    NavSubmenuSubscribe, 
    NavSubmenuGifts, 
    NavSubmenuKitchen, 
    NavSubmenuOnTheGo, 
    NavSubmenuCleaning,
    NavSubmenuBody,
    NavSubmenuWellness,
    NavSubmenuKids,
    NavSubmenuPets,
    NavSubmenuSale,
  },
  name: 'Navigation',
  props: ['navItems'],
  data() {
    return {
      submenus: [
        { 'heading': 'Subscribe', 'component': '<nav-submenu-subscribe />'},
      ]
    }
  },
  methods: {
    toggleMenu(id) {
      let navItem = this.navItems[id]
      navItem.menuOpen = !navItem.menuOpen;
      navItem.displayContent = !navItem.displayContent;
    }
  },
}
</script>

<style>
 
  .nav-item {
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    color: #777;
    border: 1px solid #f1f1f1;
    background: white;
  }

  .nav-item:hover {
    text-decoration: none;
  }

  .nav-item:hover {
    cursor: pointer;
    color: #333;
  }

  .nav-item-container:nth-child(14) > a  {
    text-decoration: none;
    font-weight: 400 !important;
    font-size: 12px !important;
    color: #777;
    padding-top: 15px !important;
    padding-bottom: 2px !important;
  }

  .submenu {
    background-color: white
  }
  .submenu-list li {
    padding: 5px 0;
  }

  .angle-down, .angle-up {
    color: rgb(189, 189, 189);
    transform: scale(1.4);
  }
  .truck {
    transform: scale(.8);
  }

  ul {
  list-style: none;
  }

  li {
    border-bottom: 1px solid #ecebebb0;
    padding: 2px;
  }

  p, li {
    font-size: 14px;
  }
  
  .featured-items li {
    border: none
  }
  .small-font {
    font-size: 11px;
  }

  @media(min-width: 767px) {
      .nav-button {
      top: 38px;
    }
    
   }
</style>