<template>
    <div
        :class="[
            'list-menu-item',
            props.isSelected ? 'list-menu-item_selected' : '',
        ]"
    >
        <state-layer class="list-menu-item__state-layer">
            <p class="list-menu-item__title">{{ props.title }}</p>
        </state-layer>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { IListSelectMenuItemProps } from './list-select.types';
import stateLayer from '@/common/components/helper-components/state-layer/state-layer.vue';

defineProps<{
    props: IListSelectMenuItemProps;
}>();
</script>

<style lang="scss" scoped>
.list-menu-item {
    width: 100%;
    height: 56px;
    background-color: var(--snotra--sys--surface);

    &_selected {
        background-color: var(--snotra--sys--surface-variant);
    }

    &__state-layer {
        padding: 0 30px;
        display: flex;
        align-items: center;
    }

    &__title {
        color: var(--snotra--sys--on-surface-variant);
    }
}
</style>
