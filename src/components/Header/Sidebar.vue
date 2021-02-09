  <template>
  <div>
    <button class="nav-button border-0 mt-1" v-b-toggle.sidebar-1><toggler-icon/></button>
    <b-sidebar id="sidebar-1" title="NavBar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="/src/images/entrust_site_seal.png" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import TogglerIcon from './TogglerIcon.vue'


export default {
  components: { TogglerIcon },
  name: 'Sidebar',
  
}
</script>

<style scoped>
  .nav-button {
    background-color: white
  }
</style>