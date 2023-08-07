import { INotification } from '@/models/Notifications/NotificationModel';

export interface INotificationsForStudentsResponseModel {
    notifications: INotification[];
    version: string;
}
