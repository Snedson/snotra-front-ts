<template>
    <navigation-rail/>
    <navigation-bar/>
</template>

<script lang="ts" setup>
import NavigationRail from "@/views/navigation-views/navigation-rail.vue";
import NavigationBar from "@/views/navigation-views/navigation-bar.vue";

</script>

<style lang="scss">
.nav-bar__fab-transition-enter-active,
.nav-bar__fab-transition-leave-active {
    transition: opacity 0.5s ease;
}

.nav-bar__fab-transition-enter-from, 
.nav-bar__fab-transition-leave-to {
    opacity: 0;
}
</style>