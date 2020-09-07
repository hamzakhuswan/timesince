<template>
    <div class="fields">
        <div class="timers">
            <button class="timer" v-for="timer in timers" :key="timer.id" @click="showTimer(timer.id)">{{timer.message}}</button>
            <button class="timer">Add New</button>
        </div>
        <button class="conform">ADD</button>
    </div>
</template>

<script>
export default {
    name: "TimersFields",
    props: ["timers"],
    // beforeMount() {
    //     console.log(this.timers);
    // },
    methods: {
        showTimer(key) {
            this.$emit("showTimer", key);
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