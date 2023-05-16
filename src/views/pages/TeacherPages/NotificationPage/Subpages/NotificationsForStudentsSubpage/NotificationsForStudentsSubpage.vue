<template>
    <div class="notifications-list">
        <universal-card
            v-for="notification in state.data.notifications"
            :props="{
                content: notification.notificationText,
                type: 'outlined',
                dataTags: [
                    {
                        title: notification.notificationAuthorSurenameAndInitials,
                        iconCompleteUrl: teacherIcon,
                        color: '',
                    },
                    {
                        title: notification.notificationReciever,
                        iconCompleteUrl: teacherIcon,
                        color: '',
                    },
                ],
            }"
            :key="notification.notificationId"
        ></universal-card>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import teacherIcon from '@/assets/icons/emojis/teacher.png';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import { INotificationsForStudentsResponseModel } from '@/http/models/responseModels/teacherResponseModels/notificationPage/NotificationsForStudentsSubpageResponseModel';
import getNotificationPage from '@/http/services/TeacherServices/NotificationPageServices/NotificationsForStudentsSubpageService';

const state = reactive<{ data: INotificationsForStudentsResponseModel }>({
    data: {} as INotificationsForStudentsResponseModel,
});

onMounted(() => {
    const version = localStorage.getItem('notificationsVersion');
    const notifications = localStorage.getItem('notifications');
    notifications && version
        ? getNotificationPage(version, state)
        : getNotificationPage(null, state);
});
</script>

<style lang="scss" scoped>
.notifications-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
