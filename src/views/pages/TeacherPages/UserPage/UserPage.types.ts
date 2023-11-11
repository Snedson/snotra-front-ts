import { SchoolDataModel } from '@/models/school-data.model';
import { BaseSchoolClassModel } from '@/models/SchoolClassModel';

export type TeacherUserPageResponse = {
    surname: string;
    firstname: string;
    patronymic: string;
    jobTitle: string;
    masterClass: BaseSchoolClassModel | null;
    schoolData: SchoolDataModel;
};
