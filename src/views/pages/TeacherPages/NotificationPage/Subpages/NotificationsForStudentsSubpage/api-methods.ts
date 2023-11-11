import $api from '@/http/api';
import { INotificationsForStudentsResponseModel } from './notifications-for-students.types';

const getNotificationPage = (
    version: string | null,
    state: { data: INotificationsForStudentsResponseModel }
) => {
    $api.post<INotificationsForStudentsResponseModel>(
        `/api/Teacher/NotificationPage?notificationVersion=${version}`
    ).then((response) => {
        if (response.data.notifications) {
            state.data = response.data;
            localStorage.setItem('notificationsVersion', response.data.version);
            localStorage.setItem(
                'notifications',
                JSON.stringify(response.data.notifications)
            );
        } else {
            const localNotifications = localStorage.getItem('notifications');
            state.data.notifications = JSON.parse(
                localNotifications ? localNotifications : '[]'
            );
        }
    });
    return;
};

export default getNotificationPage;
