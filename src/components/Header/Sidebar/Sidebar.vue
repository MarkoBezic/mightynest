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
              <p class="mb-2">Stay Supplied! Created your own monthly shipment from our favorite healthy-living essentials</p>
              <green-button class="btn-small mb-2" txt="Get Started"><a href="#"></a></green-button>
              <hr class="mt-4">
              <p class="my-2 mx-1">MightyNest Memmber Benefits:</p>
              <ul class="benefits-list mb-2">
                <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Exclusive Member Prices</li>
                <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Fre Shipping*</li>
                <li class="px-1"><font-awesome-icon class="check-circle mighty-blue mr-2" icon="check-circle"></font-awesome-icon> Expert Guidance</li>
              </ul>
              <a href="#" class="mighty-blue text-decoration-none" id="learn-more">Learn more</a>
              <p class="mb-1">Already a member? <a href="#" class="mighty-blue" id="log-in">Log in</a></p>
              <h6 class="text-center redeem-here text-white">Receive a MightyFix gift card? Redeem it here</h6>
            </div>
            <div class="submenu px-4 py-2" v-if="nav.menuOpen && nav.heading == 'Gifts'">
              <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Gifts</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Seasonal & Holiday</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Gift Subscriptions & Gift Cards</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Best Sellers</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Eco-Friendly Gift Boxes</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Cooking & Entertaining</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Relax & Renew</a></li>
                <li><a href="#" class="text-dark text-decoration-none">On-The-Go & Travel</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Mighty Kids</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Animal Lovers</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Small Gifts</a></li>
              </ul>
            </div>
            <div class="submenu px-4" v-if="nav.menuOpen && nav.heading == 'Kitchen'">
               <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Kitchen</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Kitchen Gift Boxes</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Food Storage</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Kitchen Tools</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Cooking & Baking</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Coffee & Tea</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Pantry Organization & Canning</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Compost & Rubbish</a></li>

                <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Table</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Bowls & Plates</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Drinkware</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Serveware</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Linens</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Air Purifying Candles</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Outdoor eating</a></li>

                <ul class="featured-items">
                  <p class=" pt-3 mb-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Glass Food Storage</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Reusable Storage Bags</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Cooking Without Plastic</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Plastic Free Food Wrap</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Bamboo Cutting Boards</a></li>
                </ul>
              </ul>
            </div>
            <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'On the go'">
              <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Lunch Gear</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Lunch Boxes</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Food Containers</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Bags & Wraps</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Bottles & Cups</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Utensils, Napkins & More</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Cloth Masks & Hand Sanitizers</a></li>

                <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Water Bottles</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Stainless Steel Water Bottles</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Glass Water Bottles</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Kids Water Bottles</a></li>
                <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Coffee Tumblers</a></p>
                <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Shopping</a></p>
                <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Straws</a></p>

                <ul class="featured-items">
                  <p class=" pt-3 mb-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Ditch Plastic Bottles</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Waste Free Lunch</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Sustainable Straws</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Reusable Lunch Baggies</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Waste Free Grocery</a></li>
                </ul>
              </ul>
            </div>
            <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Cleaning'">
              <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Green Cleaning</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Household</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Laundry</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Air Purification</a></li>
                <li><a href="#" class="text-dark text-decoration-none">DIY Cleaning Supplies</a></li>

                <ul class="featured-items">
                  <p class=" pt-3 mb-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Healthy Laundry</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Non-Toxic</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Simple Home Cleaning</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Replace Paper Towels</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">A Better Sponge</a></li>
                </ul>
              </ul>
            </div>
            <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Body'">
               <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Bath & Body</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Deodorant</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Oral Care</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Period Care</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Hair Care</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Lotion</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Soaps & Bodywash</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Shaving</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Men's Body Care</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Sunscreen</a></li>

                <p class=" pt-3 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Facial Care</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Cleansers</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Toners</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Masks</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Moisturizers & Treaments</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Facial Sun Protection</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Lip Care</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Skincare Accessories</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Teen & Tween</a></li>
            
                <ul class="featured-items">
                  <p class=" pt-3 mb-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
                  <li><a href="#" class="text-dark text-decoration-none small-font">PitPack</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">SmilePack</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">MoonPack</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Safe Sunscreen</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Natural Facial Care</a></li>
                </ul>
              </ul>
            </div>
            <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Wellness'">
              <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Wellness</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Vitamins & Supplements</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Essential Oils</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Natural Remedies</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Bug Repellent</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Cloth Masks</a></li>
                
                <ul class="featured-items">
                  <p class=" pt-3 mb-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Natural Remedies</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Women's Vitamins</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Men's Vitamins</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Kid's Vitamins</a></li>
                </ul>
              </ul>
            </div>
            <div class="submenu px-4 pb-1" v-if="nav.menuOpen && nav.heading == 'Kids'">
              <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Kids</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Toys</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Kids Table</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Bath & Body Care</a></li>

                <ul class="featured-items">
                  <p class=" pt-3 mb-2" ><a href="#" class="mighty-blue font-weight-bolder text-decoration-none">Featured Collections</a></p>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Healthy Kids Body Care</a></li>
                  <li><a href="#" class="text-dark text-decoration-none small-font">Natural Baby Body Care</a></li>
                </ul>
              </ul>
            </div>
            <div class="submenu px-4 pb-3" v-if="nav.menuOpen && nav.heading == 'Pets'">
              <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Pets</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Treats & Toys</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Grooming</a></li>
                <li ><a href="#" class="text-dark text-decoration-none">Supplements & Remedies</a></li>
              </ul>
            </div>
            <div class="submenu px-4 pb-3" v-if="nav.menuOpen && nav.heading == 'Sale'">
              <ul class="submenu-list">
                <p class=" pt-2 mb-2" ><a href="#" class="text-dark font-weight-bolder text-decoration-none">Sales</a></p>
                <li><a href="#" class="text-dark text-decoration-none">Holiday</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Kitchen & Table</a></li>
                <li><a href="#" class="text-dark text-decoration-none">On-The-Go</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Green Cleaning</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Wellness</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Body</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Kids</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Pets</a></li>
              </ul>
            </div>
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
        isOpen: false,
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
    padding: 2px;
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
  .submenu-list li {
    padding: 4px 0;
  }
  .featured-items li {
    border: none
  }
  .small-font {
    font-size: 11px;
  }
</style>