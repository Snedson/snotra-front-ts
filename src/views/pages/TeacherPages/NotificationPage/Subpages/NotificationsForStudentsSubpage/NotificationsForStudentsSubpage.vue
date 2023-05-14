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
import { INotificationsForStudentsResponseModel } from '@/views/pages/TeacherPages/NotificationPage/Subpages/NotificationsForStudentsSubpage/NotificationsForStudents.types';
import teacherIcon from '@/assets/icons/emojis/teacher.png';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';

const state = reactive<{ data: INotificationsForStudentsResponseModel }>({
    data: {} as INotificationsForStudentsResponseModel,
});

const getNotificationPage = (version: string | null) => {
    axios
        .post<INotificationsForStudentsResponseModel>(
            `https://sixtyfour.snotra.site/api/Teacher/NotificationPage?notificationVersion=${version}`
        )
        .then((response) => {
            if (response.data.notifications) {
                state.data = response.data;
                localStorage.setItem(
                    'notificationsVersion',
                    response.data.version
                );
                localStorage.setItem(
                    'notifications',
                    JSON.stringify(response.data.notifications)
                );
            } else {
                const localNotifications =
                    localStorage.getItem('notifications');
                state.data.notifications = JSON.parse(
                    localNotifications ? localNotifications : '[]'
                );
            }
        });
    return;
};

onMounted(() => {
    const version = localStorage.getItem('notificationsVersion');
    const notifications = localStorage.getItem('notifications');
    notifications && version
        ? getNotificationPage(version)
        : getNotificationPage(null);
});
</script>

<style lang="scss" scoped>
.notifications-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
