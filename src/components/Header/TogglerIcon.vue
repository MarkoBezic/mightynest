<template>
  <svg viewBox="0 0 100 80" width="40" height="30">
    <rect x="13px" y="15" width="75" height="8" rx="3"></rect>
    <rect x="13px" y="37" width="75" height="8" rx="3"></rect>
    <rect x="13px" y="59" width="75" height="8" rx="3"></rect>
  </svg>
</template>

<script>
export default {
  name: 'TogglerIcon',
}
</script>

<style scoped>
svg {
  margin: 6px;
}
  rect {
    fill: #666;
  }
</style>