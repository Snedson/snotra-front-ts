<template>
    <button class="fab" :class="('fab_' + props.size) + ' ' + (props.shadowed ? 'fab_shadowed' : '')" :style="'background-color: ' + props.containerColor">
        <state-layer class="fab__state-layer" :class="('fab__state-layer_' + props.size)">
            <google-material-icon 
                :icon-name="props.iconName"
                :color="props.iconColor"
                :selected="true"
                class="fab__icon"
                :class="('fab__icon_' + props.size)"/>
        </state-layer>
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import stateLayer from '@/common/components/helper-components/state-layer/state-layer.vue';
import googleMaterialIcon from '@/common/components/helper-components/google-material-icon/google-material-icon.vue';

type fabSizes = "default" | "small" | "large";

const props = defineProps({
    size: String as PropType<fabSizes>,
    containerColor: String,
    iconColor: String,
    iconName: String,
    shadowed: Boolean
});
</script>;


<style lang="scss" scoped>
.fab {
    background-color: var(--snotra--sys--tertiary-container);
    display: flex;
    border: none;

    &_shadowed {
        box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    }

    &__state-layer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &_default {
        width: 35px;
        height: 35px;
        border-radius: 10px;
    }

    &__state-layer_default {
        border-radius: inherit;
        padding: 10px;
    }

    &_small {
        width: 25px;
        height: 25px;
        border-radius: 7.5px;
    }

    &__state-layer_small {
        border-radius: inherit;
    }

    &_large {
        width: 60px;
        height: 60px;
        border-radius: 17.5px;
    }

    &__state-layer_large {
        border-radius: inherit;
        padding: 10px;
    }

    &__icon {
        &_default {
            font-size: 16.25px;
        }

        &_small {
            font-size: 15px;
        }

        &_large {
            font-size: 22.5px;
        }
    }
}
</style>