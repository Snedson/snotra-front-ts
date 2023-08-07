<template>
    <div class="notifications-list">
        <universal-card
            v-for="announcement in state.data.announcements"
            :props="{
                content: announcement.notificationText,
                type: 'outlined',
                dataTags: [
                    {
                        title:
                            'Отправитель: ' +
                            announcement.notificationAuthorSurenameAndInitials,
                        iconCompleteUrl: teacherIcon,
                        color: '',
                    },
                    {
                        title:
                            'Дата отправления: ' +
                            moment(announcement.date).format('DD.MM.YYYY'),
                        iconCompleteUrl: calendarIcon,
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
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import teacherIcon from '@/assets/icons/emojis/teacher.png';
import calendarIcon from '@/assets/icons/emojis/calendar.png';
import getAnnouncementsSubpage from './api-methods';
import { IAnnouncementsSubPageResponseModel } from '@/http/pageModels/teacherModels/notificationPage/AnnouncementsSubpageResponseModel';
import moment from 'moment';

const state = reactive<{ data: IAnnouncementsSubPageResponseModel }>({
    data: {} as IAnnouncementsSubPageResponseModel,
});

onMounted(() => {
    const version = localStorage.getItem('announcementsVersion');
    const announcements = localStorage.getItem('announcements');
    announcements && version
        ? getAnnouncementsSubpage(version, state)
        : getAnnouncementsSubpage(null, state);
});
</script>

<style lang="scss" scoped>
.notifications-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
