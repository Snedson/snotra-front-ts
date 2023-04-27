<template>
    <div class="nav-rail">
        <div class="nav-rail-content nav-rail__nav-rail-content" v-if="$route.name" :set="currentRole = $route.meta.role">
            <div class="nav-rail-content__fab-wrapper">
                <Transition name="nav-bar__fab-transition">
                    <FloatingActionButton 
                        v-if="Pages[$route.name.toString()].fabData"
                        :props="{
                            size: 'large',
                            type: 'tertiary',
                            iconName: Pages[$route.name.toString()].fabData!.iconName,
                            shadowed: false
                        }"
                        class="nav-rail-content__fab" 
                        @click="Pages[$route.name.toString()].fabData!.callback"
                    />
                </Transition>
            </div>
            <ul class="nav-rail-content__main-navigation">
                <navigation-item 
                    v-for="item in NavigationItems[currentRole].mainNavigationElements"
                    :props="{
                        iconName: item.iconName,
                        title: item.title,
                        selected: $route.name.toString().startsWith(item.routeName)
                    }"
                    :key="item.id"
                    @click="$router.push({name: item.routeName})"
                />
            </ul>
            <ul class="nav-rail-content__additional-navigation">
                <navigation-item 
                    v-for="item in NavigationItems[currentRole].additionalNavigationElements"
                    :props="{
                        iconName: item.iconName,
                        title: item.title,
                        selected: $route.name.toString().startsWith(item.routeName)
                    }"
                    :key="item.id"
                    @click="$router.push({name: item.routeName})"
                />
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FloatingActionButton from '@/common/components/snedson-material-components/floating-action-button/floating-action-button.vue';
import NavigationItem from '@/common/components/snedson-material-components/navigation-item/navigation-item.vue';
import { NavigationItems } from '@/router/useNavigation';
import { Pages } from '@/views/pages/usePages';
import router from '@/router';

console.log(router.currentRoute.value);
</script>

<style lang="scss" scoped>
.nav-rail {
    position: fixed;
    width: 90px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--snotra--surfaces---nav-rail-amp--header-background);
    left: 0;
    top: 0;
    padding-top: 74px;
    padding-bottom: 40px;
    z-index: 999;

    &__nav-rail-content {
        margin: 0 auto;
        max-width: 60px;
        height: 100%;
    }
}

.nav-rail-content {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__fab {
        justify-self: start;

        &-wrapper {
            width: 60px;
            height: 60px;
        }
    }

    &__main-navigation {
        list-style-type: none;
        margin: auto 0;
        justify-self: center;
        width: 60px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__additional-navigation {
        list-style-type: none;
        width: 60px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-self: end;
    }
}

@media (max-width: 800px) {
    .nav-rail {
        display: none;
    }
}

</style>