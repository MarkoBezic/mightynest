<template>
<div>
  <div class="d-none d-md-flex row-navigation justify-content-center">
  <!-- @marko todo add functionality for menu title to remain active when mouseover moves to submenu -->
    <div class="position-relative d-inline-block" @mouseover="navItems[1].menuOpen = true" @mouseleave="navItems[1].menuOpen = false">
      <div class="menu-title-blue row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[1].heading }}
      </div> 
      <div class="submenu position-fixed" v-if="navItems[1].menuOpen" @click="navItems[1].menuOpen = false">
        <nav-submenu-subscribe />
      </div>
    </div>
    
    <div class="position-relative d-inline-block">
      <div class="menu-title-blue row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" id="menu-title-essential">
        {{ navItems[2].heading }}
      </div>
    </div>

    <div class="nav-dividing-line"></div>

    <div class="position-relative d-inline-block">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" id="menu-title-new">
        {{ navItems[3].heading }}
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[4].menuOpen = true" @mouseleave="navItems[4].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" id="menu-title-gifts">
        {{ navItems[4].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[4].menuOpen" @click="navItems[4].menuOpen = false">
        <nav-submenu-gifts />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[5].menuOpen = true" @mouseleave="navItems[5].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[5].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[5].menuOpen" @click="navItems[5].menuOpen = false">
        <nav-submenu-kitchen />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[6].menuOpen = true" @mouseleave="navItems[6].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[6].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[6].menuOpen" @click="navItems[6].menuOpen = false">
        <nav-submenu-on-the-go />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[7].menuOpen = true" @mouseleave="navItems[7].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[7].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[7].menuOpen" @click="navItems[7].menuOpen = false">
        <nav-submenu-cleaning />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[8].menuOpen = true" @mouseleave="navItems[8].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[8].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[8].menuOpen" @click="navItems[8].menuOpen = false">
        <nav-submenu-body />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[9].menuOpen = true" @mouseleave="navItems[9].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[9].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[9].menuOpen" @click="navItems[9].menuOpen = false">
        <nav-submenu-wellness />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[10].menuOpen = true" @mouseleave="navItems[10].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[10].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[10].menuOpen" @click="navItems[10].menuOpen = false">
        <nav-submenu-kids />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[11].menuOpen = true" @mouseleave="navItems[11].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[11].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[11].menuOpen" @click="navItems[11].menuOpen = false">
        <nav-submenu-pets />
      </div>
    </div>

    <div class="position-relative d-inline-block" @mouseover="navItems[12].menuOpen = true" @mouseleave="navItems[12].menuOpen = false">
      <div class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none" >
        {{ navItems[12].heading }}
      </div>
      <div class="submenu position-fixed" v-if="navItems[12].menuOpen" @click="navItems[12].menuOpen = false">
        <nav-submenu-sale />
      </div>
    </div>
  </div>

</div>

</template>

<script>
import NavSubmenuSubscribe from './NavSubmenuSubscribe.vue';
import NavSubmenuGifts from './NavSubmenuGifts.vue';
import NavSubmenuKitchen from './NavSubmenuKitchen.vue';
import NavSubmenuCleaning from './NavSubmenuCleaning.vue';
import NavSubmenuPets from './NavSubmenuPets.vue';
import NavSubmenuKids from './NavSubmenuKids.vue';
import NavSubmenuOnTheGo from './NavSubmenuOnTheGo.vue';
import NavSubmenuBody from './NavSubmenuBody.vue';
import NavSubmenuSale from './NavSubmenuSale.vue';
import NavSubmenuWellness from './NavSubmenuWellness.vue';


export default {
  components: { 
    NavSubmenuSubscribe, 
    NavSubmenuGifts,
    NavSubmenuKitchen,
    NavSubmenuCleaning,
    NavSubmenuPets,
    NavSubmenuKids,
    NavSubmenuOnTheGo,
    NavSubmenuBody,
    NavSubmenuSale,
    NavSubmenuWellness, 
    
  },
  name: 'RowNavigation',
  data() {
      return {
        isActive: false,
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

<style scoped>

@media (min-width: 767px) {
  .row-navigation {
    background: white;
    font-size: 12px;
    position: relative;
  }

  .menu-title-blue {
    color: #05afc6 !important;
    font-weight: bolder
  }

  #menu-title-essential {
    padding-right: 12px !important;
  }

  .nav-dividing-line {
    height: 25px;
    border-right: 1px solid navy;
  }

  #menu-title-new {
    padding-left: 12px !important;
  }

  #menu-title-gifts {
    font-weight: bolder;
    color: red;
  }

  .row-nav-item:hover, .row-nav-item-active {
    font-weight: bold;
    border-bottom: 3px solid #05afc6;
  }

  .row-nav-item {
    border-bottom: 3px solid white;
    cursor: pointer;
    color: #777;
  }

  .submenu {
    box-shadow: 0px 20px 30px -30px;
    width: 100vw;
    left: 0px;

  }

}
</style>