<template>
    <div class="tab-menu-wrapper">
        <ul class="tab-menu">
            <li
                v-for="tabItem in props.tabs"
                :key="tabItem.id"
                :class="[
                    'tab-menu__item tab-item',
                    tabItem.id === state.selectedTabId
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
import { defineProps, defineEmits, reactive } from 'vue';
import { ITabMenuProps } from './tab-menu.types';

const prop = defineProps<{
    props: ITabMenuProps;
}>();

const state = reactive<{ selectedTabId: number }>({
    selectedTabId: prop.props.selectedTabItemId,
});

type ITabMenuEmits = {
    (event: 'change', tabId: number): void;
};

const emit = defineEmits<ITabMenuEmits>();

function selectTab(tabId: number) {
    state.selectedTabId = tabId;
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
    display: list-item;
    position: relative;

    &_selected {
        font-weight: 700;
        color: var(--snotra--sys--primary);
        border: 4px;
        border-color: var(--snotra--sys--primary);
        border-style: none none solid none;
    }

    &::after {
        background-image: url('@/assets/icons/md_shapes_li-bullet_8x8.svg');
        display: inline-block;
        position: absolute;
        top: 8px;
        right: -20px;
        width: 8px;
        height: 8px;
        transform: rotate(calc(var(--rotation) * 36deg));
        line-height: 0;
        text-align: center;
        content: '';
    }

    :root.dark-theme &::after {
        background-image: url('@/assets/icons/md_shapes_li-bullet_8x8-dark.svg');
    }

    &:last-child::after {
        display: none;
    }

    &:nth-child(2) {
        --rotation: 2;
    }

    &:nth-child(3n) {
        --rotation: 5;
    }

    &:nth-child(3n + 1) {
        --rotation: 7;
    }

    &:nth-child(3n + 2) {
        --rotation: 4;
    }

    &:nth-child(4n) {
        --rotation: 9;
    }

    &:nth-child(4n + 1) {
        --rotation: 6;
    }

    &:nth-child(4n + 3) {
        --rotation: 3;
    }
}
</style>
