<template >
	<div id="app">
		<GradientBackground />
		<div class="container">
			<Clock />
			<Timers style="margin-top: 50px" />
		</div>
	</div>
</template>

<script>
import GradientBackground from "./components/GradientBackground";
import Clock from "./components/Clock";
import Timers from "./components/timers/Timers"
export default {
	name: "App",
	components: {
		GradientBackground,
		Clock,
		Timers
	},
};
</script>

<style lang="scss">
@font-face {
	font-family: "Manrope", sans-serif;
	src: url("./assets/fonts/Manrope-Regular.ttf") format("truetype");
}

body {
	overflow: hidden;
	font-family: "Manrope", sans-serif;

}

.container {
	width: 100%;
	max-width: 1080px;
	margin: 0 auto;
	position: relative;
	z-index: 4;
}
</style>
