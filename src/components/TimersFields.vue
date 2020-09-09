<template>
    <div class="fields">
        <input type="time" @input="computeTimeInput">

        <div class="timers">
            <button class="timer" v-for="timer in timers" :key="timer.id" @click="computePreviousTimers(timer.date)">{{timer.message}}</button>
            <button class="timer">Add New</button>
        </div>
        <button class="conform" @click="addTimer()">ADD</button>
    </div>
</template>

<script>
export default {
    name: "TimersFields",
    props: ["timers"],
    data() {
        return {
            time: {},
            date: {},
        };
    },
    methods: {
        computePreviousTimers(d) {
            const date = new Date(d);

            this.time.hurs = date.getHours();
            this.time.mens = date.getMinutes();
            this.showTime();

            this.date.days = date.getDate();
            this.date.mnth = date.getMonth() + 1;
            this.date.year = date.getFullYear();
            this.showDate();
        },
        computeTimeInput(e) {
            const time = e.currentTarget.value.split(":");
            this.time.hurs = parseInt(time[0]);
            this.time.mens = parseInt(time[1]);

            this.showTime();
        },
        showTime() {
            this.$emit("showTiming", this.time);
        },
        showDate() {
            this.$emit("showDate", this.date);
        },
        // addTimer() {
        //     console.log(this.time);
        //     this.$emit("addTimer", this.time);
        // }
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