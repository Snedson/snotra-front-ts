import $api from '@/http/api';
import { IAnnouncementsSubPageResponseModel } from './announcements-subpage.types';

const getAnnouncementsSubpage = (
    version: string | null,
    state: { data: IAnnouncementsSubPageResponseModel }
) => {
    $api.post<IAnnouncementsSubPageResponseModel>(
        // In api v2 teacher specific endpoint will be replaced with common one
        `/api/Teacher/AnnouncementsPage?notificationVersion=${version}`
    ).then((response) => {
        if (response.data.announcements) {
            state.data = response.data;
            localStorage.setItem('announcementsVersion', response.data.version);
            localStorage.setItem(
                'announcements',
                JSON.stringify(response.data.announcements)
            );
        } else {
            const localAnnouncements = localStorage.getItem('announcements');
            state.data.announcements = JSON.parse(
                localAnnouncements ? localAnnouncements : '[]'
            );
        }
    });
};

export default getAnnouncementsSubpage;
