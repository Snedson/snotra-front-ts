<template>
    <div class="nav-bar-wrapper">
        <div class="nav-bar__fab-wrapper" v-if="$route.name">
            <Transition name="nav-bar__fab-transition">
                <FloatingActionButton 
                    v-if="Pages[$route.name.toString()].fabData"
                    :props="{
                        size: 'large',
                        type: 'primary',
                        iconName: Pages[$route.name.toString()].fabData!.iconName,
                        shadowed: true
                    }"
                    class="nav-bar__fab" 
                    @click="Pages[$route.name.toString()].fabData!.callback"
                />
            </Transition>
        </div>
        <div class="nav-bar">
            <div class="nav-bar-content nav-bar__nav-bar-content" :set="currentRole = $route.meta.role">
                <ul class="nav-bar-content__main-navigation" v-if="$route.name">
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
                    <navigation-item 
                        v-for="item in NavigationItems[currentRole].additionalNavigationElements"
                        :props="{
                            iconName: item.iconName,
                            title: item.title,
                            selected: $route.name.toString().startsWith(item.routeName),
                        }"
                        :key="item.id"
                        @click="$router.push({name: item.routeName})"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FloatingActionButton from '@/common/components/snedson-material-components/floating-action-button/floating-action-button.vue';
import NavigationItem from '@/common/components/snedson-material-components/navigation-item/navigation-item.vue';
import { NavigationItems } from '@/router/useNavigation';
import { Pages } from '@/views/pages/usePages';

</script>

<style lang="scss" scoped>
.nav-bar {
    &-wrapper {
        bottom: 0;
        position: fixed;
        width: 100%;
        display: none;
        flex-direction: column;
        gap: 20px;
        align-items: end;
        z-index: 999;
    }

    &__fab {
        &-wrapper {
            width: 60px;
            height: 60px;
            margin-right: 18px;
        }
    }

    height: 65px;
    width: 100%;
    
    background-color: var(--snotra--surfaces---nav-rail-amp--header-background);
}

.nav-bar-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;

    &__main-navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }
}

@media (max-width: 800px) {
    .nav-bar-wrapper {
        display: flex;
    }
}

</style>