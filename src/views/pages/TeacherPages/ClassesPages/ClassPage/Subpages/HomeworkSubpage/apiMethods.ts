import $api from '@/http/api';
import { GetHomeworkListResponseModel } from './HomeworkSubpage.types';

export const getTeacherClassPageHomeworkSubpage = (classId) => {
    return $api.get<GetHomeworkListResponseModel>(
        `/api/Teacher/HomeworkListForClassPage?classId=${classId}`
    );
};
