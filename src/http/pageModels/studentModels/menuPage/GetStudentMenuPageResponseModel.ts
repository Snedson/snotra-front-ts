export type GetStudentMenuPageResponseModel = {
    surname: string;
    name: string;
    patronymic: string;
    allStatusesForStudents: StudentStatus[];
    currentStatusID: number;
    isClassWarden: boolean;
    isOnDuty: boolean;
    dutyComment: string;
};

export type StudentStatus = {
    statusID: number;
    statusName: string;
    iconURL: string;
    statusDesctiption: string;
    canStudentSetIt: boolean;
    isOverrideAtTheSameDayAvaliable: boolean;
    deleteRecordsAutomaticly: boolean;
    requiresNotifyCurrentLessonTeacher: boolean;
    statusButtonName: boolean;
};
