import $api from '@/http/api';
import { IAnnouncementsSubPageResponseModel } from './announcements-subpage.types';

const getAnnouncementsSubpage = (
    version: string | null,
    state: { data: IAnnouncementsSubPageResponseModel }
) => {
    $api.get<IAnnouncementsSubPageResponseModel>(
        `/api/v2/notification/announcements?notificationVersion=${version}`
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
