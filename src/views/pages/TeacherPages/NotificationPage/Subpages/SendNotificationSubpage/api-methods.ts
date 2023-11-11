import $api from '@/http/api';
import { EmptyResponse } from '@/models/EmptyResponse';
import {
    SendNotificationPageResponseModel,
    SendNotificationRequestModel,
} from './send-notification-subpage.types';

export const getSendNotificationPage = () => {
    return $api.get<SendNotificationPageResponseModel>(
        '/api/Teacher/SendNotificationPage'
    );
};

export const postSendNotifiation = (requset: SendNotificationRequestModel) => {
    return $api.post<EmptyResponse>('/api/Teacher/SendNotification', requset);
};
