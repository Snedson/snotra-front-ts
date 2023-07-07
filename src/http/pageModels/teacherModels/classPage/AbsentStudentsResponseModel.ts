export interface AbsentStudentsResponseModel {
    studentsStatuses: StudentsStatus[] | null;
    version: string | null;
}

export interface StudentsStatus {
    studentId: string;
    studentFullName: string;
    studentClassName: string | null;
    dateOfAppend: string;
    statusId: number;
    statusName: string;
    iconURL: string;
    notificationAutogeneratedText: string | null;
    comment: string;
    commentStaffId: string | null;
    commentStaffFullName: string | null;
}
