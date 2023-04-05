<template>
    <div class="universal-card">
        <div class="universal-card__inner-wrapper">
            <div class="universal-card__title-container">
                <div>
                    <img src="" class="universal-card__title-icon" />
                    <h2 class="universal-card__title">Обществознание</h2>
                </div>
                <div class="universal-card__on-air">
                    <on-air></on-air>
                </div>
            </div>
            <div class="universal-card__content"></div>
            <div class="universal-card__data-tags">
                <data-tag
                    :props="{
                        color: 'var(--snotra--sys--surface)',
                        iconCompleteUrl: icon,
                        title: 'Перемена',
                    }"
                ></data-tag>
                <data-tag
                    :props="{
                        color: 'var(--snotra--sys--surface)',
                        iconCompleteUrl: icon,
                        title: 'Перемена',
                    }"
                ></data-tag>
                <data-tag
                    :props="{
                        color: 'var(--snotra--sys--surface)',
                        iconCompleteUrl: icon,
                        title: 'Перемена',
                    }"
                ></data-tag>
            </div>
            <div class="universal-card__action-buttons"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';
import onAir from '../on-air/on-air.vue';
import dataTag from '../data-tag/data-tag.vue';
import icon from '@/assets/icons/emojis/teacher.png';

defineProps<{ props: string }>();
</script>

<style lang="scss">
.universal-card {
    padding: 25px 20px;
    background: var(--snotra--sys--surface);
    border-radius: 15px;
    min-width: fit-content;

    &__inner-wrapper {
    }

    &__title-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    &__title-icon {
    }

    &__title {
        font-size: 35px;
        line-height: 42px;
        color: var(--snotra--sys--on-surface-variant);
    }

    &__on-air {
    }

    &__content {
        color: var(--snotra--sys--on-surface-variant);
    }

    &__data-tags {
        display: flex;
        flex-wrap: wrap;
    }

    &__action-buttons {
    }
}
</style>
