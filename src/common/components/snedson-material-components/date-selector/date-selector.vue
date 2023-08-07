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
import { DateFormat } from '@/views/pages/StudentPages/HomeworkPage/AppendHomeworkPage/append-homework-page.types';
import moment from 'moment';
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
    return moment(new Date()).format(DateFormat);
});

const maxDate = computed((): string => {
    const today = moment(new Date());
    if (prop.props.maxDateDaysOffset) {
        today.add(prop.props.maxDateDaysOffset, 'days');
    }
    return today.format(DateFormat);
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
