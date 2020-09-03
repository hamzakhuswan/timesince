<template>
    <div class="settings-icon">
        <ul :class="{show}">
            <li>Timers</li>
            <li>Theme</li>
            <li>Prefernce</li>
        </ul>
        <img src="../assets/settings.svg" @click="show = !show">
    </div>
</template>

<script>
export default {
    name: "SettingsIcon",
    data() {
        return {
            show: true
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
        bottom: calc(-100% + 64px);
        visibility:hidden;
        opacity:0;
        transition:visibility 0.6s ease,opacity 0.6s ease;
        li{ 
            list-style: none;
            color: #000;
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