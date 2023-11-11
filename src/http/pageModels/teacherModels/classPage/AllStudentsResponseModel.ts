export interface AllStudentsResponseModel {
    students: Student[];
}

export interface Student {
    studentId: string;
    firstname: string;
    surname: string;
    patronymic: string;
    classId: number;
    className: string;
    isClassWarden: boolean;
    isOnDuty: boolean;
    dutyComment?: string;
    getFullName: string;
    getSurenameAndInitials: string;
}
