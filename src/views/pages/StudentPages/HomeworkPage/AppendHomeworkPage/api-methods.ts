import $api from '@/http/api';
import { AppendHomeworkPageResponseModel } from './append-homework-page.types';

export const getAppendHomeworkPage = () => {
    return $api.get<AppendHomeworkPageResponseModel>(
        '/api/Student/AppendHomeworkPage'
    );
};
