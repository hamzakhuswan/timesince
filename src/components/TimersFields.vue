<template>
    <div class="timerInputs">

        <div class="fields">
            <input type="text" class="input message" v-model="message" placeholder="Timer name">

            <div class="time">
                <input type="number" class="input nums" min="0" max="24" autocomplete="off" v-model.number="hurs" placeholder="HH">
                <input type="number" class="input nums" min="0" max="60" autocomplete="off" v-model.number="mens" placeholder="MM">
                <input type="number" class="input nums" min="0" max="60" autocomplete="off" v-model.number="secs" placeholder="SS">
            </div>   
        </div>

        <div class="btns">
            <div class="timers" :class="{close: closed}" @click="closed = !closed">
                <div class="arrow bottom"></div>

                <button class="timer new">New</button>
                <button class="timer" v-for="timer in timers" :key="timer.id" @click="passDate(timer.date); message = timer.message">{{timer.message}}</button>
            </div>

            <button class="conform" @click="adding">ADD</button>
        </div>
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
            closed: true
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
        passDate(dateString) {
            const d = new Date(dateString);

            this.hurs = d.getHours();
            this.mens = d.getMinutes();
            this.secs = d.getSeconds();
    
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
    .timerInputs {
        width: 100%;
    }


    .fields {
        margin: 25px 0;
        .input {
            background: #7f7f7f;
            color: #fff;
            border: none;
            outline: none;
            padding: 10px 40px;
            height: 50px;
        }
        .message {
            font-size: 24px;
        }
        .time {
            display: flex;
            justify-content: center;
            .nums {
                font-size: 16px;
            }
        }
    }

    
    .btns {
        width: 100%;
        height: 60px;

        display: flex;
        justify-content: space-between;

        .timers {
            width: 50%;
            height: 300px;
            max-height: 300px;
            overflow: auto;

            transition: all .6s ease;

            position: relative;
            scroll-snap-type: y mandatory;
            

            .timer {
                height: 50px;
                width: 100%;
                display: block;

                font-size: 24px;
                background: #9f9f9f;
                color: #fff; 
                border: none;   
                
                scroll-snap-align: start;
                cursor: pointer;
                

                &:focus {
                    outline: none;
                }
            }

            .arrow {
                position: absolute;
                top: 21px;
                right: 10px;                
            }

            &.close {
                overflow: hidden;
                max-height: 50px;
            }

        }
        .conform {
            width: 50%;
            height: 50px;

            font-size: 24px;
            background: #7FCC7F;
            color: #fff; 
            border: none;  
        }
    }

  
</style>