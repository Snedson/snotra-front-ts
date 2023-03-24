<template>
    <button
        class="custom-button"
        :class="[
            'custom-button_size_' + props.size,
            'custom-button_type_' + props.type,
        ]"
    >
        <state-layer
            class="custom-button__state-layer"
            :class="'custom-button__state-layer_size_' + props.size"
        >
            <google-material-icon
                :icon-name="props.iconName"
            ></google-material-icon>
            <span v-if="props.size === 'full'" class="custom-button__title">
                {{ props.innerText }}
            </span>
        </state-layer>
    </button>
</template>

<script setup lang="ts">
import stateLayer from '../../helper-components/state-layer/state-layer.vue';
import { IButtonProps } from './custom-button.types';
import { defineProps } from 'vue';
import googleMaterialIcon from '../../helper-components/google-material-icon/google-material-icon.vue';

defineProps<{
    props: IButtonProps;
}>();
</script>

<style lang="scss" scoped>
.custom-button {
    border: none;
    background: none;
    border-radius: 1000px;
    width: fit-content;

    &__state-layer {
        border-radius: inherit;
        &_size {
            &_full {
                display: flex;
                gap: 8px;
                padding: 10px 24px;
            }
            &_icon-only-large {
                padding: 10px 35px;
            }
            &_icon-only-small {
                padding: 10px;
            }
        }
    }

    &_type {
        &_filled {
            background-color: var(--snotra--sys--primary);
            color: var(--snotra--sys--on-primary);
        }
        &_tonal {
            background-color: var(--snotra--sys--secondary-container);
            color: var(--snotra--sys--on-secondary-container);
        }
        &_outlined-transparent {
            border: 1px solid var(--snotra--sys--outline);
            color: var(--snotra--sys--primary);
        }
        &_outlined {
            border: 1px solid var(--snotra--sys--outline);
            background-color: var(--snotra--sys--surface);
            color: var(--snotra--sys--primary);
        }
        &_text {
            color: var(--snotra--sys--primary);
        }
    }

    &_size {
        &_full {
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
        }
        &_icon-only-large {
        }
        &_icon-only-small {
        }
    }
}
</style>
