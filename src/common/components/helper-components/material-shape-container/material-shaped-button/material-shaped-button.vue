<template>
    <a class="material-shaped-button" href="#">
        <material-shape-container
            :props="{
                shape: 'four-pointed-shape',
                strokeWidth: 15,
            }"
            class="material-shaped-button__container"
        >
            <google-material-icon
                class="material-shaped-button__icon"
                :props="{
                    iconName: props.icon,
                }"
            />
        </material-shape-container>
    </a>
</template>

<script setup lang="ts">
import MaterialShapeContainer from './../material-shape-container.vue';
import { IMaterialShapedButtonProps } from './material-shaped-button.types';
import googleMaterialIcon from './../../google-material-icon/google-material-icon.vue';
import { defineProps } from 'vue';

defineProps<{
    props: IMaterialShapedButtonProps;
}>();
</script>

<style scoped lang="scss">
.material-shaped-button {
    text-decoration: none;
    display: block;

    &__container {
        width: inherit;
        height: inherit;
    }

    &__icon {
        font-size: 20px;
    }
}
</style>
