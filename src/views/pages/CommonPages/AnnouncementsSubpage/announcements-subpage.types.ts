import { IAnnouncement } from '@/models/Notifications/NotificationModel';

export interface IAnnouncementsSubPageResponseModel {
    announcements: IAnnouncement[];
    version: string;
}
