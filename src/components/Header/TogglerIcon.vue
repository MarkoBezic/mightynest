<template>
<div @click="toggleSlide">
  <svg viewBox="0 0 100 80" width="40" height="30">
    <rect :class="[isOpen ? 'top-line' : 'top-line-closed']" x="13" y="15" width="75" height="8" rx="3"></rect>
    <rect :class="[isOpen ? 'middle-line' : 'middle-line-closed']" x="13" y="37" width="75" height="8" rx="3"></rect>
    <rect :class="[isOpen ? 'bottom-line' : 'bottom-line-closed']" x="13" y="59" width="75" height="8" rx="3"></rect>
  </svg>
</div>

</template>

<script>
export default {
  name: 'TogglerIcon',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleSlide(e){
      e.preventDefault;
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
svg {
  margin: 6px;
}
rect {
  fill: #666;
}
.top-line {
  transform: rotate(45deg) translate(10px, -22px);
  transition: .7s;
}
.top-line-closed {
  transform: rotate(0) translate(0,0);
  transition: .7s;
}
.middle-line {
  opacity: 0;
  transition: .7s;
}
.middle-line-closed {
  opacity: 1;
  transition: .7s;
}
.bottom-line {
  transform: rotate(-45deg) translate(-48px, -3px);
  transition: .7s;
}
.bottom-line-closed {
  transform: rotate(0) translate(0);
  transition: .7s;
}
</style>