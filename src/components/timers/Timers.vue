<template>
	<div class="timers">
		<Timer
		v-for="timer in timers"
		:key="timer.id"
		:data="{tarDate: new Date(timer.date), message: timer.message}"
		/>
	</div>
</template>

<script>
import Timer from "./Timer"
export default {
	name: "Timers",
	data() {
		return {
			timers: [],
            curTime: new Date()
		};
    },
    beforeMount() {
		this.timers = JSON.parse(localStorage.getItem("timers"));
		
        setInterval(()=> {
            this.curTime = new Date();
        }, 1000);
    },
	components: {
		Timer
	}
};
</script>

<style lang="scss" scoped>
.timers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	height: 300px + (20px * 2);  // Backup for fit-content
	height: fit-content;
	max-height: 300px + (20px * 2);
    gap: 20px;
	overflow-y: auto;
}

@media screen and (max-width: 768px) {
	.timers {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
}
@media (min-height: 900px) {
	.timers {
		height: 600px + (20px * 2);
		height: fit-content;
		max-height: 600px + (20px * 2);
	}
}
</style>