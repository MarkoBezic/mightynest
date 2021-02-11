  <template>
  <div>
    <button class="nav-button border-0 mt-1" v-b-toggle.sidebar-1><toggler-icon/></button>
    <b-sidebar id="sidebar-1" shadow>
      <div class="menu-item px-3 py-2">ALREADY A MEMBER? LOG-IN </div>
      <div class="menu-item px-3 py-2">SUBCRIBE<font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">ESSENTIALS</div>
      <div class="menu-item px-3 py-2">NEW </div>
      <div class="menu-item px-3 py-2">GIFTS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">KITCHEN<font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">ON THE GO <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">CLEANING <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">BODY <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">WELLNESS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">KIDS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">PETS <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item px-3 py-2">SALE <font-awesome-icon class="angle-down float-right mt-1" icon="angle-down"></font-awesome-icon></div>
      <div class="menu-item-small px-3 pt-4"><font-awesome-icon class="truck mr-1 mt-1" icon="truck"></font-awesome-icon>Free Shipping over $50</div>
      <div class="menu-item px-3 py-2">MIGHTLIFE BLOG</div>
      <div class="menu-item px-3 py-2">LOG-IN</div>
      
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

  .menu-item {
    font-weight: bold;
    font-size: 14.5px;
    color: #777;
    border: 1px solid #f1f1f1;
  }
  .menu-item:hover {
    cursor: pointer;
    color: #333;
  }

  .menu-item-small{
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