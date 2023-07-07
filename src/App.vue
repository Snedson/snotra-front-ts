<template>
    <main-header />
    <side-menu />

    <main class="full-content" lang="ru">
        <content-header />
        <div class="page-content full-content__page">
            <router-view />
        </div>
        <main-footer />
    </main>
</template>

<script lang="ts" setup>
import MainFooter from '@/views/MainFooter.vue';
import MainHeader from '@/views/MainHeader.vue';
import SideMenu from '@/views/SideMenu.vue';
import contentHeader from './common/components/snedson-material-components/content-header/content-header.vue';
import { onMounted } from 'vue';

onMounted(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        document.documentElement.className = 'dark-theme';
    } else {
        document.documentElement.className = '';
    }
});

//document.documentElement.className = "dark-theme" // uncomment for dark theme by default
</script>

<style lang="scss">
@use '@/assets/styles/colors.scss';
@use '@/assets/styles/snotra-color-schemes.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--snotra--sys--content-background);
}

body,
input,
select,
textarea {
    color: var(--snotra--sys--on-background);
}

ul {
    list-style-type: none;
}

#app {
    font-family: 'Fira Sans';
    font-style: normal;
}

.full-content {
    margin-left: 90px;
    margin-bottom: 20px;
    width: calc(100% - 90px);
    max-width: calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.page-content {
    width: 1000px;
    max-width: 100%;
    margin: 20px auto 50px auto;
    min-height: 100vh;
}

*::-webkit-input-placeholder {
    color: var(--snotra--sys--on-background-second-text);
}
*:-moz-placeholder {
    color: var(--snotra--sys--on-background-second-text);
    opacity: 1;
}
*::-moz-placeholder {
    color: var(--snotra--sys--on-background-second-text);
    opacity: 1;
}
*:-ms-input-placeholder {
    color: var(--snotra--sys--on-background-second-text);
}
*::-ms-input-placeholder {
    color: var(--snotra--sys--on-background-second-text);
}
*::placeholder {
    color: var(--snotra--sys--on-background-second-text);
}

@media (max-width: 800px) {
    .full-content {
        margin-left: 0px;
        width: 100%;
        max-width: 100%;
        margin-bottom: calc(65px + 20px);
    }
}

@media (max-width: 1120px) {
    .page-content {
        padding: 0 15px;
    }
}
</style>
