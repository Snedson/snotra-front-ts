<template>
    <div class="on-air-wrapper">
        <div class="on-air">
            <p class="on-air__title">Сейчас идёт</p>
            <img src="@/assets/img/on-air/icon.svg" class="on-air__icon" />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.on-air {
    padding: 0px 0px 0px 15px;
    border-radius: 50px;
    background: var(--snotra--sys--background-85);
    display: flex;
    align-items: center;
    gap: 5px;
    width: fit-content;
    
    &__title {
        color: var(--snotra--sys--on-background);
    }

    &-wrapper {
        width: fit-content;
    }
}
</style>
