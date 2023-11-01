<template>
    <div class="user-header material-card_type_outlined">
        <div class="user-header__avatar"></div>
        <div class="user-header__data">
            <h1 class="user-header__name">
                {{ props.name }} {{ props.surname }}
            </h1>
            <div v-if="props.subheader" class="user-header__subheader">
                <img
                    v-if="props.subheaderIcon"
                    :src="`${getBaseUrl()}${props.subheaderIcon}`"
                    alt=""
                    class="user-header__subheader-icon"
                />
                <p class="user-header__subheader-text">
                    {{ props.subheader }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { IUserHeaderProps } from './user-header.types';
import { getBaseUrl } from '@/http/api/';

defineProps<{
    props: IUserHeaderProps;
}>();
</script>

<style lang="scss" scoped>
.user-header {
    padding: 25px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 10px;

    &__avatar {
        border-radius: 150px;
        width: 150px;
        height: 150px;
        background: gray;
    }

    &__subheader-icon {
        width: 30px;
        height: 30px;
    }

    &__subheader {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    &__subheader-text {
        font-size: 25px;
        font-weight: 700;
        color: var(--snotra--sys--on-surface-second-text);
    }
}
</style>
