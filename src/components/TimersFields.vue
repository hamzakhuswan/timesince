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
            <div class="timers" :class="{open: opened}" @click="opened = !opened" v-on-clickaway="away">
                <button class="timer main">
                    <span>{{togglar}}</span>
                    <div class="arrow bottom">
                </div></button>
                <button 
                    class="timer" 
                    :class="{hide: timers.indexOf(timer) == focus}"
                    v-for="timer in timers" 
                    :key="timer.id" 
                    @click="
                    update(timer.date);
                    passDate(timer.date);
                    focus = timers.indexOf(timer);
                    "><span>{{timer.message}}</span></button>

                <button class="timer clear" @click="clear">Clear</button>
            </div>

            <button 
                class="conform" 
                @click="(!focus && focus != 0) ?
                        adding() :
                        change()"
                >{{conform}}</button>
            <button class="delete" @click="remove">
                <img src="../assets/trash.svg" alt="remove">
            </button>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
    mixins: [ clickaway ],
    name: "TimersFields",
    props: ["timers"],
    data() {
        return {
            message: "",
            hurs: "",
            mens: "",
            secs: "",
            opened: false,
            focus: null,
            togglar: "Timers",
            conform: "ADD"
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
        },
        focus() {
            if (!this.focus && this.focus != 0) return
            console.log(this.timers[this.focus].message);

            this.message = this.timers[this.focus].message;
            this.togglar = this.timers[this.focus].message;
            this.conform = "UPDATE"
            this.$emit("changeFocus", this.focus);
        }
    },
    methods: {
        // Update varibles to triger watchers to pass Time
        update(dateString) {
            const d = new Date(dateString);

            this.hurs = d.getHours();
            this.mens = d.getMinutes();
            this.secs = d.getSeconds();  
        },
        passDate(dateString) {    
            const date = {};
            const d = new Date(dateString);
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
            console.log("hello");
            if(this.message == "") return console.log("Empty message");
            this.$emit("adding", this.message);
        },
        remove() {
            // Because vuejs treats empty strins as zeros
            if (!this.focus && this.focus != 0) return console.log("Nothing to delete");
            this.$emit("deleting");
            this.clear();
        },
        change() {
            console.log("hello");
            if(this.message == "") return console.log("Empty message");
            this.$emit("changing", this.message);
            this.clear();
        },
        away() {
            if (this.opened) this.opened = false;
        },
        clear() {
            // Detete the focused value
            this.focus = null;
            this.message = "";
            this.togglar = "Timers";
            this.passDate(new Date());

            this.secs = "";
            this.mens = "";
            this.hurs = "";
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
                width: calc(100% / 3);
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
            height: 150px;
            overflow: hidden;
            max-height: 50px;

            transition: all .6s ease;
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

                span {
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 100px;

                    margin: auto;
                }

                &.hide {
                    display: none;
                }
                &:focus {
                    outline: none;
                }
                &.main {
                    position: relative;
                    color:rgba(255,255,255, 0.7);
                    .arrow {
                        position: absolute;
                        top: 21px;
                        right: 10px;                
                    }

                }

                &.clear {
                    background: #AF9F9F;
                }
            }


            &.open {
                max-height: 300px;
                overflow: auto;
            }

        }
        .conform {
            width: 50%;
            height: 50px;

            font-size: 24px;
            background: #7FCC7F;
            color: #fff; 
            border: none;  
            cursor: pointer;
            &:hover {
                background: darken($color: #7FCC7F, $amount: 10%);
            }
        }
        .delete {
            width: 10%;
            height: 50px;

            font-size: 24px;
            background: #CC7F7F;
            color: #fff; 
            border: none;  

            cursor: pointer;

            img {
                vertical-align: middle;
            }

            &:hover {
                background: darken($color: #CC7F7F, $amount: 10%);
            }
        }
    }

 
  
</style>