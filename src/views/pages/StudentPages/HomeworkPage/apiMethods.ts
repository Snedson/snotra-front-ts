import $api from '@/http/api';
import { GetHomeworkPageResponseModel } from './HomeworkPage.types';

export const getHomeworkPage = () => {
    return $api.get<GetHomeworkPageResponseModel>('/api/Student/HomeworkPage');
};
