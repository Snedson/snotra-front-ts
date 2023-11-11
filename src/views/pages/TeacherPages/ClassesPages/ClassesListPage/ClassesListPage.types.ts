import { SchoolClassModel } from '@/models/SchoolClassModel';

export type GetSchoolClassesPageResponseModel = {
    schoolClasses: SchoolClassModel[];
};

export type SchoolClassesPageState = {
    [gradeNumber: number]: SchoolClassModel[];
};

export const GradeTitles: { [gradeNumber: number]: string } = {
    5: 'Пятые классы',
    6: 'Шестые классы',
    7: 'Седьмые классы',
    8: 'Восьмые классы',
    9: 'Девятые классы',
    10: 'Десятые классы',
    11: 'Одиннадцатые классы',
};
