<template>
    <div class="list-menu-item">
        <state-layer class="list-menu-item__state-layer">
            <p class="list-menu-item__title">{{ props.title }}</p>
        </state-layer>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { IListSelectMenuItem } from './list-select-menu-item.types';
import stateLayer from '@/common/components/helper-components/state-layer/state-layer.vue';

defineProps<{
    props: IListSelectMenuItem;
}>();
</script>

<style lang="scss" scoped>
.list-menu-item {
    width: 100%;
    height: 56px;
    background-color: var(--snotra--sys--surface);

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
