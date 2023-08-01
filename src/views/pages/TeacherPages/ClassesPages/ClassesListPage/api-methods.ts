import $api from '@/http/api';
import { GetSchoolClassesPageResponseModel } from './ClassesListPage.types';

export const getSchoolClassesPage = () => {
    return $api.get<GetSchoolClassesPageResponseModel>(
        `/api/Teacher/SchoolClassesPage?classesListVersion=string`
    );
};
