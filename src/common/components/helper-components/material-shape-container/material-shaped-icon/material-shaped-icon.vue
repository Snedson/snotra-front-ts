<template>
    <material-shape-container
        :props="{
            shape: 'ten-pointed-smooth-shape',
            strokeWidth: 25,
        }"
        class="material-shaped-icon"
    >
        <img
            v-if="props.iconLocal"
            class="material-shaped-icon__icon"
            :src="require(`@/assets/icons/emojis/${props.iconLocal}`)"
        />
        <img
            v-else-if="props.iconCompleteUrl"
            class="material-shaped-icon__icon"
            :src="props.iconCompleteUrl"
        />
    </material-shape-container>
</template>

<script setup lang="ts">
import MaterialShapeContainer from './../material-shape-container.vue';
import { IMaterialShapedIconProps } from './material-shaped-icon.types';
import { defineProps } from 'vue';

defineProps<{
    props: IMaterialShapedIconProps;
}>();
</script>

<style scoped lang="scss">
.material-shaped-icon {
    &__icon {
        width: 40px;
        height: 40px;
    }
}
</style>
