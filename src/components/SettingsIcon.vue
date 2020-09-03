<template>
    <div class="settings-icon">
        <ul :class="{show}">
            <li><router-link to="/timers">Timers</router-link></li>
            <li><router-link to="/theme">Theme</router-link></li>
            <li><router-link to="/prefernce">Prefernce</router-link></li>
        </ul>
        <img src="../assets/settings.svg" @click="show = !show">
    </div>
</template>

<script>
export default {
    name: "SettingsIcon",
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss">
    ul {
        width: 125px;
        height: 150px;
        border-radius: 15px;
        background: #E5EAEF;
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding: 0;
        position: absolute;
        right: 0;
        bottom: calc(-100% + 84px);
        visibility:hidden;
        opacity:0;
        transition:visibility 0.6s ease,opacity 0.6s ease;
        margin: 0;
        li{ 
            list-style: none;
            * {
                color: #333;
                stroke-width: 5px;
                text-decoration: none;
            }
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    img{
        cursor: pointer;
        &:hover {
            filter: sepia(2);
        }
    }

    .show {
        visibility:visible;
        opacity:1; 
    }
</style>