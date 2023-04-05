<template>
    <div class="universal-card">
        <div class="universal-card__inner-wrapper">
            <div class="universal-card__header">
                <div class="universal-card__title-container">
                    <img
                        v-if="props.icon"
                        :src="props.icon"
                        class="universal-card__title-icon"
                    />
                    <h2 class="universal-card__title">{{ props.title }}</h2>
                </div>
                <div class="universal-card__on-air">
                    <on-air v-if="props.isOnAir" />
                </div>
            </div>
            <div class="universal-card__content">
                {{ props.content }}
            </div>
            <div class="universal-card__data-tags">
                <data-tag
                    v-for="(dataTag, index) in props.dataTags"
                    :key="index"
                    :props="{
                        ...dataTag,
                    }"
                />
            </div>
            <div class="universal-card__action-buttons">
                <custom-button
                    v-for="(button, index) in props.buttons"
                    :key="index"
                    :props="{
                        ...button,
                    }"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import onAir from '../on-air/on-air.vue';
import dataTag from '../data-tag/data-tag.vue';
import customButton from '../custom-button/custom-button.vue';
import { IUniversalCardProps } from './universal-card.types';

defineProps<{ props: IUniversalCardProps }>();
</script>

<style lang="scss">
.universal-card {
    padding: 25px 20px;
    background: var(--snotra--sys--surface);
    border-radius: 15px;
    min-width: fit-content;

    &__inner-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    &__title-container {
        display: flex;
        align-items: center;
    }

    &__title-icon {
        width: 70px;
        height: 70px;
    }

    &__title {
        font-size: 35px;
        line-height: 42px;
        color: var(--snotra--sys--on-surface-variant);
    }

    &__content {
        color: var(--snotra--sys--on-surface-variant);
    }

    &__data-tags {
        display: flex;
        flex-wrap: wrap;
        column-gap: 15px;
        row-gap: 10px;
        max-width: 480px;
    }

    &__action-buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 10px 0px 0px;
        gap: 10px;
    }
}
</style>
