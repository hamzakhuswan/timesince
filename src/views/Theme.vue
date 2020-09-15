<template>
  <div class="theme-settings">
    <Settings>
      <h1>Here you will be able to change the theme.</h1>
    </Settings>
  </div>
</template>

<script>
import Settings from "../components/Settings"
export default {
  name: "Theme",
  components: {
    Settings
  }
}
</script>

<style scoped>
h1 {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>