<template>
  <div class="timers-settings">
    <Settings myClass="content">
        <DatePicker :date="oldDate" @passDate="passDate"/>
        <div class="input">
          <CircularCLock :time="time" />
          <TimersFields :timers="timers" @adding="adding" @showDate="passOldDate" @showTime="passTime"/>
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
      oldDate: {},
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
    // To prevously defined date
    passOldDate(date) {
      this.oldDate = Object.assign({}, this.oldDate, date);
    },
    // This one is for new picked date from the date picker
    passDate(date) {
      this.date = Object.assign({}, this.date, date);
    },
    adding(message) {
      if (Object.keys(this.date).length == 0 || Object.keys(this.time).length == 0) return console.log("Invalid time");
      const date = new Date(this.date.year, this.date.mnth - 1, this.date.days, this.time.hurs, this.time.mens, this.time.secs);

      const newDate = {message, date};

      if (!Array.isArray(this.timers))  this.timers = [newDate];
      else this.timers.push(newDate);
          
      localStorage.setItem("timers", JSON.stringify(this.timers));
      
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