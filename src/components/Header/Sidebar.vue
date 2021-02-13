  <template>
  <div>
    <button class="nav-button border-0 mt-1"  @click="toggleSlide"><toggler-icon /></button>
      <div class="sidebar-left" :class="[!isOpen ? 'closedSidebar' : 'openSidebar']">
        <a class="nav-item d-block px-3 py-2" v-for="nav in navItems" :key="nav.uuid">
          <font-awesome-icon v-if="nav.freeShipping"  class="truck mr-1 mt-1" icon="truck"></font-awesome-icon>
          {{ nav.heading.toUpperCase() }} 
          <font-awesome-icon v-if="nav.submenu" class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon>
        </a>
      </div>
  </div>
</template>

<script>
import TogglerIcon from './TogglerIcon.vue'
import { uuid } from 'vue-uuid'

export default {
  components: { TogglerIcon },
  name: 'Sidebar',
  data() {
      return {
        isOpen: false,
        navItems: [
          { 
            heading: 'Already a member? Log-in',
            submenu: false,
            freeShipping: false,
            uuid: uuid.v1(),
            
          },
          { 
            heading: 'Subscribe',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Essentials',
            submenu: false,
            uuid: uuid.v1()
          },
          { 
            heading: 'New',
            submenu: false,
            uuid: uuid.v1()
          },
          { 
            heading: 'Gifts',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Kitchen',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'On the go',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Cleaning',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Body',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Wellness',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Kids',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Pets',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Sale',
            submenu: true,
            uuid: uuid.v1()
          },
          { 
            heading: 'Free Shipping over $50',
            freeShipping: true,
            submenu: false,
            uuid: uuid.v1()
          },
          { 
            heading: 'MIGHTYLIFE BLOG',
            submenu: false,
            uuid: uuid.v1()
          },
          { 
            heading: 'LOG-IN',
            submenu: false,
            uuid: uuid.v1()
          },
          
          
        ]

      }
  },
  methods: {
    toggleSlide(e){
      e.preventDefault()
      this.isOpen = !this.isOpen;
      console.log(this.isOpen)
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

  .angle-down {
    color: rgb(189, 189, 189);
    transform: scale(1.4);
  }
  .truck {
    transform: scale(.8);
  }
</style>