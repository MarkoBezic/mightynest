  <template>
  <div>
    <button class="nav-button border-0 mt-1"  @click="toggleSlide"><toggler-icon /></button>
      <div class="sidebar-left" :class="[!isOpen ? 'closedSidebar' : 'openSidebar']">
        <a class="menu-item d-block px-3 py-2">ALREADY A MEMBER? LOG-IN </a>
        <a class="menu-item d-block px-3 py-2">SUBCRIBE<font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">ESSENTIALS</a>
        <a class="menu-item d-block px-3 py-2">NEW </a>
        <a class="menu-item d-block px-3 py-2">GIFTS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">KITCHEN<font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">ON THE GO <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">CLEANING <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">BODY <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">WELLNESS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">KIDS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">PETS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item d-block px-3 py-2">SALE <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></a>
        <a class="menu-item-small d-block px-3 pt-4"><font-awesome-icon class="truck mr-1 mt-1" icon="truck"></font-awesome-icon>Free Shipping over $50</a>
        <a class="menu-item d-block px-3 py-2">MIGHTLIFE BLOG</a>
        <a class="menu-item d-block px-3 py-2">LOG-IN</a>
      </div>
  </div>
</template>

<script>
import TogglerIcon from './TogglerIcon.vue'
// import TogglerIcon from './TogglerIcon.vue'


export default {
  components: { TogglerIcon },
  name: 'Sidebar',
  data() {
      return {
        isOpen: false,
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
    transition: .7s;
  }
  .openSidebar {
    transform: translateX(-3%);
    transition: .7s;
  }
  
  .sidebar-left {
    z-index: 1;
    position: absolute;
    margin-top: 10px;
    height: 100%;
  }
  .nav-button {
    background-color: white
  }

  .menu-item {
    text-decoration: none;
    font-weight: bold;
    font-size: 14.5px;
    color: #777;
    border: 1px solid #f1f1f1;
    background: white;
  }
  .menu-item:hover {
    cursor: pointer;
    color: #333;
  }

  .menu-item-small{
    text-decoration: none;
    font-weight: 200;
    font-size: 13px;
    color: #666;

  }

  .angle-down {
    color: rgb(189, 189, 189);
    transform: scale(1.4);
  }
  .truck {
    transform: scale(.8);
  }
</style>