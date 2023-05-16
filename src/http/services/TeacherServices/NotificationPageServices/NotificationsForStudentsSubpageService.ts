import $api, { getBaseUrl } from "@/http/api";
import { INotificationsForStudentsResponseModel } from "@/http/models/responseModels/teacherResponseModels/notificationPage/NotificationsForStudentsSubpageResponseModel";

const getNotificationPage = (version: string | null, state: { data: INotificationsForStudentsResponseModel }) => {
    $api
        .post<INotificationsForStudentsResponseModel>(
            `https://${getBaseUrl()}/api/Teacher/NotificationPage?notificationVersion=${version}`
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

export default getNotificationPage;