import SchoolRoles from '@/interfaces/school-roles';

export interface AuthRefreshResponse {
    role: SchoolRoles;
    schoolSnotraDomain: string;
}
