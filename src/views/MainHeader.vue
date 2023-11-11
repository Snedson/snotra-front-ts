<template>
    <header>
        <div class="header-logo">
            <div class="header-logo__left">
                <img class="header-logo__img" src="@/assets/snotra_logo.png" />
                <p class="header-logo__label">Snotra</p>
            </div>
            <div class="header-logo__right">
                <navigation-item
                    class="header-logo__switcher"
                    :props="{
                        iconName: 'dark_mode',
                        title: 'Переключиться на темную тему',
                        selected: false,
                    }"
                    @click="switchToDarkTheme"
                />

                <navigation-item
                    class="header-logo__switcher header-logo__switcher--dark"
                    :props="{
                        iconName: 'light_mode',
                        title: 'Переключиться на светлую тему',
                        selected: false,
                    }"
                    @click="switchToLightTheme"
                />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import NavigationItem from '@/common/components/snedson-material-components/navigation-item/navigation-item.vue';

const switchToDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.className = 'dark-theme';
};

const switchToLightTheme = () => {
    localStorage.removeItem('theme');
    document.documentElement.className = '';
};
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 74px;
    background-color: var(--snotra--surfaces---nav-rail-amp--header-background);
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-logo {
    width: 100%;
    margin-left: 90px;
    margin-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__left {
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
    }

    &__img {
        width: 45px;
        height: 45px;
        border-radius: 10px;
    }

    &__label {
        font-weight: 700;
        font-size: 38px;
        color: var(--snotra--sys--on-background);
    }
}

.header-logo__switcher--dark {
    display: none;
}

:root.dark-theme .header-logo__switcher {
    display: none;
}

:root.dark-theme .header-logo__switcher--dark {
    display: flex;
}

@media (max-width: 800px) {
    .header-logo {
        margin: 0 15px;
    }
}
</style>
