<template>
    <div class="date-picker" :class="{wrong: dateError}">
        <div>
            <div class="navigation">
                <div class="btn" @click="prev"><div class="arrow left"></div></div>
                <div class="date">
                    <input type="number" min="0" :max="totDays" autocomplete="off" v-model.number="days" id="days" placeholder="DD">
                    <input type="number" min="0" max="12" autocomplete="off" v-model.number="mnth" id="mnth" placeholder="MM">
                    <input type="number" min="0" max="9999" autocomplete="off" v-model.number="year" id="year" placeholder="YYYY">
                </div>
                <div class="btn" @click="next"><div class="arrow right"></div></div>
            </div>
        </div>
        <div class="calendar" v-if="totDays">
            <div class="day" :class="{active: days == i}" v-for="i in totDays" :key="i" @click="days = i">{{i}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    props: ["date", "dateError"],
    data() {
        return {
            year: "",
            mnth: "",
            days: "",
            totDays: 0
        };
    },
    beforeMount() {
        this.update(new Date());
    },
    methods: {
        update(date) {
            this.year = date.getFullYear();
            this.mnth = date.getMonth() + 1;
            this.days = date.getDate();
            this.totDays = new Date(this.year, this.mnth, 0).getDate();
        },
        passData(){
            this.$emit("passDate", {
                year: this.year,
                mnth: this.mnth,
                days: this.days
            });
        },
        prev() {
            if(this.mnth == "") return;
            else if(this.mnth <= 0) {
                this.mnth = 12;
                this.year--;
            } else {
                this.mnth--;
            }
        },
        next() {
            if(this.mnth == "") return;
            else if (this.mnth >= 12) {
                this.mnth = 1;
                this.year++;
            } else {
                this.mnth++;
            }
        },
        formatDigits(n, length) {
            const len = n.toString().length;
            if (len >= length || n == 0) return n;
            return "0".repeat(length - len) + n;
        }
    },
    watch: {
        year(val, oldVal) {
            this.year = this.year <= 9999 && this.year >= 0 ? this.formatDigits(this.year, 4) : oldVal;
            this.passData();
        },
        mnth(oldVal)  {
            this.mnth = this.mnth < 12 && this.mnth >= 0 ? this.formatDigits(this.mnth, 2): oldVal;
            this.passData();
        },
        days(val, oldVal) {
            this.days = this.days <= this.totDays && this.days >= 0 ? this.formatDigits(this.days, 2): oldVal;
            this.passData();
        },
        date() {
            this.update(new Date(this.date.year, this.date.mnth - 1, this.date.days))
        }
    }

}
</script>

<style lang="scss" scoped>
.date-picker {
    position: relative;
    z-index: 2;
    
    overflow: hidden;

    display: inline-block;
    width: 100%;
    max-width: 350px;

    background: #7f7f7f;
    color: #fff;

    border-radius: 4px;

    .navigation {
        width: 100%;
        height: 100px;
    
        display: flex;
        justify-content: space-around;
        align-items: center;
        .date {
            height: 100px;
            width: 150px;
            
            display: flex;
            justify-content: center;
            align-items: center;
            input {
                width: 50px;
                height: inherit;

                border: 0;
                background: transparent;
                color: #fff;
                text-align: center;
            }
            input:focus {
                outline: none;
            }
            input::-webkit-calendar-picker-indicator{
                display: none;
            }
        }


        .btn {
            width: 50px;
            height: 50px;
            
            line-height: 50px;
            
            color: #fff;
            background: #00000010;
            border: none;
            border-radius: 50%;
            
            cursor: pointer;
            
            display: flex;
            justify-content: center;
            align-items: center;
            
            &:hover{ 
                background: #00000020;
            }

            &:active {
                outline: none;
            }
        }
    }    

    .calendar {
        min-height: 200px;
    
        display: grid;
        grid-template-columns: repeat(7, 1fr);

        .day {
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;
            border-radius: 5px;
            &:hover, &.active {
                background: rgba(0, 255, 0, 0.1);
            }
        }
    }
}
</style>