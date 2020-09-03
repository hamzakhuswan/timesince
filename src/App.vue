<template >
	<div id="app">
		<GradientBackground />
		<div class="container">
			<Clock />
			<Timers style="margin-top: 50px" />
			<SettingsIcon style="position: absolute; bottom: 40px; right: 20px;"/>
		</div>
		<router-view />
	</div>
</template>

<script>
import GradientBackground from "./components/GradientBackground";
import Clock from "./components/Clock";
import Timers from "./components/timers/Timers";
import SettingsIcon from "./components/SettingsIcon"
import Settings from "./components/Settings"
export default {
	name: "App",
	components: {
		GradientBackground,
		Clock,
		Timers,
		SettingsIcon,
		Settings
	},
};
</script>

<style lang="scss">
@font-face {
	font-family: "Manrope", sans-serif;
	src: url("./assets/fonts/Manrope-Regular.ttf") format("truetype");
}

* {
	box-sizing: border-box;
}

body {
	overflow: hidden;
	font-family: "Manrope", sans-serif;
	width: 100vw;
	height: 100vh;
}

.container {
	width: 100%;
	max-width: 1080px;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	z-index: 4;

}
</style>
