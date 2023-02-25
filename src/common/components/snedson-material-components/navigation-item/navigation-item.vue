<template>
    <li class="nav-item-wrapper">
        <a class="nav-item" :class="props.selected ? 'nav-item_selected' : ''" href="#" :title="props.title">
            <state-layer class="nav-item__state-layer">
                <div class="nav-item__icon-wrapper">
                    <google-material-icon 
                        :icon-name="props.iconName"
                        color="var(--snotra--sys--on-secondary-container)"
                        :selected="props.selected"
                        class="nav-item__icon"/>
                </div>
            </state-layer>
        </a>
    </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import stateLayer from '@/common/components/helper-components/state-layer/state-layer.vue';
import googleMaterialIcon from '@/common/components/helper-components/google-material-icon/google-material-icon.vue';

const props = defineProps({
    selected: Boolean,
    iconName: String,
    title: String,
});
</script>

<style lang="scss" scoped>
.nav-item {
    width: 100%;
    height: 100%;
    border-radius: 100px;
    text-decoration: none;

    &-wrapper {
        width: 60px;
        height: 35px;
        border-radius: 100px;
        display: flex;
    }

    &__state-layer {
        width: 100%;
        height: 100%;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__icon {
        font-size: 30px;
        &-wrapper {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-user-select: none; /* Safari */
            -ms-user-select: none; /* IE 10 and IE 11 */
            user-select: none; /* Standard syntax */
        }
    }

    &_selected {
        background-color: var(--snotra--sys--secondary-container);
    }
}

@media (max-width: 800px) {
    .nav-item {
        width: 65px;
    }
}
</style>