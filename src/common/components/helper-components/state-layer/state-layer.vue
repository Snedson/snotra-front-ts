<template>
    <div class="state-layer">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.state-layer {
    width: 100%;
    height: 100%;
    transition: all 200ms;

    &:hover {
        background-color: var(--snotra--state-layers--on-surface--opacity-8);
    }

    &:focus {
        background-color: var(--snotra--state-layers--on-surface--opacity-12);
    }
}
</style>