  <template>
  <div>
    <button class="nav-button border-0 mt-1 d-md-none"  @click="toggleSlide"><toggler-icon /></button>
    <div class="sidebar-left" :class="[!isOpen ? 'closedSidebar' : 'openSidebar']">
      <Navigation />
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import TogglerIcon from './TogglerIcon'

export default {
  components: { TogglerIcon, Navigation },
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
    position: absolute;
    top: 88px;
    height: 100%;
    width: 300px;
    overflow: scroll;
  }

  .nav-button {
    position: fixed;
    background-color: white;
    top: 32px;
    z-index: 3;
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