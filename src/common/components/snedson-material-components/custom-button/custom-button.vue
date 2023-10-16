<template>
    <button
        :class="[
            'custom-button',
            'custom-button_size_' + props.size,
            'custom-button_type_' + props.type,
        ]"
    >
        <state-layer
            :class="[
                'custom-button__state-layer',
                'custom-button__state-layer_size_' + props.size,
            ]"
        >
            <google-material-icon
                :props="{
                    iconName: props.iconName,
                    selected: true,
                }"
            ></google-material-icon>
            <span
                v-if="isTFullSize(props.size)"
                :class="[
                    'custom-button__title',
                    'custom-button__title_size_' + props.size,
                ]"
            >
                {{ props.innerText }}
            </span>
        </state-layer>
    </button>
</template>

<script setup lang="ts">
import stateLayer from '../../helper-components/state-layer/state-layer.vue';
import { IButtonProps, isTFullSize } from './custom-button.types';
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
    height: fit-content;
    cursor: pointer;

    &__state-layer {
        border-radius: inherit;
        display: flex;
        &_size {
            &_full,
            &_full-resizable-to-icon-large,
            &_full-resizable-to-icon-small {
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
        &_full,
        &_full-resizable-to-icon-large,
        &_full-resizable-to-icon-small {
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
        }
    }
}

@media (max-width: 1090px) {
    .custom-button__state-layer_size {
        &_full-resizable-to-icon-large {
            padding: 10px 35px;
        }

        &_full-resizable-to-icon-small {
            padding: 10px;
        }
    }

    .custom-button__title_size {
        &_full-resizable-to-icon-large,
        &_full-resizable-to-icon-small {
            display: none;
        }
    }
}
</style>
