<template>
    <div class="tab-menu-wrapper">
        <ul class="tab-menu">
            <li
                v-for="tabItem in props.tabs"
                :key="tabItem.id"
                class="tab-menu__item tab-item"
                :class="
                tabItem.id === props.selectedTabItemId ? 'tab-item_selected' : ''
                "
                @click="
                selectTabItemFunction ? selectTabItemFunction(tabItem.id) : () => {}
                "
            >
                <p>
                    {{ tabItem.title }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { ITab } from './ITabMenu';

const props = defineProps({
    tabs: Array as PropType<ITab[]>,
    selectedTabItemId: Number,
    selectTabItemFunction: Function as PropType<(tadId: number) => void>,
});
</script>

<style lang="scss">
.tab-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    &-wrapper {
        background-color: var(--snotra--sys--on-primary);
        width: 100%;
        min-height: 62px;
        border-radius: 10px;
        padding: 20px 25px;
    }

}
.tab-item {
    font-size: 20px;
    margin-right: 15px;
    cursor: pointer;
    color: var(--snotra--sys--on-primary-container);

    &_selected {
        font-weight: 700;
        color: var(--snotra--sys--primary);
        border: 4px;
        border-color: var(--snotra--sys--primary);
        border-style: none none solid none;
    }
}
</style>
