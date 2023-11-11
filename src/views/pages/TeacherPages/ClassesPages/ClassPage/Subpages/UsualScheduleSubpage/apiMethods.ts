import $api from '@/http/api';
import { UsualTeacherClassSubpageResponseModel } from './UsualTeacherClassSubpageResponseModel';

export const getUsualTeacherScheduleSubpageByClassId = (classId) => {
    return $api.get<UsualTeacherClassSubpageResponseModel>(
        `/api/Teacher/USEForClassPage?classId=${classId}`
    );
};
