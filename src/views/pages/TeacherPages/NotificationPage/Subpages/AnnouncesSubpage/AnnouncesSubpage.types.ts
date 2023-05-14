export interface IAnnouncesPageResponseModel {
    announcements: IAnnouncement[];
    version: string;
}

export interface IAnnouncement {
    date: string;
    notificationAuthorSurenameAndInitials: string;
    notificationId: number;
    notificationText: string;
}
