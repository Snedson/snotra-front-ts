import $api from '@/http/api';
import { GetModifiedScheduleSubpageResponseModel } from './ModifiedScheduleSubpage.types';

export const getModifiedTeacherClassScheduleSubpageByClassId = (classId) => {
    return $api.get<GetModifiedScheduleSubpageResponseModel>(
        `/api/Teacher/MSEForClassPage?classId=${classId}`
    );
};
