import $api from "@/http/api";
import { IAnnouncementsSubPageResponseModel } from "@/http/models/responseModels/teacherResponseModels/notificationPage/AnnouncementsSubpageResponseModel";

const getAnnouncementsSubpage = (version: string | null, state: { data: IAnnouncementsSubPageResponseModel }) => {
    $api.post<IAnnouncementsSubPageResponseModel>(
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