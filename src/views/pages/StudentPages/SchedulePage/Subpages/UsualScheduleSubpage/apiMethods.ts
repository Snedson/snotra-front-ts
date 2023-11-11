import $api from '@/http/api';
import { GetStudentUsualScheduleSubpageResponseModel } from './UsualScheduleSubpage.types';

export const getUsualScheduleSubpage = () => {
    return $api.get<GetStudentUsualScheduleSubpageResponseModel>(
        '/api/Student/SchedulePageUsual'
    );
};
