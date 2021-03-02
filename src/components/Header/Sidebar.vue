  <template>
  <div>
    <button class="nav-button border-0 mt-1 d-md-none"  @click="toggleSlide"><toggler-icon :isOpen="isOpen" /></button>
    <a href="#" @click="toggleSlide" :class="[isOpen ? 'overlay' : 'overlay-closed']"></a>
    <div class="sidebar-left" :class="[!isOpen ? 'closedSidebar' : 'openSidebar']">
      <Navigation :navItems="navItems" />
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation/index'
import TogglerIcon from './TogglerIcon'

export default {
  components: { TogglerIcon, Navigation },
  name: 'Sidebar',
  props: ['navItems'],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleSlide(e){
      e.preventDefault()
      this.isOpen = !this.isOpen;
    },
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
    background: white;
    z-index: 3;
    position: fixed;
    top: 92px;
    height: 100%;
    width: 300px;
    overflow: scroll;
  }

  .nav-button {
    position: fixed;
    background-color: white;
    top: 40px;
    z-index: 3;
  }

   .overlay {
    width: 1000vh;
    height: 1000vh;
    background: white;
    opacity: .7;
    position: absolute;
    transform: translate(-100px, -52px);
    z-index: 3;
  }

  .overlay-closed {
    display: none;
  }

  @media(min-width: 767px) {
    .nav-button {
      top: 38px;
    }
     .sidebar-left {
      top: 109px;
    }
  }
  
</style>