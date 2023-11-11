<template>
    <input
        type="text"
        class="text-field"
        @input="
            emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :value="modelValue"
    />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
    modelValue: string;
}>();

const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
}>();
</script>

<style scoped lang="scss">
.text-field {
    width: 100%;
    min-height: 56px;
    height: auto;
    outline: none;
    box-shadow: none;
    border-color: var(--snotra--sys--outline);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    padding: 0 21px;
    font-size: 16px;
    background-color: #ffffff00;

    &:hover,
    &:focus {
        border-color: var(--snotra--sys--on-surface);
    }
}
</style>
