<template>
    <div class="fields">
        <input type="text" v-model="message">

        <div class="time">
            <input type="number" min="0" max="24" autocomplete="off" v-model.number="hurs" placeholder="HH">
            <input type="number" min="0" max="60" autocomplete="off" v-model.number="mens" placeholder="MM">
            <input type="number" min="0" max="60" autocomplete="off" v-model.number="secs" placeholder="SS">
        </div>        
        <div class="timers">
            <button class="timer" v-for="timer in timers" :key="timer.id" @click="passOld(timer.date)">{{timer.message}}</button>
            <button class="timer">Add New</button>
        </div>
        <button class="conform" @click="adding">ADD</button>
    </div>
</template>

<script>
export default {
    name: "TimersFields",
    props: ["timers"],
    data() {
        return {
            message: "",
            hurs: "",
            mens: "",
            secs: "",
        };
    },
    watch: {
        hurs: function (val, oldVal) {
            this.hurs = this.hurs <= 24 && this.hurs >= 0 ? this.hurs : oldVal;
            this.passTime();
        },
        mens: function (val, oldVal) {
            this.mens = this.mens <= 60 && this.mens >= 0 ? this.mens : oldVal;
            this.passTime();
        },
        secs: function (val, oldVal) {
            this.secs = this.secs <= 60 && this.secs >= 0 ? this.secs : oldVal;
            this.passTime();
        }
    },
    methods: {
        passOld(dateString) {
            const d = new Date(dateString);

            const time = {};
            time.hurs = d.getHours();
            time.mens = d.getMinutes();
            time.secs = d.getSeconds();
            this.$emit("showTime", time);
    
            const date = {};
            date.days = d.getDate();
            date.mnth = d.getMonth() + 1;
            date.year = d.getFullYear();
            this.$emit("showDate", date);
        },
        passTime(e) {
            const time = {};

            // If one of the is nut a valid number or empty string,
            // replace it with 0
            time.hurs = !this.hurs ? 0 : this.hurs;
            time.mens = !this.mens ? 0 : this.mens;
            time.secs = !this.secs ? 0 : this.secs;

            this.$emit("showTime", time);
        },
        adding() {
            if(this.message == "") return console.log("Empty message");
            this.$emit("adding", this.message);
        }
    }
}
</script>

<style lang="scss" scoped>
    // .fields{
    //     width: 100%;
    //     height: 60px;

    //     display: flex;
    //     justify-content: space-between;
    //     .timers {
    //         width: 50%;
    //         height: inherit;

    //         overflow: auto;
    //         scroll-snap-type: y mandatory;

    //     }
    //     .timer, .conform { 
    //         display: block;
    //         height: inherit;
    //         border: none;

    //         cursor: pointer;
    //         color: #fff;
    //         font-size: 24px;

    //         &:focus {
    //             outline: none;
    //         }
    //     }

    //     .timer {
    //         scroll-snap-align: start;
    //         background: #9f9f9f;
    //         width: 100%;
    //     }
    //     .conform {
    //         background: #7FCC7F;
    //         width: 50%;
    //     }
    // }
</style>