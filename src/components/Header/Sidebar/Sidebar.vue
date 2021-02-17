  <template>
  <div>
    <button class="nav-button border-0 mt-1"  @click="toggleSlide"><toggler-icon /></button>
    <div class="sidebar-left" :class="[!isOpen ? 'closedSidebar' : 'openSidebar']">
      <div v-for="(nav,index) in navItems" :key="index">
        <a class="nav-item d-block px-3 py-2"  @click="toggleMenu(index)">
          <font-awesome-icon v-if="nav.freeShipping"  class="truck mr-1 mt-1" icon="truck"></font-awesome-icon>
          {{ nav.heading.toUpperCase() }} 
          <font-awesome-icon v-if="nav.submenu" class="float-right mt-1" :class="!nav.menuOpen ? 'angle-down' : 'angle-up'" :icon="!nav.menuOpen ? 'angle-down' : 'angle-up'"></font-awesome-icon>
        </a>
        <div :class="nav.displayContent ? '' : 'd-none'">
            <div class="submenu px-3" v-if="nav.menuOpen && nav.heading == 'Subscribe'">
              <p class="text-dark font-weight-bolder mb-2 pt-1">Choose a monthly membership</p>
              <h6 class="mighty-blue">Join the MightyFix</h6>
              <p class="mb-2">Surprise me! Get one hand-picked healthy, green product each month that we think you'll love.</p>
              <green-button class="btn-small mb-1" txt="Get Started"><a href="#"></a></green-button>
              <a href="#" class="mighty-blue text-decoration-none p-3" id="gift-it">or Gift it</a>
              <h6 class="mighty-blue mt-4">Join Mighty Essentials</h6>
              <p class="mb-2">Stay Supploed! Created your own monthly shipment from our favorite healthy-living essentials</p>
              <green-button class="btn-small mb-2" txt="Get Started"><a href="#"></a></green-button>
              <hr class="mt-4">
              <p class="my-2 mx-1">MightyNest Memmber Benefits:</p>
              <ul class="mb-2">
                <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Exclusive Member Prices</li>
                <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Fre Shipping*</li>
                <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Expert Guidance</li>
              </ul>
              <a href="#" class="mighty-blue text-decoration-none" id="learn-more">Learn more</a>
              <p>Already a member? <a href="#" class="mighty-blue" id="log-in">Log in</a></p>
              <h6 class="text-center redeem-here text-white">Receive a MightyFix gift card? Redeem it here</h6>
            </div>
            
            
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Gifts'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Kitchen'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'On the go'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Cleaning'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Body'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Wellness'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Kids'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Pets'">submenu</div>
            <div class="submenu" v-if="nav.menuOpen && nav.heading == 'Sale'">submenu</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import GreenButton from '../../Banner/GreenButton.vue'
import TogglerIcon from '../TogglerIcon.vue'

export default {
  components: { TogglerIcon, GreenButton },
  name: 'Sidebar',
    
  data() {
      return {
        isOpen: true,
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
    toggleSlide(e){
      e.preventDefault()
      this.isOpen = !this.isOpen;
    },
    toggleMenu(id) {
      this.navItems[id].menuOpen = !this.navItems[id].menuOpen;
      this.navItems[id].displayContent = !this.navItems[id].displayContent;
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
    overflow: scroll;
  }
  .nav-button, .submenu {
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

  p, li {
    font-size: 14px;
  }

  .btn-small {
    font-size: 14px;
    font-weight: 400;
    padding: 5px 10px;
  }

  #gift-it {
    font-size: 14px;
  }
  hr {
    background-color: #05afc6;
  }

  ul {
    list-style: none;
  }

  .check-circle {
    transform: scale(1.4);
  }

  li {
    border-bottom: 1px solid rgba(236, 235, 235, 0.692);
    padding: 1px;
  }
  #learn-more, #log-in {
    font-size: 12px;
  }
  #log-in {
    text-decoration: underline;
  }
  .redeem-here {
    background: #05afc6;
    padding: 8px 15px;
    margin: 0 -12px;
  }
  h6 {
    font-size: 18px;
  }
</style>