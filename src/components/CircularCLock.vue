<template>
    <div class="clock">
        <div class="arw hurs-arw" :style="{transform: `translateX(-50%) rotate(calc(${hurs}/12 * 360deg))`}"></div>
        <div class="arw mens-arw" :style="{transform: `translateX(-50%) rotate(calc(${mens}/60 * 360deg))`}"></div>
        <div class="arw secs-arw" :style="{transform: `translateX(-50%) rotate(calc(${secs}/60 * 360deg))`}"></div>
        <div class="mdle"></div>
    </div>
</template>

<script>
let interval;
export default {
    name: "CircularCLock",
    props: {
        time: {
            type: Object
        },
        
    },
    data() {
        return {
            secs: 0,
            mens: 0,
            hurs: 0
        };
    },
    methods: {
        showTime() {
            if (Object.keys(this.time).length != 0) {
                this.hurs = this.time.hurs;
                this.mens = this.time.mens;
                this.secs = new Date().getSeconds();

                clearInterval(interval);
            }
            else {
                const date = new Date();

                this.secs = date.getSeconds();
                this.mens = date.getMinutes();
                const rawHurs = date.getHours();
                this.hurs = rawHurs > 12 ? rawHurs - 12: rawHurs;
            }
        }
    },
    beforeMount() {
      this.showTime();
      interval = setInterval(this.showTime, 1000);
    },
    watch: {
        time: function () { this.showTime();}
    }
}
</script>

<style lang="scss" scoped>
    .clock {
        position: relative;

        width: 150px;
        height: 150px;

        border-radius: 50%;
        border: #7f7f7f solid 5px;
    }
    .clock > .arw {
        transform: translateX(-50%);
        transform-origin: center bottom;
        position: absolute;
        bottom: 50%;
        left: 50%;

        width: 5px;
        height: 40%;

        background: #7f7f7f;
    }

    .clock > .hurs-arw {
        height: 25%;
    }
    .clock > .secs-arw {
        width: 2.5px;
    }

    .mdle {
        width: 10px;
        height: 10px;
        
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        background: #7f7f7f;
        border-radius: 50%;
    }
</style>