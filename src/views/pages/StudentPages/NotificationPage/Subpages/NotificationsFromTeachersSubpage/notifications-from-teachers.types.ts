import { INotification } from '@/models/Notifications/NotificationModel';

export interface INotificationsFromTeachersResponseModel {
    notifications: INotification[];
    version: string;
}
