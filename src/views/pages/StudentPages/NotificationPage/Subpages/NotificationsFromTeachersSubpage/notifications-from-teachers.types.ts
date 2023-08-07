import { INotification } from '@/http/pageModels/teacherModels/notificationPage/NotificationsForStudentsSubpageResponseModel';

export interface INotificationsFromTeachersResponseModel {
    notifications: INotification[];
    version: string;
}
