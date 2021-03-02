<template>
  <div class="blog-dropdown-container">
    <div class="row">
      <div class="col col-left p-4">
        <h6 class="mighty-blue py-2">MIGHTY<b>LIVING</b> BLOG</h6>
        <p>Helpful inspiration from MightyNest and out favorite bloggers, including guides for living your mightiest life.</p>
        <p>Join the MightyNest newsletter to get updates delivered to your inbox</p>
        <button class="btn-signup text-white border-0 my-1">SIGN ME UP!</button>
      </div>
      <div class="col col-right px-5 py-4">
        <h6 class="mighty-blue py-2">RECENT POSTS</h6>
        <div class="row py-2">
          <div class="col-4">
            <img src="../../images/MN_IG-1_IllustrationFinal.jpg" alt="Three different arms holding eachothers wrists">
          </div>
          <div class="col-8 d-flex flex-column justify-content-center">
            <p class="m-0 ">A Message to our Community</p>
            <a class="m-0 pt-1" href="#">Read post</a>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-4">
            <img src="../../images/480x480_blogPost_generic_2x.png" alt="Three different arms holding eachothers wrists">
          </div>
          <div class="col-8 d-flex flex-column justify-content-center pr-0" >
            <p class="m-0">A note to our community regarding COVID-19</p>
            <a class="m-0 pt-1" href="#">Read post</a>
          </div>
        </div>       
        <div class="row py-2">
          <div class="col-4">
            <img src="../../images/4Gummies.jpg" alt="Three different arms holding eachothers wrists">
          </div>
          <div class="col-8 d-flex flex-column justify-content-center">
            <p class="m-0">Your Cheat Sheet to Immune Boosting Vitamins</p>
            <a class="m-0 pt-1" href="#">Read post</a>
          </div>
        </div> 
        <div class="horizontal-line mt-2 mb-3"></div>  
        <a href="#">See all posts</a>              
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDropdown'
}
</script>

<style scoped>
  .blog-dropdown-container {
    background: white;
    transform: translateX(-667px);
    width: 750px;
    height: 490px;
    z-index: 2;
    box-shadow: -3px 12px 45px -10px; 
  }

  .col-left {
    background: #f1f1f1;
    height: 490px;
  }

  .col-left p {
    font-size: 16px;
    color: #999;
    font-weight: lighter;
  }

  .col-8 p {
    font-size: 16px;
    color: #888;
    line-height: 19px;
  }

  .btn-signup {
    background: #05afc6;
    height: 50px;
    width: 200px;
    font-size: 16px;
  }

  .btn-signup:hover {
    background: #0398ac;
  }

   .btn-signup:active {
    background: #038799;
  }

  .horizontal-line {
    border-top: 1px #05afc6 dotted;
  }

  a {
    color: #05afc6;
  }

  a:hover {
    color: #05afc6;
  }

  a:visited {
    text-decoration: none;
  }

</style>