export interface INotificationsForStudentsResponseModel {
    notifications: INotification[];
    version: string;
}

export interface INotification {
    date: string;
    notificationAuthorSurenameAndInitials: string;
    notificationId: number;
    notificationReciever: string;
    notificationText: string;
}
