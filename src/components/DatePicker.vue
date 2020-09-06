<template>
    <div class="date-picker">
        <div>
            <div class="navigation">
                <div class="btn" @click="decrement"><div class="arrow left"></div></div>
                <div class="date">
                    <input type="text" autocomplete="off" @input="checkDays" :value="days" id="days" placeholder="DD">
                    <input type="text" autocomplete="off" @input="checkMnth" :value="mnth" id="mnth" placeholder="MM">
                    <input type="text" autocomplete="off" @input="checkYear" :value="year" id="year" placeholder="YYYY">
                </div>
                <div class="btn" @click="increment()"><div class="arrow right"></div></div>
            </div>
        </div>
        <div class="calendar">
            <div class="day" :class="{active: days == i}" v-for="i in totDays" :key="i" @click="goDate(i)">{{i}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    data() {
        return {
            // Date and time
            year: 0,
            mnth: 0,
            days: 0,
            totDays: 0,
            computedDays: this.days > 31? 31 : this.days >= 0 ? 1 : this.days
        };
    },
    beforeMount() {
        this.init(new Date());
    },
    methods: {
        init(date) {
            if (date) {
                this.year = date.getFullYear();
                this.mnth = date.getMonth() + 1;
                this.days = date.getDate();
                this.totDays = new Date(this.year, this.mnth, 0).getDate()  
            } else  {
                this.totDays = new Date(this.year, this.mnth, 0).getDate()  
            }
        },
        goDate(i) {
            this.days = i;
        },
        increment () {
            if (this.mnth != 12) this.mnth++;
            else {
                this.mnth = 1;
                this.year++;
            }

            this.init();
        },
        decrement () {
            if (this.mnth != 1) return this.mnth--;

            this.mnth = 12;
            this.year--;
            
        },
        checkDays(e) {
            const value = e.currentTarget.value;
            if ((parseInt(value) > 0 && parseInt(value) <= this.totDays) || value == "") {
                this.days = parseInt(value);
            } else {
                 e.currentTarget.value = this.days;
            }

            this.totDays = new Date(this.year, this.mnth, 0).getDate();

        },
        checkMnth(e) {
            const value = e.currentTarget.value;
            if ((parseInt(value) > 0 && parseInt(value) <= 12) || value == "") {
                this.mnth = parseInt(value);
            } else {
                 e.currentTarget.value = this.mnth;
            }

            this.totDays = new Date(this.year, this.mnth, 0).getDate();
        },
        checkYear(e) {
            const value = e.currentTarget.value;
            if ((parseInt(value) > 0 && parseInt(value) < 9999) || value == "") {
                this.year = parseInt(value);
            } else {
                 e.currentTarget.value = this.year;
            }

            this.totDays = new Date(this.year, this.mnth, 0).getDate()  

        },
    },

}
</script>

<style lang="scss" scoped>
.date-picker {
    overflow: hidden;

    display: inline-block;
    min-width: 300px;

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
            ::placeholder {
                color: white;
                opacity: 0.7;
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
            .arrow {
                border: solid #fff;
                border-width: 0 5px 5px 0;
                display: inline-block;
                padding: 5px;
            }
            .left {
                transform: rotate(135deg);
            }
            .right {
                transform: rotate(-45deg);
            }
        }
    }    

    .calendar {
        min-height: 300px;
    
        display: grid;
        grid-template-columns: repeat(7, calc(400px / 7));

        .day {
            width: calc(400px / 7);
            height: calc(400px / 7);
            line-height: calc(400px / 7);
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