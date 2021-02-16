  <template>
  <div>
    <button class="nav-button border-0 mt-1"  @click="toggleSlide"><toggler-icon /></button>
      <div class="sidebar-left" :class="[!isOpen ? 'closedSidebar' : 'openSidebar']">
        <a class="nav-item d-block px-3 py-2" v-for="(nav,index) in navItems" :key="index" @click="toggleMenu(index)">
          <font-awesome-icon v-if="nav.freeShipping"  class="truck mr-1 mt-1" icon="truck"></font-awesome-icon>
          {{ nav.heading.toUpperCase() }} 
          <font-awesome-icon v-if="nav.submenu" class="float-right mt-1" :class="!nav.menuOpen ? 'angle-down' : 'angle-up'" :icon="!nav.menuOpen ? 'angle-down' : 'angle-up'"></font-awesome-icon>
        </a>
      </div>
  </div>
</template>

<script>
import TogglerIcon from './TogglerIcon.vue'

export default {
  components: { TogglerIcon },
  name: 'Sidebar',
  data() {
      return {
        isOpen: false,
        menuOpen: false,
        navItems: [
          { 
            heading: 'Already a member? Log-in',
            submenu: false,
            freeShipping: false,
            menuOpen: false
          },
          { 
            heading: 'Subscribe',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'Essentials',
            submenu: false,
            menuOpen: false
          },
          { 
            heading: 'New',
            submenu: false,
            menuOpen: false
          },
          { 
            heading: 'Gifts',
            submenu: true,
            menuOpen: false,
            

          },
          { 
            heading: 'Kitchen',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'On the go',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'Cleaning',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'Body',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'Wellness',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'Kids',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'Pets',
            submenu: true,
            menuOpen: false
          },
          { 
            heading: 'Sale',
            submenu: true,
            menuOpen: false,
          },
          { 
            heading: 'Free Shipping over $50',
            freeShipping: true,
            submenu: false,
            menuOpen: false
          },
          { 
            heading: 'MIGHTYLIFE BLOG',
            submenu: false,
            menuOpen: false
          },
          { 
            heading: 'LOG-IN',
            submenu: false,
            menuOpen: false
          },
          
          
        ]

      }
  },
  methods: {
    toggleSlide(e){
      e.preventDefault()
      this.isOpen = !this.isOpen;
    },
    toggleMenu(id) {
      this.navItems[id].menuOpen = !this.navItems[id].menuOpen
    }
  }
   
}
</script>

<style scoped>
  
  .closedSidebar{
    transform: translateX(-102%);
    transition: .3s ease-out;
  }
  .openSidebar {
    transform: translateX(0%);
    transition: .3s ease-out;
  }
  
  .sidebar-left {
    z-index: 1;
    position: absolute;
    margin-top: 10px;
    height: 100%;
    width: 300px;
  }
  .nav-button {
    background-color: white
  }

  .nav-item {
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    color: #777;
    border: 1px solid #f1f1f1;
    background: white;
  }
  .nav-item:hover {
    cursor: pointer;
    color: #333;
  }

   a:nth-child(14) {
    text-decoration: none;
    font-weight: 200 !important;
    font-size: 12px !important;
    color: #666;
    padding-top: 15px !important;
    padding-bottom: 2px !important;
  }

  .angle-down, .angle-up {
    color: rgb(189, 189, 189);
    transform: scale(1.4);
  }
  .truck {
    transform: scale(.8);
  }
</style>