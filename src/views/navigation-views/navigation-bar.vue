<template>
    <div class="nav-bar-wrapper">
        <div class="nav-bar__fab-wrapper" v-if="$route.name">
            <Transition name="nav-bar__fab-transition">
                <FloatingActionButton 
                    v-if="Pages[$route.name.toString()].fabData"
                    size="large" 
                    class="nav-bar__fab" 
                    shadowed 
                    container-color="var(--snotra--sys--primary-container)" 
                    :icon-name="Pages[$route.name.toString()].fabData!.iconName" 
                    @click="Pages[$route.name.toString()].fabData!.callback"
                    icon-color="var(--snotra--sys--on-primary-container)"
                />
            </Transition>
        </div>
        <div class="nav-bar">
            <div class="nav-bar-content nav-bar__nav-bar-content" :set="currentRole = $route.meta.role">
                <ul class="nav-bar-content__main-navigation" v-if="$route.name">
                    <navigation-item 
                        v-for="item in NavigationItems[currentRole].mainNavigationElements"
                        :key="item.id"
                        :icon-name="item.iconName"
                        :title="item.title"
                        :selected="$route.name.toString().startsWith(item.routeName)"
                        @click="$router.push({name: item.routeName})"
                    />
                    <navigation-item 
                        v-for="item in NavigationItems[currentRole].additionalNavigationElements"
                        :key="item.id"
                        :icon-name="item.iconName"
                        :title="item.title"
                        :selected="$route.name.toString().startsWith(item.routeName)"
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