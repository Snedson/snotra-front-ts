<template>
    <span
        :class="[
            'material-icon',
            props.selected ? 'material-icons' : 'material-icons-outlined',
        ]"
        :style="{ color: props.color }"
    >
        {{ props.iconName }}
    </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { IGoogleMaterialIconProps } from './google-material-icon.types';

defineProps<{
    props: IGoogleMaterialIconProps;
}>();
</script>

<style lang="scss" scoped>
.material-icon {
    text-align: center;
}
</style>
