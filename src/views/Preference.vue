<template>
  <div class="preference">
    <Settings>
      <h1>Here you will find other settings like, maybe synchronisation with cloud.</h1>
      <div>
        <span>Do you see bug or improvement importunity. Please contact me</span> <a href="mailto:hamzakhuswan@outlook.com">here</a>
      </div>
    </Settings>
  </div>
</template>

<script>
import Settings from "../components/Settings"
export default {
  name: "Preference",
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