<template>
    <header>
        <div class="header-logo">
            <img class="header-logo__img" src="@/assets/snotra_logo.png"/>
            <p class="header-logo__label">Snotra</p>
        </div>
    </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

header {
    width: 100%;
    height: 74px;
    background-color: var(--snotra--surfaces---nav-rail-amp--header-background);
    display: flex;
    align-items: center;
}

.header-logo {
    margin-left: 330px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;

    &__img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }

    &__label {
        font-weight: 700;
        font-size: 35px;
        color: var(--snotra--sys--on-background);
    }
}

@media (max-width: 800px) {
    .header-logo {
        margin-left: 0;
        justify-content: center;
    }
}

</style>