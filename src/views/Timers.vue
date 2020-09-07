<template>
  <div class="timers-settings">
    <Settings myClass="content">
        <DatePicker  :timerKey="timerKey" :timers="timers"/>
        <div class="input">
          <CircularCLock :timerKey="timerKey" />
          <TimersFields :timers="timers" @showTimer="distribute"/>
        </div>
    </Settings>
  </div>
</template>

<script>
import Settings from "../components/Settings"
import DatePicker from "../components/DatePicker"
import CircularCLock from "../components/CircularCLock"
import TimersFields from "../components/TimersFields"
export default {
  name: "Timers",
  data() {
    return {
      timers: JSON.parse(localStorage.getItem("timers")),
      timerKey: {}
    }
  },
  components: {
    Settings,
    DatePicker,
    CircularCLock,
    TimersFields
  },
  methods: {
    distribute(key) {
      this.timerKey = this.timers.filter(timer => timer.id == key)[0];
    }
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .input {
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>