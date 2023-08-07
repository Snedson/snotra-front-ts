<template>
    <div class="notifications-list">
        <universal-card
            v-for="notification in state.data.notifications"
            :props="{
                content: notification.notificationText,
                type: 'outlined',
                dataTags: [
                    {
                        title:
                            'Получатель: ' + notification.notificationReciever,
                        iconCompleteUrl: studentIcon,
                        color: '',
                    },
                    {
                        title:
                            'Дата отправления: ' +
                            moment(notification.date).format('DD.MM.YYYY'),
                        iconCompleteUrl: calendarIcon,
                        color: '',
                    },
                ],
            }"
            :key="notification.notificationId"
        ></universal-card>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import getNotificationPage from './api-methods';
import studentIcon from '@/assets/icons/emojis/student.png';
import calendarIcon from '@/assets/icons/emojis/calendar.png';
import moment from 'moment';
import { INotificationsForStudentsResponseModel } from './notifications-for-students.types';

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
