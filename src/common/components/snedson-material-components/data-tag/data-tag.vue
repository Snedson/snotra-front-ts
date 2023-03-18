<template>
  <div class="data-tag">
    <div class="data-tag__wrapper" :style="`background: ${color}`">
      <img
        v-if="iconLocal"
        class="data-tag__icon"
        :src="require(`@/assets/icons/emojis/${iconLocal}`)"
      />
      <img v-else-if="iconCompleteUrl" :src="iconCompleteUrl" />
      <span class="data-tag__title">{{ props.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  iconLocal: String,
  iconCompleteUrl: String,
  title: String,
  color: String,
});
</script>

<style lang="scss" scoped>
.data-tag {
  height: auto;
  width: auto;
  min-height: 30px;

  font-family: 'Fira Sans';
  font-style: normal;

  &__wrapper {
    padding: 4px 10px;
    box-sizing: border-box;
    border-radius: 7px;
    border: 1px solid #857370;
    display: flex;
    flex-direction: row;
    width: auto;
    gap: 10px;
    align-items: center;
    width: fit-content;
  }

  &__icon {
    width: 23px;
    height: 23px;
  }

  &__title {
    margin: 0;
    width: auto;
    font-weight: 400;
    font-size: 15px;
    word-break: break-all;
    white-space: pre-wrap;
  }
}
</style>
