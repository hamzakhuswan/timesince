<template >
	<div id="app">
		<GradientBackground />
		<div class="container">
			<Clock />
			<Timers style="margin-top: 50px" />
			<SettingsIcon style="position: absolute; bottom: 40px; right: 20px;"/>
		</div>
		<router-view/>
	</div>
</template>

<script>
import GradientBackground from "./components/main/GradientBackground";
import Clock from "./components/main/Clock";
import Timers from "./components/main/Timers";
import SettingsIcon from "./components/main/SettingsIcon"
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
	font-family: "Manrope";
	src: url("./assets/fonts/Manrope-Regular.ttf");
}

* {
	box-sizing: border-box !important;
}

body {
	font-family: "Manrope";
	overflow: hidden;
	margin: 0;
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
	padding: 5px;

	display: flex;
	justify-content: center;
	flex-direction: column;
}

.arrow {
	border: solid #fff;
	border-width: 0 5px 5px 0;
	display: inline-block;
	padding: 5px;
}
.bottom {
	transform: rotate(45deg);
}
.left {
	transform: rotate(135deg);
}
.right {
	transform: rotate(-45deg);
}

::placeholder {
	color: rgba(255,255,255, 0.7);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input[type=number] {
	-moz-appearance: textfield;
}
</style>
