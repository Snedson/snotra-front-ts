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
                            'Отправитель: ' +
                            notification.notificationAuthorSurenameAndInitials,
                        iconCompleteUrl: teacherIcon,
                        color: '',
                    },
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

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import teacherIcon from '@/assets/icons/emojis/teacher.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import calendarIcon from '@/assets/icons/emojis/calendar.png';
import { INotificationsFromTeachersResponseModel } from './notifications-from-teachers.types';
import getNotificationPage from './api-methods';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import moment from 'moment';

const state = reactive<{ data: INotificationsFromTeachersResponseModel }>({
    data: {} as INotificationsFromTeachersResponseModel,
});

onMounted(() => {
    const version = localStorage.getItem('studentNotificationsVersion');
    const notifications = localStorage.getItem('studentNotificationsVersion');
    notifications && version
        ? getNotificationPage('qwerty', state)
        : getNotificationPage('qwerty', state);
});
</script>

<style scoped lang="scss">
.notifications-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
