<template>
	<div class="timers">
		<Timer
		v-for="timer in timers"
		:key="timer.id"
		:data="{tarDate: timer.date, message: timer.message}"
		/>
	</div>
</template>

<script>
import Timer from "./Timer"
export default {
	name: "Timers",
	data() {
		return {
			timers: [
				{
					id: "sk203",
					message: "Hello World!",
					date: new Date(2020, 8, 3),
				},
				{
					id: "bd142",
					message: "Time to 2021",
					date: new Date(2021, 0, 0),
				}
            ],
            curTime: new Date()
		};
    },
    beforeMount() {
        setInterval(()=> {
            this.curTime = new Date();
        }, 1000);
    },
	components: {
		Timer
	}
};
</script>

<style>
.timers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	height: calc(100vh - 300px + (20px * 2));
	max-height: 1500px;
    gap: 20px;
	overflow-y: auto;
}

@media screen and (max-width: 768px) {
	.timers {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
}
</style>