import $api from '@/http/api';
import { EmptyResponse } from '@/models/EmptyResponse';
import {
    AppendHomeworkElementRequestModel,
    AppendHomeworkPageResponseModel,
} from './append-homework-page.types';

export const getAppendHomeworkPage = () => {
    return $api.get<AppendHomeworkPageResponseModel>(
        '/api/Student/AppendHomeworkPage'
    );
};

export const postAppendHomeworkElement = (
    requestModel: AppendHomeworkElementRequestModel
) => {
    return $api.post<EmptyResponse>(
        '/api/Student/AppendHomeworkElement',
        requestModel
    );
};
