export interface AppendHomeworkPageResponseModel {
    avaliableSubjects: {
        [key: number]: string;
    };
    classId: number;
    groupsOfClass: {
        [key: number]: string;
    };
}

export interface AppendHomeworkElementRequestModel {
    classId: number;
    groupId: number | null;
    subjectId: number;
    scheduledDate: string;
    taskText: string;
    additionalFilesUri: null;
}

export interface AppendHomeworkPageStateModel {
    data: AppendHomeworkPageResponseModel;
    task: HomeworkTask;
}

export interface HomeworkTask {
    text: string;
    scheduledDate: string;
    subjectId: number | null;
    groupId: number | null;
}

export const DateFormat = 'YYYY-MM-DD';
