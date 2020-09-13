<template>
  <div class="settings">
    <div class="holder" v-on-clickaway="away">
      <div class="nav-section">
          <router-link to="/"> 
            <img src="../assets/logo.svg" alt="Back Home">
          </router-link>
          <router-link :class="{active: $route.name == 'Timers'}" to="/timers">Timers</router-link>
          <router-link :class="{active: $route.name == 'Theme'}" to="/theme">Theme</router-link>
          <router-link :class="{active: $route.name == 'Preference'}" to="/preference">Prefernce</router-link>
      </div>
      <div  class="settings-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  mixins: [ clickaway ],
  name: "settings",
  methods: {
    away() {
      this.$router.push("/");
    }
  }
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

    width:  80%;
    height: 80%;

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
      overflow: auto;
    }
  }

@media (max-width: 768px) {
  .holder {
    width: 100%;
    height: 100%;
    flex-direction: column;
    .nav-section {
      width: 100%;
      height: 54px;
      display: flex;
      justify-content: left;
      a {
        padding: 16px;
        line-height: normal;
        &:first-of-type {
          order: 5;
          padding: 0;
          margin-left: auto;
        }
      }
    }

    .settings-content {
      width: 100%;
    }
  }

}
</style>