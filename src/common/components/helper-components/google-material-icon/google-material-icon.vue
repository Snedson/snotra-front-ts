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
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
}
</style>
