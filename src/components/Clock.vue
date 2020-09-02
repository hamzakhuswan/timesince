<template>
	<div class="clock">
		<div class="font-lg center glow">
			{{hurs}} &nbsp;
			{{mens}} &nbsp;
			{{secs}}
			<!-- text transition -->
		</div>
		<div class="font-md center glow">{{days}} {{mnth}} {{year}}</div>
	</div>
</template>

<script>
export default {
	name: "Clock",
	data() {
		return {
			secs: "",
			mens: "",
			hurs: "",
			days: "",
			mnth: "",
			year: "",
		};
	},
	methods: {
		updateClock() {
			let date = new Date(),
				secs = date.getSeconds().toString(),
				mens = date.getMinutes().toString(),
				hurs = date.getHours().toString();

			if (secs.length == 1) secs = "0" + secs;
			if (mens.length == 1) mens = "0" + mens;
			if (hurs.length == 1) hurs = "0" + hurs;

			this.secs = secs;
			this.mens = mens;
			this.hurs = hurs;

			if (hurs == "00" && secs == "00") updateDate();
		},
		updateDate() {
			let date = new Date();
			let days = date.getDay().toString();
			if (days.length == 1) days = "0" + (days - 1);
			this.days = days;

			let formatter = new Intl.DateTimeFormat("fr", { month: "short" });
			let mnth = formatter.format(date);
			this.mnth = mnth.replace(".", "");

			let year = date.getFullYear();
			this.year = year;
		},
	},
	beforeMount() {
		this.updateDate();
		this.updateClock();

		setInterval(() => {
			this.updateClock();
		}, 1000);
	},
};
</script>

<style>
.font-lg {
	font-size: 84px;
}

.font-md {
	font-size: 24px;
}
.glow {
	color: #f7f9fc;
	text-shadow: 0px 0px 5px #f7f9fc;
}
.center {
	text-align: center;
}
</style>