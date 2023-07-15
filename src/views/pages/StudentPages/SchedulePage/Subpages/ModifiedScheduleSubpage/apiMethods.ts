import $api from '@/http/api';
import { GetStudentModifiedScheduleSubpageResponseModel } from './ModifiedSchedulePage.types';

export const getStudentModifiedScheduleSubpage = () => {
    return $api.get<GetStudentModifiedScheduleSubpageResponseModel>(
        '/api/Student/SchedulePageModified'
    );
};
