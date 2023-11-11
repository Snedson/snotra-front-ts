import SchoolRoles from '@/common/types/school-roles';

export interface AuthRefreshResponse {
    role: SchoolRoles;
    schoolSnotraDomain: string;
}
