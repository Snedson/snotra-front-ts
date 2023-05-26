<template>
    <div class="list-select">
        <div class="list-select__box-container box">
            <div class="box__content">
                <p class="box__selected-item-title">
                    {{
                        props.menuItems.find(
                            (i) => i.id == props.selectedTabItemId
                        )?.title
                    }}
                </p>
                <google-material-icon
                    :props="{
                        iconName: 'arrow_drop_down',
                    }"
                />
            </div>
            <span class="box__notched notched-outline">
                <span
                    class="notched-outline__leading notched-outline--endings"
                ></span>
                <span class="notched-outline__notch">
                    <p class="notched-outline__label">{{ props.title }}</p>
                </span>
                <span
                    class="notched-outline__trailing notched-outline--endings"
                ></span>
            </span>
        </div>
        <div class="list-select__menu-container">
            <ul class="list-select__menu">
                <list-select-menu-item
                    v-for="item in props.menuItems"
                    :key="item.id"
                    :props="{
                        id: item.id,
                        title: item.title,
                        isSelected: item.id == props.selectedTabItemId,
                    }"
                    @click="emit('selected', item.id)"
                ></list-select-menu-item>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ListSelectMenuItem from './list-select-menu-item.vue';
import { IListSelectProps } from './list-select.types';
import { defineProps, defineEmits } from 'vue';
import GoogleMaterialIcon from '../../helper-components/google-material-icon/google-material-icon.vue';

defineProps<{
    props: IListSelectProps;
}>();

type IListSelectEmits = {
    (event: 'selected', itemId: number): void;
};

const emit = defineEmits<IListSelectEmits>();
</script>

<style lang="scss" scoped>
.list-select {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;

    &__box-container {
        cursor: pointer;
    }

    &__menu {
        overflow-y: auto;
        width: 100%;
        max-height: calc(56px * 4);

        &-container {
            background-color: var(--snotra--sys--surface);
            min-height: calc(56px * 1);
            max-height: calc(56px * 4 + 14px);
            border-radius: 4px;
            width: auto;
            padding: 7px 0px;
        }
    }
}

.box {
    display: grid;
    &__content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 calc(16px + 5px);
        grid-column: 1;
        grid-row: 1;
    }

    &__selected-item-title {
        font-size: 16px;
    }

    &__notched {
        grid-column: 1;
        grid-row: 1;
        height: 56px;
        min-height: 56px;
        display: flex;
        flex-direction: row;
    }
}

.notched-outline {
    width: 100%;
    border-color: var(--snotra--sys--outline);
    &__leading {
        width: 16px;
        min-width: 16px;
        height: 100%;
        border-left: 1px solid;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-color: inherit;
    }

    &__notch {
        min-width: fit-content;
        width: fit-content;
        display: flex;
    }

    &__trailing {
        width: 100%;
        height: 100%;
        border-right: 1px solid;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-color: inherit;
    }

    &--endings {
        border-top: 1px solid;
        border-color: inherit;
    }

    &--endings,
    &__notch {
        border-bottom: 1px solid;
        border-color: inherit;
    }

    &__label {
        margin-top: -7.5px;
        padding: 0 5px;
        color: var(--snotra--sys--on-background);
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
    }
}

.notched-outline:hover {
    border-color: var(--snotra--sys--on-surface);
}
</style>
