<template>
  <div class="settings">
    <div class="holder">
      <div class="nav-section">
          <!-- <svg width=50px height=50px viewBox="-25 -25 90 90">
              <polyline points="0,25 25,50, 50,25 25,0" fill="#0033FF99" />
          </svg> -->
          <router-link :class="{active: $route.name == 'Timers'}" to="/timers">Timers</router-link>
          <router-link :class="{active: $route.name == 'Theme'}" to="/theme">Theme</router-link>
          <router-link :class="{active: $route.name == 'Preference'}" to="/preference">Prefernce</router-link>
      </div>
      <div class="settings-content">
        <slot></slot>
      </div>
      <router-link class="exit" to="/">
        <svg height="15" width="15">
          <circle cx="7.5" cy="7.5" r="7.5"  fill="red" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "settings",
}
</script>

<style scoped lang="scss">
  .settings {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 6;
    background: rgba(0, 0, 0, 0.7);
  }
  .holder {
    position: absolute;
    top: 50%;
    left: 50%;

    z-index: 6;
    transform: translate(-50%, -50%);

    width:  calc(100vw - 400px * 2);
    min-width: 400px;

    height: calc(100vh - 200px * 2);
    min-height: 500px;

    background: #fff;

    display: flex;
    justify-content: space-between;


    .nav-section {
      width: 15%;
      height: 100%;
      background: #E0E0F0;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        text-align: center;
        height: 50px;
        line-height: 50px;
        flex-wrap: nowrap;
        text-decoration: none;
        color: #333;
        &.active {
          background: #FF000010;
        }
      }
    }
    .settings-content {
      width: 85%;
      height: 100%;
      text-align: center;
    }


    .exit {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
</style>