<template >
  <div id="app">
    <GradientBackground />
  </div>
</template>

<script>
import GradientBackground from './components/GradientBackground'

export default {
  name: 'App',
  components: {
    GradientBackground
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
