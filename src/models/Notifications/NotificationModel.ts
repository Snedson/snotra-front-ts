interface AbstractNotification {
    date: string;
    notificationAuthorSurenameAndInitials: string;
    notificationId: number;
    notificationText: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAnnouncement extends AbstractNotification {}

export interface INotification extends AbstractNotification {
    notificationReciever: string;
}
