<template>
  <div class="timers-settings">
    <Settings myClass="content">
        <DatePicker :date="date" :timers="timers"/>
        <div class="input">
          <CircularCLock :time="time" />
          <TimersFields :timers="timers" @showDate="passDate" @showTiming="passTime"/>
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
      date: {},
      time: {}
    }
  },
  components: {
    Settings,
    DatePicker,
    CircularCLock,
    TimersFields
  },
  methods: {
    passTime(time) {
        // Creating new reactive instance. Explination:
        // https://vuejs.org/v2/guide/reactivity.html#For-Objects
        this.time = Object.assign({}, this.time, time);
    },
    passDate(date) {
      this.date = Object.assign({}, this.date, date);
    },
    addTimer(t) {
      const time = t.split(":");
      this.time = {hurs: time[0], mens: time[1]};
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