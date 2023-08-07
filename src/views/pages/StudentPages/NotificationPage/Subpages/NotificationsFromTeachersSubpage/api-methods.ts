import $api from '@/http/api';
import { INotificationsFromTeachersResponseModel } from './notifications-from-teachers.types';

const getNotificationPage = (
    version: string | null,
    state: { data: INotificationsFromTeachersResponseModel }
) => {
    $api.get<INotificationsFromTeachersResponseModel>(
        `/api/Student/NotificationPage=${version}`
    ).then((response) => {
        if (response.data.notifications) {
            state.data = response.data;
            localStorage.setItem(
                'studentNotificationsVersion',
                response.data.version
            );
            localStorage.setItem(
                'studentNotifications',
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
