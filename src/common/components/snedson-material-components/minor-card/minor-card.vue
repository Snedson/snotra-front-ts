<template>
    <a
        class="minor-card material-card-minor_type_filled-clickable"
        href="#"
        @click="clicked"
    >
        <div class="minor-card__inner-wrapper">
            <div class="minor-card__content card-content">
                <div class="card-content__icon-wrapper" v-if="props.icon">
                    <google-material-icon
                        class="card-content__icon"
                        :props="{
                            iconName: props.icon,
                        }"
                    />
                </div>
                <div class="card-content__labels">
                    <div class="card-content__title">
                        <h3>{{ props.title }}</h3>
                    </div>
                    <div
                        class="card-content__description"
                        v-if="props.description"
                    >
                        <p>{{ props.description }}</p>
                    </div>
                </div>
            </div>
            <div class="minor-card__button">
                <material-shaped-button
                    :props="{
                        icon: 'arrow_forward',
                    }"
                    class="msb sn-msc-button-on-minor-card"
                >
                </material-shaped-button>
            </div>
        </div>
    </a>
</template>

<script lang="ts" setup>
import MaterialShapedButton from '@/common/components/helper-components/material-shape-container/material-shaped-button/material-shaped-button.vue';
import googleMaterialIcon from '@/common/components/helper-components/google-material-icon/google-material-icon.vue';
import { defineProps } from 'vue';
import { IMinorCardProps } from './minor-card.types';
import router from '@/router';

const prop = defineProps<{
    props: IMinorCardProps;
}>();

const clicked = () => {
    if (prop.props.to) {
        router.push(prop.props.to);
    } else if (prop.props.href) {
        window.location.href = prop.props.href;
    }
};
</script>

<style lang="scss" scoped>
.minor-card {
    padding: 25px 20px;
    width: 100%;
    height: auto;
    border-radius: 15px;
    min-width: fit-content;
    display: block;
    text-decoration: none;

    &__inner-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}

.card-content {
    display: flex;
    flex-direction: row;
    gap: 15px;

    &__icon {
        font-size: 32px;
        margin-top: 5px;
        color: var(--snotra--sys--primary);
    }

    &__labels {
        color: var(--snotra--sys--on-surface-variant);
    }

    &__title {
        font-size: 28px;
    }

    &__description {
        font-size: 18px;
    }
}
</style>
