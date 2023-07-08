<template>
    <div
        class="universal-card"
        :class="{
            'universal-card_type_elevated': props.type === 'elevated',
            'universal-card_type_elevated-secondary':
                props.type === 'elevated-secondary',
            'universal-card_type_outlined': props.type === 'outlined',
            'universal-card_type_filled': props.type === 'filled',
        }"
    >
        <div class="universal-card__inner-wrapper">
            <div class="universal-card__header">
                <div class="universal-card__title-container">
                    <material-shaped-icon
                        v-if="props.icon"
                        class="universal-card__title-icon"
                        :props="{
                            color: '',
                            shape: 'eight-pointed-shape',
                            iconCompleteUrl: props.icon,
                        }"
                    ></material-shaped-icon>
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
                    v-for="(tagProps, index) in props.dataTags"
                    :key="index"
                    :props="{
                        ...tagProps,
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
                    @click="
                        button.redirectToOnClick
                            ? NavigateToAddress(button.redirectToOnClick)
                            : ''
                    "
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
import MaterialShapedIcon from '../../helper-components/material-shaped-icon/material-shaped-icon.vue';
import router from '@/router';

defineProps<{ props: IUniversalCardProps }>();

const NavigateToAddress = (address: string) => {
    router.push(address);
};
</script>

<style lang="scss">
.universal-card {
    padding: 25px 20px;
    border-radius: 15px;
    min-width: fit-content;

    &_type {
        &_elevated {
            background: var(--snotra--surfaces--surface1);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
                0px 2px 6px 2px rgba(0, 0, 0, 0.15);
        }

        &_elevated-secondary {
            background: var(--snotra--sys--secondary-container);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
                0px 2px 6px 2px rgba(0, 0, 0, 0.15);
        }

        &_outlined {
            background: var(--snotra--sys--surface);
            border: 1px solid var(--snotra--sys--outline);
        }

        &_filled {
            background: var(--snotra--sys--surface-variant);
        }
    }

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
        gap: 15px;
    }

    &__title-icon {
        width: 80px;
        height: 80px;
    }

    &__title {
        word-break: break-all;
        white-space: pre-wrap;
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
