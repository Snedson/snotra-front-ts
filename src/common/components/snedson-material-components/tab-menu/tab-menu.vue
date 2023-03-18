<template>
  <div class="tab-menu">
    <div class="tab-menu__wrapper">
      <div
        v-for="tabItem in props.tabs"
        class="tab-item"
        :class="
          tabItem.id === props.selectedTabItemId ? 'tab-item_selected' : ''
        "
        @click="
          selectTabItemFunction ? selectTabItemFunction(tabItem.id) : () => {}
        "
      >
        <img
          v-if="tabItem.iconUrl"
          :src="tabItem.iconUrl"
          class="tab-item__icon"
        />
        <span class="tab-item__title">{{ tabItem.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { ITab } from './ITabMenu';

const props = defineProps({
  tabs: Array as PropType<ITab[]>,
  selectedTabItemId: Number,
  selectTabItemFunction: Function as PropType<(tadId: number) => void>,
});
</script>

<style lang="scss">
.tab-menu {
  font-family: 'Fira Sans';
  font-style: normal;
  background-color: white;
  width: 100%;
  min-height: 62px;
  border-radius: 10px;
  padding: 20px 25px;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
}
.tab-item {
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;

  &_selected {
    font-weight: 700;
    color: #c10000;
    border: 4px;
    border-color: #c10000;
    border-style: none none solid none;
  }
}
</style>
