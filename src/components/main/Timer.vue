<template>
	<div class="timer">
		<h2>{{data.message}}</h2>
		<div>{{days}} days</div>
		<div>{{hurs}} {{mens}} {{secs}}</div>
	</div>
</template>

<script>
export default {
	name: "Timer",
	props: ["data"],
	methods: {
		update() {
			const curDate = new Date().getTime();
			const tarDate = this.data.tarDate.getTime();

			let timeDiff;
			if (tarDate > curDate) timeDiff = tarDate - curDate;
			else timeDiff = curDate - tarDate;

			let mem;
			mem = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
			this.days = mem;
			timeDiff -= mem * 1000 * 60 * 60 * 24;

			mem = Math.floor(timeDiff / 1000 / 60 / 60);
			if (mem.toString().length == 1) this.hurs = "0" + mem;
			else this.hurs = mem;
			timeDiff -= mem * 1000 * 60 * 60;

			mem = Math.floor(timeDiff / 1000 / 60);
			if (mem.toString().length == 1) this.mens = "0" + mem;
			else this.mens = mem;
			timeDiff -= mem * 1000 * 60;

			mem = Math.floor(timeDiff / 1000);
			if (mem.toString().length == 1) this.secs = "0" + mem;
			else this.secs = mem;
			timeDiff -= mem * 1000;
		},
	},
	data() {
		return {
			days: "",
			hurs: "",
			mens: "",
			secs: "",
		};
	},
	beforeMount() {
		this.update();
		setInterval(() => {
			this.update();
		}, 1000);
	},
};
</script>

<style lang="scss" scoped>
.timer {
	color: #f6f8fb;
	font-size: 24px;
	text-align: center;
	background: rgba(196, 196, 196, 0.2);
	padding: 30px 20px;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	h2 {
		margin: 0px;
	}
}
</style>