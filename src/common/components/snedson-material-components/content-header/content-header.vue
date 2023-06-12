<template>
    <div class="content-header-wrapper" v-if="$route.name">
        <Transition name="content-header-transition" mode="out-in">
            <header
                :key="Pages[$route.name.toString()].contentHeaderData.h1"
                class="content-header"
            >
                <h1 class="content-header__h1">
                    {{ Pages[$route.name.toString()].contentHeaderData.h1 }}
                </h1>
                <h2 class="content-header__h2">
                    {{ Pages[$route.name.toString()].contentHeaderData.h2 }}
                </h2>
                <h3 class="content-header__h3">
                    {{ Pages[$route.name.toString()].contentHeaderData.h3 }}
                </h3>
            </header>
        </Transition>
        <Transition name="content-header-background-transition">
            <div
                class="content-header-background"
                :key="
                    Pages[
                        $route.name.toString()
                    ].contentHeaderData.backgroundImageUrl.toString()
                "
            >
                <img
                    class="content-header-background__img"
                    :src="
                        Pages[
                            $route.name.toString()
                        ].contentHeaderData.backgroundImageUrl.toString()
                    "
                    :style="`object-position: center ${
                        Pages[$route.name.toString()].contentHeaderData
                            .backgroundImageShift
                    }%;`"
                />

                <img
                    class="content-header-background__img content-header-background__img--dark"
                    :src="
                        Pages[$route.name.toString()].contentHeaderData
                            .backgroundImageDarkUrl
                            ? Pages[
                                  $route.name.toString()
                              ].contentHeaderData.backgroundImageDarkUrl?.toString()
                            : Pages[
                                  $route.name.toString()
                              ].contentHeaderData.backgroundImageUrl.toString()
                    "
                    :style="`object-position: center ${
                        Pages[$route.name.toString()].contentHeaderData
                            .backgroundImageShift
                    }%;`"
                />
            </div>
        </Transition>
    </div>
    <div class="pseudo-borders"></div>
</template>

<script lang="ts" setup>
import { Pages } from '@/views/pages/usePages';
</script>

<style lang="scss" scoped>
.content-header-background-transition-enter-active,
.content-header-background-transition-leave-active {
    transition: opacity 0.5s ease;
}

.content-header-background-transition-enter-from,
.content-header-background-transition-leave-to {
    opacity: 0;
}

.content-header-transition-enter-active,
.content-header-transition-leave-active {
    transition: all 0.25s ease;
}

.content-header-transition-enter-from {
    transform: translateX(-20px);
    opacity: 0;
}
.content-header-transition-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.content-header {
    grid-column: 1;
    grid-row: 1;
    z-index: 10;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    color: var(--snotra--sys--on-background);

    &-wrapper {
        display: grid;
        width: 100%;
        height: 256px;
        background-color: var(
            --snotra--surfaces---nav-rail-amp--header-background
        );
    }

    &-background {
        grid-column: 1;
        grid-row: 1;
        &__img {
            border-radius: 15px 0px 0px 0px;
            display: block;
            object-fit: cover;
            width: 100%;
            height: 256px;
            opacity: 1;
            z-index: 9;
            transition: all 200ms ease;
        }
    }

    &__h1 {
        font-size: 45px;
        font-weight: 700;
    }

    &__h2 {
        font-size: 17px;
        font-weight: 400;
    }

    &__h3 {
        font-size: 17px;
        font-weight: 700;
    }
}

.pseudo-borders {
    width: 100%;
    height: 17px;
    border-radius: 15px 15px 0px 0px;
    margin-top: -15px;
    background-color: var(--snotra--sys--content-background);
    z-index: 1;
}

@media (max-width: 800px) {
    .pseudo-borders {
        display: none;
    }
    .content-header {
        &-background__img {
            border-radius: 15px;
            width: 100%;
            height: 350px;
        }

        &-wrapper {
            border-radius: 15px;
            margin: 15px;
            width: calc(100% - 30px);
            height: auto;
        }
    }
}

@media (max-width: 1120px) {
    .content-header {
        padding: 0 15px;
    }
}

.content-header-background__img--dark {
    display: none;
}

:root.dark-theme .content-header-background__img {
    display: none;
}

:root.dark-theme .content-header-background__img--dark {
    display: flex;
}
</style>
