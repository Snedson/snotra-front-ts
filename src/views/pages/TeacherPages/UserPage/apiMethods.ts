import $api from '@/http/api';
import { TeacherUserPageResponse } from './UserPage.types';

export const getTeacherUserPage = () => {
    return $api.get<TeacherUserPageResponse>('/api/v2/User');
};
