<template>
    <p>Teacher's Announces Subpage</p>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { IAnnouncesPageResponseModel } from '@/views/pages/TeacherPages/NotificationPage/Subpages/AnnouncesSubpage/AnnouncesSubpage.types';

const state = reactive<IAnnouncesPageResponseModel>({ a: '' });
const getAnnouncementPage = () => {
    axios
        .post('https://mbousosh1.snotra.site/api/Teacher/AnnouncementsPage')
        .then((response) => {
            console.log(response);
        });
};

onMounted(() => {
    getAnnouncementPage();
});
</script>

<style lang="scss" scoped></style>
