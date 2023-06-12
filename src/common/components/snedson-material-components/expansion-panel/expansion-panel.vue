<template>
    <div class="expansion-panel">
        <div
            class="expansion-panel__header panel-header"
            @click="onHeaderClicked"
        >
            <google-material-icon
                class="panel-header__icon"
                :props="{
                    iconName: state.isExpanded ? 'expand_less' : 'expand_more',
                }"
            />
            <p class="panel-header__title">{{ props.title }}</p>
        </div>
        <Transition name="expansion-panel-content-transition" mode="out-in">
            <div class="expansion-panel__content" v-if="state.isExpanded">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import GoogleMaterialIcon from '../../helper-components/google-material-icon/google-material-icon.vue';
import { defineProps, reactive } from 'vue';
import { IExpansionPanelProps } from './expansion-panel.types';

defineProps<{
    props: IExpansionPanelProps;
}>();

const state = reactive({
    isExpanded: false,
});

let onHeaderClicked = () => {
    state.isExpanded = !state.isExpanded;
};
</script>

<style lang="scss" scoped>
.expansion-panel {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--snotra--sys--on-background);
    background-color: var(--snotra--sys--surface);
    border-radius: 15px;
    &__header {
        border-radius: 15px;
        height: 68px;
        cursor: pointer;
    }

    &__content {
        padding: 15px 15px 15px 70px;
    }
}

.panel-header {
    padding: 0px 20px;
    display: flex;
    gap: 15px;
    flex-direction: row;
    align-items: center;

    &__icon {
        font-size: 35px;
    }

    &__title {
        font-size: 20px;
    }
}

@media (max-width: 800px) {
    .expansion-panel {
        &__content {
            padding: 15px 15px 15px 20px;
        }
    }
}

.expansion-panel-content-transition-enter-active,
.expansion-panel-content-transition-leave-active {
    transition: all 0.25s ease;
}

.expansion-panel-content-transition-enter-from,
.expansion-panel-content-transition-leave-to {
    opacity: 0;
}
</style>
