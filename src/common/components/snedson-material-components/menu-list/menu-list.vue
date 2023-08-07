<template>
    <ul class="menu-list material-card_type_outlined">
        <menu-list-item
            v-for="item in props.items"
            :key="item.title"
            :props="item"
        />
    </ul>
</template>

<script setup lang="ts">
import { IMenuListProps } from './menu-list.types';
import { defineProps } from 'vue';
import MenuListItem from './menu-list-item.vue';

defineProps<{
    props: IMenuListProps;
}>();
</script>

<style scoped lang="scss">
.menu-list {
    list-style: none;
    padding: 15px 0 15px 15px;
    border-radius: 10px;
}
</style>
