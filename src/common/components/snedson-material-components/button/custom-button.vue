<template>
    <button>
        <state-layer> </state-layer>
    </button>
</template>

<script setup lang="ts">
import { ComponentObjectPropsOptions } from 'vue';
import stateLayer from '../../helper-components/state-layer/state-layer.vue';
import { IButtonProps } from './button.types';

const props = defineProps<ComponentObjectPropsOptions<IButtonProps>>();
</script>

<style lang="scss" scoped></style>
