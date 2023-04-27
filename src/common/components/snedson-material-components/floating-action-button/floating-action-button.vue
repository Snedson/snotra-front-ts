<template>
    <button 
        :class="[
            'fab',
            'fab_size_' + props.size, 
            'fab_type_' + props.type,
            props.shadowed ? 'fab_shadowed' : ''
        ]" 
    >
        <state-layer 
            :class="[
                'fab__state-layer', 
                'fab__state-layer_' + props.size
            ]"
        >
            <google-material-icon 
                :props="{
                    iconName: props.iconName,
                    selected: true
                }"
                :class="[
                    'fab__icon', 
                    'fab__icon_' + props.size
                ]"
            />
        </state-layer>
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import stateLayer from '@/common/components/helper-components/state-layer/state-layer.vue';
import googleMaterialIcon from '@/common/components/helper-components/google-material-icon/google-material-icon.vue';
import { IFabProps } from './floating-action-button.types';

defineProps<{
    props: IFabProps;
}>();

</script>;


<style lang="scss" scoped>
.fab {
    display: flex;
    border: none;
    cursor: pointer;

    &_shadowed {
        box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    }

    &__state-layer {
        display: flex;
        align-items: center;
        justify-content: center;
        
        &_small {
            border-radius: inherit;
        }

        &_medium {
            border-radius: inherit;
            padding: 10px;
        }

        &_large {
            border-radius: inherit;
            padding: 10px;
        }
    }

    &_size {
        &_small {
            width: 25px;
            height: 25px;
            border-radius: 7.5px;
        }

        &_medium {
            width: 35px;
            height: 35px;
            border-radius: 10px;
        }

        &_large {
            width: 60px;
            height: 60px;
            border-radius: 17.5px;
        }
    }

    &_type {
        &_primary {
            background-color: var(--snotra--sys--primary-container);
            color: var(--snotra--sys--on-primary-container);
        }

        &_surface {
            background-color: var(--snotra--sys--surface);
            color: var(--snotra--sys--primary);
        }

        &_secondary {
            background-color: var(--snotra--sys--secondary-container);
            color: var(--snotra--sys--on-secondary-container);
        }

        &_tertiary {
            background-color: var(--snotra--sys--tertiary-container);
            color: var(--snotra--sys--on-tertiary-container);
        }
    }

    &__icon {
        &_small {
            font-size: 15px;
        }
        
        &_medium {
            font-size: 16.25px;
        }

        &_large {
            font-size: 22.5px;
        }
    }
}
</style>