<template>
    <div></div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import SchoolRoles from '@/common/types/school-roles';
import AuthService from '@/services/AuthService';

const router = useRouter();
const route = useRoute();

onMounted(() => {
    const domain = route.query.snotra_domain;
    const role = route.query.snotra_role;
    if (
        domain &&
        role &&
        typeof domain === 'string' &&
        typeof role === 'string'
    ) {
        localStorage.setItem('schoolSnotraDomain', domain);
        localStorage.setItem('role', role);

        switch (role) {
            case SchoolRoles.Teacher:
                router.push({ name: 'sn.teacher.main' });
                break;
            case SchoolRoles.Student:
                router.push({ name: 'sn.student.main' });
                break;
            default:
                AuthService.logout();
        }
    }
});
</script>

<style scoped lang="scss"></style>
