<template>
    <div class="tab-menu-wrapper">
        <ul class="tab-menu">
            <li
                v-for="tabItem in props.tabs"
                :key="tabItem.id"
                :class="[
                    'tab-menu__item tab-item',
                    tabItem.id === props.selectedTabItemId
                        ? 'tab-item_selected'
                        : '',
                ]"
                @click="selectTab(tabItem.id)"
            >
                <a href="#">
                    {{ tabItem.title }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { ITabMenuProps } from './tab-menu.types';

defineProps<{
    props: ITabMenuProps;
}>();

type ITabMenuEmits = {
    (event: 'change', tabId: number): void;
};

const emit = defineEmits<ITabMenuEmits>();

function selectTab(tabId: number) {
    emit('change', tabId);
}
</script>

<style lang="scss">
.tab-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    & a,
    a:hover,
    a:visited,
    a:active {
        text-decoration: none;
        color: inherit;
    }

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
