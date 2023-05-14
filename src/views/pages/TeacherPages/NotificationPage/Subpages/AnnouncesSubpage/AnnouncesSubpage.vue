<template>
    <div class="notifications-list">
        <universal-card
            v-for="announcement in state.data.announcements"
            :props="{
                content: announcement.notificationText,
                type: 'outlined',
                dataTags: [
                    {
                        title: announcement.notificationAuthorSurenameAndInitials,
                        iconCompleteUrl: teacherIcon,
                        color: '',
                    },
                ],
            }"
            :key="announcement.notificationId"
        ></universal-card>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { IAnnouncesPageResponseModel } from '@/views/pages/TeacherPages/NotificationPage/Subpages/AnnouncesSubpage/AnnouncesSubpage.types';
import $api from '@/http/api';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import teacherIcon from '@/assets/icons/emojis/teacher.png';

const state = reactive<{ data: IAnnouncesPageResponseModel }>({
    data: {} as IAnnouncesPageResponseModel,
});
const getAnnouncementPage = (version: string | null) => {
    $api.post<IAnnouncesPageResponseModel>(
        `https://sixtyfour.snotra.site/api/Teacher/AnnouncementsPage?notificationVersion=${version}`
    ).then((response) => {
        if (response.data.announcements) {
            state.data = response.data;
            localStorage.setItem('announcementsVersion', response.data.version);
            localStorage.setItem(
                'announcements',
                JSON.stringify(response.data.announcements)
            );
        } else {
            const localAnnouncements = localStorage.getItem('announcements');
            state.data.announcements = JSON.parse(
                localAnnouncements ? localAnnouncements : '[]'
            );
        }
    });
};

onMounted(() => {
    const version = localStorage.getItem('announcementsVersion');
    const announcements = localStorage.getItem('announcements');
    announcements && version
        ? getAnnouncementPage(version)
        : getAnnouncementPage(null);
});
</script>

<style lang="scss" scoped>
.notifications-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
