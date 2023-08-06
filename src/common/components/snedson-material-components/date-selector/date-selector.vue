<template>
    <input
        type="date"
        class="date-picker"
        @input="
            emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :value="modelValue"
        :min="prop.props.setTodayAsMin ? minDate : '0000-00-00'"
        :max="prop.props.maxDateDaysOffset ? maxDate : '9999-12-30'"
    />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const prop = defineProps<{
    modelValue: string;
    props: {
        setTodayAsMin: boolean;
        maxDateDaysOffset: number | null;
    };
}>();

const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
}>();

const minDate = computed((): string => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();

    let ddStr = dd < 10 ? '0' + dd.toString() : dd.toString();
    let mmStr = mm < 10 ? '0' + mm.toString() : mm.toString();

    return yyyy + '-' + mmStr + '-' + ddStr;
});

const maxDate = computed((): string => {
    const today = new Date();
    const dd = prop.props.maxDateDaysOffset
        ? today.getDate() + prop.props.maxDateDaysOffset
        : today.getDate();
    const mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();

    let ddStr = dd < 10 ? '0' + dd.toString() : dd.toString();
    let mmStr = mm < 10 ? '0' + mm.toString() : mm.toString();

    return yyyy + '-' + mmStr + '-' + ddStr;
});
</script>

<style scoped lang="scss">
.date-picker {
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
