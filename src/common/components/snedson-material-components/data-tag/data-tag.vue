<template>
    <div class="data-tag-wrapper">
        <div class="data-tag" :style="`background: ${props.color}`">
            <img
                v-if="props.iconLocal"
                class="data-tag__icon"
                :src="require(`@/assets/icons/emojis/${props.iconLocal}`)"
            />
            <img
                v-else-if="props.iconCompleteUrl"
                :src="props.iconCompleteUrl"
                class="data-tag__icon"
            />
            <p class="data-tag__title">{{ props.title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IDataTagProps } from './data-tag.types';

defineProps<{
    props: IDataTagProps;
}>();
</script>

<style lang="scss" scoped>
.data-tag {
    padding: 4px 10px;
    box-sizing: border-box;
    border-radius: 7px;
    border: 1px solid var(--snotra--sys--outline);
    display: flex;
    flex-direction: row;
    width: auto;
    gap: 10px;
    align-items: center;
    width: fit-content;

    &-wrapper {
        height: auto;
        width: auto;
        min-height: 30px;
    }

    &__icon {
        max-width: 25px;
        max-height: 25px;
    }

    &__title {
        margin: 0;
        width: auto;
        font-weight: 400;
        font-size: 15px;
        word-break: break-all;
        white-space: pre-wrap;
        color: var(--snotra--sys--on-surface-variant);
    }
}
</style>
