<template>
  <div class="row-navigation d-md-flex justify-content-center">
    <div class="row-nav-item-container" v-for="(nav,index) in navItems" :key="index">
      <a class="row-nav-item d-block px-1 pt-1 pb-3 mx-1 text-decoration-none"  @mouseover="toggleMenuTrue(index)" @mouseleave="toggleMenuFalse(index)">
        <font-awesome-icon v-if="nav.freeShipping"  class="truck mr-1 mt-1 d-md-none" icon="truck"></font-awesome-icon>
        {{ nav.heading }} 
        <font-awesome-icon v-if="nav.submenu" class="float-right mt-1 d-md-none" :class="!nav.menuOpen ? 'angle-down' : 'angle-up'" :icon="!nav.menuOpen ? 'angle-down' : 'angle-up'"></font-awesome-icon>
      </a>
    </div>

    <div v-for="(nav, index) in navItems" :key="index" class="position-absolute submenu-container">
      <div :class="nav.displayContent ? '' : 'd-none'">
        <div class="submenu px-3" v-if="nav.menuOpen && nav.heading == 'Subscribe'">
          <nav-submenu-subscribe />
        </div>
        <div class="submenu px-4 py-2" v-if="nav.menuOpen && nav.heading == 'Gifts'">
          <nav-submenu-gifts />
        </div>
        <div class="submenu px-4" v-if="nav.menuOpen && nav.heading == 'Kitchen'">
            <nav-submenu-kitchen />
        </div>
        <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'On the go'">
          <nav-submenu-on-the-go />
        </div>
        <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Cleaning'">
          <nav-submenu-cleaning />
        </div>
        <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Body'">
            <nav-submenu-body />
        </div>
        <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Wellness'">
          <nav-submenu-wellness />
        </div>
        <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Kids'">
          <nav-submenu-kids />
        </div>
        <div class="submenu px-4 pb-3" v-if="nav.menuOpen && nav.heading == 'Pets'">
          <nav-submenu-pets />
        </div>
        <div class="submenu px-4 pb-3" v-if="nav.menuOpen && nav.heading == 'Sale'">
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
  name: 'RowNavigation',
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
  methods: {
    toggleMenuTrue(id) {
      this.navItems[id].menuOpen = true;
      this.navItems[id].displayContent = true;
    },
    toggleMenuFalse(id) {
      this.navItems[id].menuOpen = false;
      this.navItems[id].displayContent = false;
    }
  }
}
</script>

<style scoped>
.row-navigation {
  display: none;
}

@media (min-width: 767px) {
  .row-navigation {
    background: white;
    font-size: 12px;
  }

  .row-navigation a {
    cursor: pointer;
    color: #777;
  }

  .row-navigation a:hover {
    font-weight: bold;
  }

  .row-navigation a:hover {
    border-bottom: 3px solid #05afc6;
  }

  .row-nav-item {
    border-bottom: 3px solid white;
  }

  .row-nav-item-container:nth-child(1),
  .row-nav-item-container:nth-child(14),
  .row-nav-item-container:nth-child(15),
  .row-nav-item-container:nth-child(16)
  {
    display: none;
  }
  .row-nav-item-container:nth-child(2) a,
  .row-nav-item-container:nth-child(3) a
  {
    color: #05afc6;
    font-weight: bolder;
  }

  .row-nav-item-container:nth-child(3) {
    border-right: 1px solid navy;
    padding-right: 7px;
    height: 25px;
  }

  .row-nav-item-container:nth-child(4) {
    padding-left: 7px;
  }


  .row-nav-item-container:nth-child(5) a {
    font-weight: bolder;
    color: red;
  }

  .submenu-container {
    border-top: 1px solid lightgray;
    top: 157px;
    width: 100%;
  }
  .submenu {
    box-shadow: 0px 20px 30px -30px;

  }

}
</style>