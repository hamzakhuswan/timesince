<template>
  <Settings class="content">

      <div class="content">

        <p class="insturctions">Specify a date to count from or to, then choose a name and add.</p>

        <div class="settingsContent">
          <div class="input">
            <CircularCLock :time="time" />
            <TimersFields 
              :msgError="msgError"
              :timeError="timeError"
              :timers="timers" 
              @changeFocus="changeFocus" 
              @deleting="deleting" 
              @adding="adding" 
              @changing="changing"
              @showDate="passOldDate" 
              @showTime="passTime"/>
          </div>
          <DatePicker :dateError="dateError" :date="oldDate" @passDate="passDate"/>
        </div>

      </div>
  </Settings>
</template>

<script>
import Settings from "../components/Settings"
import DatePicker from "../components/timers/DatePicker"
import CircularCLock from "../components/timers/CircularCLock"
import TimersFields from "../components/timers/TimersFields"
export default {
  name: "Timers",
  data() {
    return {
      focus: "",
      timers: JSON.parse(localStorage.getItem("timers")),
      oldDate: {},
      date: {},
      time: {},
      msgError: false,
      timeError: false,
      dateError: false
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
    removeErors() {
      this.timeError = false;
      this.dateError = false;
      this.msgError = false;
    },
    adding(message) {
      this.removeErors();
      console.log();
      if(message == '') {console.log("hello"); return this.msgError = true}
      else if (Object.keys(this.date).length == 0) return this.dateError = true;
      else if (Object.keys(this.time).length == 0) return this.timeError = true;
      else if (this.date.year == "" || this.date.mnth == "" || this.date.days == "") return this.dateError = true;
      const date = new Date(this.date.year, this.date.mnth - 1, this.date.days, this.time.hurs, this.time.mens, this.time.secs);

      const newDate = {message, date};

      if (!Array.isArray(this.timers))  this.timers = [newDate];
      else this.timers.push(newDate);
          
      localStorage.setItem("timers", JSON.stringify(this.timers));
      

      // Root event to update the timers in main page
      this.$root.$emit('updating');
    },
    deleting () {
      this.removeErors();
      if (this.timers.length < this.focus) return console.log("false value");
     
     this.timers = this.timers.filter(timer => timer !== this.timers[this.focus]);
      localStorage.setItem("timers", JSON.stringify(this.timers));
      this.$root.$emit('updating');

    },
    changing(message) {
      this.removeErors();
      if(message == '') {console.log("hello"); return this.msgError = true}
      else if (Object.keys(this.date).length == 0) return this.dateError = true;
      else if (Object.keys(this.time).length == 0) return this.timeError = true;
      else if (this.date.year == "" || this.date.mnth == "" || this.date.days == "") return this.dateError = true;
      else if (this.timers.length < this.focus) return console.log("false value")

      const date = new Date(this.date.year, this.date.mnth - 1, this.date.days, this.time.hurs, this.time.mens, this.time.secs);
      this.timers[this.focus].date = date;

      this.timers[this.focus].message = message;
      localStorage.setItem("timers", JSON.stringify(this.timers));
      this.$root.$emit('updating');
    },
    changeFocus(f) {
      this.focus = f;
    },

  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

.insturctions {
  font-size: 24px;
  margin-bottom: 80px;
}

.settingsContent {
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;

  .input {
    max-width: 350px;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

@media (max-width: 1200px) {
  .content {
    display: block;
  }
  .settingsContent {
    display: block;
    > * {
      margin: 0 auto 50px;
    }
  }

}
 
</style>