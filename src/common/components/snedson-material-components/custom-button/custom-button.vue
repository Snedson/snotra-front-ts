<template>
    <button class="custom-button">
        <state-layer class="custom-button__state-layer">
            <!-- <google-material-icon :icon-name="props.iconName"></google-material-icon> -->
            <span v-if="props.size === 'full'" class="custom-button__title">
                {{ props.innerText }}</span
            >
        </state-layer>
    </button>
</template>

<script setup lang="ts">
import stateLayer from '../../helper-components/state-layer/state-layer.vue';
import { IButtonProps } from './custom-button.types';

defineProps<{
    props: IButtonProps;
}>();
</script>

<style lang="scss" scoped></style>
