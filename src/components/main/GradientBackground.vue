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
  "#54478C",
  "#2c699a",
  "#048ba8",
  "#0db39e",
  "#16db93",
  "#83e377",
  "#b9e769",
  "#efea5a",
  "#f1c453",
  "#f29e4c",
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
      const index = Math.round(Math.random() * (colors.length - 1));
      return colors[index];
    },
    getPos() {
      // Get postion (number 0-100)
      return Math.round(Math.random() * 100);
    },
    getGrad() {
      const shrClr = this.getClr();
      // Contstruct the gradient
      return `conic-gradient(at ${this.getPos()}% ${this.getPos()}%, ${shrClr}, ${this.getClr()}, ${this.getClr()}, ${this.getClr()}, ${this.getClr()}, ${shrClr})`;
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
  filter: blur(50px);
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
  background: rgba(0,0,0,0.35);
  z-index: 1;
}

.hidden {
  opacity: 0;
}
</style>