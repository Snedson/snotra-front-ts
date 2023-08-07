<template>
    <li
        :class="[
            'menu-list-item',
            props.content ? '' : 'menu-list-item_centred',
        ]"
    >
        <div class="menu-list-item__image-cont">
            <google-material-icon
                :props="{ iconName: props.icon }"
                class="menu-list-item__icon"
            ></google-material-icon>
        </div>
        <div
            :class="[
                'menu-list-item__payload',
                props.content ? '' : 'menu-list-item__payload_centred',
            ]"
        >
            <div class="menu-list-item__content">
                <h2 class="menu-list-item__title">{{ props.title }}</h2>
                <p class="user-data-item__info" v-if="props.content">
                    {{ props.content }}
                </p>
            </div>
            <div class="menu-list-item__actions" v-if="props.button">
                <custom-button :props="props.button" />
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
import GoogleMaterialIcon from '@/common/components/helper-components/google-material-icon/google-material-icon.vue';
import { defineProps } from 'vue';
import { IMenuListItem } from './menu-list.types';
import CustomButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';

defineProps<{
    props: IMenuListItem;
}>();
</script>

<style scoped lang="scss">
.menu-list-item {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-top: 20px;
    &:first-child {
        margin-top: 10px;
    }
    &:not(:last-child) {
        .menu-list-item__payload {
            border-bottom: 1px solid var(--snotra--sys--outline);
        }
    }

    &:last-child {
        .menu-list-item__payload {
            padding: 0;
        }
    }

    &__title {
        color: var(--snotra-sys-light-on-surface);
        font-size: 25px;
        font-weight: 700;
    }

    &__payload {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 0 0 20px 0;
    }

    &__actions {
        margin-right: 20px;
        align-self: center;
    }

    &__info {
        margin-top: 8px;
        color: var(--snotra--sys--on-surface-second-text);
    }

    &__icon {
        font-size: 30px;
    }
}
</style>
