<template>
    <span :class="props.selected ? 'material-icons' : 'material-icons-outlined'" 
    class="material-icon"
    :style="`color: ${props.color}`">
        {{props.iconName}}
    </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    selected: Boolean,
    iconName: String,
    color: String,
});
</script>

<style lang="scss" scoped>
.material-icon {
    text-align: center;
}
</style>