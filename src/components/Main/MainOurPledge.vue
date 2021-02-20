<template>
  <div class="main-our-pledge-container py-5 text-center">
      <h3>Our Pledge To You</h3>
      <p class="font-weight-lighter px-4 px-lg-5 mx-lg-auto my-lg-4">We make it easier for families to create a healthy home. Each of our products has been thoroughly researched to be free of concerning chemicals and hand-picked for its quality and design.</p>

      <div class="trusted-list container-fluid  text-secondary mx-3 m-auto">
        <div class="row">
          <div class="col-12 col-md-4 no-gutters p-0">
            <img src="../../images/trustedSeal-03f8a2b5b4b0db10945f90e60eaccf9ba1edd5c4e848a158f9932fda1605e2e2.png" alt="Trusted seal">
          </div>
            <div class="col col-md-5 text-left p-md-0 align-self-md-center">
              <ul class="list-unstyled ">
                <li class="py-1"><font-awesome-icon class="mx-1" icon="check"></font-awesome-icon> Made with Real Materials</li>
                <li class="py-1"><font-awesome-icon class="mx-1" icon="check"></font-awesome-icon> Time Tested, Durable</li>
                <li class="py-1"><font-awesome-icon class="mx-1" icon="check"></font-awesome-icon> Safe Alternatives that work</li>
              </ul>
            </div>
            <div class="col col-md-3 text-left p-md-0 align-self-md-center">
              <ul class="list-unstyled">
                <li class="py-1"><font-awesome-icon class="mx-1" icon="times"></font-awesome-icon> No BPA</li>
                <li class="py-1"><font-awesome-icon class="mx-1" icon="times"></font-awesome-icon> No Phthalates</li>
                <li class="py-1"><font-awesome-icon class="mx-1" icon="times"></font-awesome-icon> No Lead</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MainOurPledge'
}
</script>

<style scoped>
  .main-our-pledge-container > p {
  font-size: 16px;
}
.trusted-list li {
  max-width: 800px;
  font-size: 14px;
}

@media (min-width: 767px) {
  .main-our-pledge-container > p {
    font-size: 20px;

  }
  .trusted-list {
    max-width: 800px;
  }

  .trusted-list li {
  font-size: 18px;
  }
}

@media (min-width: 992px) {
  .main-our-pledge-container > p {
    max-width: 800px;
  }
}

</style>