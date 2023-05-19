<template>
    <div class="list-select">
        <div class="list-select__notched notched-outline">
            <span
                class="notched-outline__leading notched-outline--endings"
            ></span>
            <span class="notched-outline__notch">
                <p class="notched-outline__label">Label</p>
            </span>
            <span
                class="notched-outline__trailing notched-outline--endings"
            ></span>
        </div>
        <div></div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.list-select {
    width: 100%;
    height: 56px;
    display: flex;
    margin-top: 10px;

    &__notched {
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
        margin-top: -10px;
        padding: 0 5px;
        color: var(--snotra--sys--on-background);
        font-family: 'Roboto', sans-serif;
    }
}

.notched-outline:hover {
    border-color: var(--snotra--sys--on-surface);
}
</style>
