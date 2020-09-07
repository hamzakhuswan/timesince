F<template>
    <div class="clock">
        <div class="arw hurs-arw" :style="{transform: `translateX(-50%) rotate(calc(${hurs}/60 * 360deg))`}"></div>
        <div class="arw mens-arw" :style="{transform: `translateX(-50%) rotate(calc(${mens}/60 * 360deg))`}"></div>
        <div class="arw secs-arw" :style="{transform: `translateX(-50%) rotate(calc(${secs}/60 * 360deg))`}"></div>
        <div class="mdle"></div>
    </div>
</template>

<script>
export default {
    name: "CircularCLock",
    props: ["timerKey"],
    data() {
        return {
            secs: 0,
            mens: 0,
            hurs: 0
        };
    },
    methods: {
        compute() {
            let date;
            if (Object.keys(this.timerKey).length != 0) date = new Date(this.timerKey.date);
            else date = new Date();

            this.secs = date.getSeconds();
            this.mens = date.getMinutes();
            const rawHurs = date.getHours();
            this.hurs = rawHurs > 12 ? rawHurs - 12: rawHurs;
        }
    },
    beforeMount() {
      this.compute();
      setInterval(()=>{
          this.compute();
      }, 1000)
    },
    watch: {
        timerKey: () => {
                 let date;
            if (Object.keys(this.timerKey).length != 0) date = new Date(this.timerKey.date);
            else date = new Date();

            this.secs = date.getSeconds();
            this.mens = date.getMinutes();
            const rawHurs = date.getHours();
            this.hurs = rawHurs > 12 ? rawHurs - 12: rawHurs;
        }
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