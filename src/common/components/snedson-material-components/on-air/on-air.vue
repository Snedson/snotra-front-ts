<template>
  <div class="on-air">
    <div class="on-air__wrapper">
      <span class="on-air__title">Сейчас идёт</span>
      <img src="@/assets/img/on-air/icon.svg" class="on-air__icon" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.on-air {
  font-family: 'Fira Sans';
  font-style: normal;
  width: fit-content;

  &__wrapper {
    padding: 0px 0px 0px 15px;
    border-radius: 50px;
    background: rgba(255, 251, 255, 0.85);
    display: flex;
    align-items: center;
    gap: 5px;
    width: fit-content;
  }
}
</style>
