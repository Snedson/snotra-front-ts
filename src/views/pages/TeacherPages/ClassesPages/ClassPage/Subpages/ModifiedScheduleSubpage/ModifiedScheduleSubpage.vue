<template>
    <p>Teacher's Modified Schedule Subpage</p>
</template>

<script lang="ts" setup>
import $api from '@/http/api';
import { onMounted } from 'vue';

onMounted(() => {
    $api.get('/api/Teacher/MSEForClassPage').then((res) => {
        console.log(res);
    });
});
</script>

<style lang="scss" scoped></style>
