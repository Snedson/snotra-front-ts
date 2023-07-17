import $api from '@/http/api';
import { GetStudentMenuPageResponseModel } from '@/http/pageModels/studentModels/menuPage/GetStudentMenuPageResponseModel';

export const getStudentMenuPage = () => {
    return $api.get<GetStudentMenuPageResponseModel>('/api/Student/MenuPage');
};
