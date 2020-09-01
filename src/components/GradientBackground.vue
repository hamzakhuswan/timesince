<template>
  <div class="gradient_background">
    <div class="bg" :style="{background: clr1}"></div>
    <div class="bg" :class="{hidden: toggle}" :style="{background: clr2}"></div>
    <div class="dark"></div>
  </div>
</template>

<!--
  When trasitioning should be the first layer
  When is hidden should be in bottom
-->
<script>
let colors = [
  "#E5EAEF",
  "#D98881",
  "#EA9992",
  "#84CBBB",
  "#84CB88",
  "#75B3F0",
  "#97D5F2",
  "#9B51E0",
];

export default {
  name: "GradientBackground",
  data() {
    return {
      clr1: this.getGrad(),
      clr2: this.getGrad(),
      toggle: true,
    };
  },
  methods: {
    getClr() {
      // Get random color from the list
      return colors[Math.round(Math.random() * (colors.length - 1))];
    },
    getPos() {
      // Get postion (number 0-100)
      return Math.round(Math.random() * 100);
    },
    getGrad() {
      // Contstruct the gradient
      const bldClr = this.getClr();
      return `conic-gradient(at ${this.getPos()}% ${this.getPos()}%, ${bldClr}, ${this.getClr()}, ${this.getClr()}, ${this.getClr()}, ${this.getClr()}, ${bldClr})`;
    },
    swtchGrad() {
      // Change layer 2 color when it is hidden
      if (this.toggle) this.clr2 = this.getGrad();
      else this.clr1 = this.getGrad();

      this.toggle = !this.toggle;
    }
  },
  beforeMount() {
    // Swhich colors every couple of seconds
    setInterval(() => {
      this.swtchGrad();
    }, 5000);
  },
};
</script>

<style lang="scss">
.bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scale(1.5);
  filter: blur(15px);
  transition: opacity 2.5s ease;
  z-index: -1;
}

.dark {
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  transform: scale(1.5);
  background: rgba(0,0,0,0.5);
  z-index: 1;
}

.hidden {
  opacity: 0;
}
</style>