<template>
  <div class="timers-settings">
    <Settings myClass="content">
        <DatePicker/>
    </Settings>
  </div>
</template>

<script>
import Settings from "../components/Settings"
import DatePicker from "../components/DatePicker"
export default {
  name: "Timers",
  components: {
    Settings,
    DatePicker
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>