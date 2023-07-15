import $api from '@/http/api';
import { GetAddingHomeworkPageResponseModel } from './AddingHomeworkPage.types';

export const getAddingHomeworkPage = () => {
    return $api.get<GetAddingHomeworkPageResponseModel>(
        '/api/Student/AppendHomeworkPage'
    );
};
