<template>
    <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import router from '@/router';
import SchoolRoles from '@/common/types/school-roles';
import AuthService from '@/services/AuthService';

onMounted(() => {
    const userRole = localStorage.getItem('Role');

    switch (userRole) {
        case SchoolRoles.Teacher:
            router.push({ name: 'sn.teacher.main' });
            break;
        case SchoolRoles.Student:
            router.push({ name: 'sn.student.main' });
            break;
        default:
            AuthService.logout();
    }
});
</script>

<style lang="scss" scoped></style>
