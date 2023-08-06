export interface AppendHomeworkPageResponseModel {
    avaliableSubjects: {
        [key: number]: string[];
    };
    classId: number;
    groupsOfClass: {
        [key: number]: string[];
    };
}

export interface AppendHomeworkElementRequestModel {
    classId: number;
    groupId: number | null;
    subjectId: number;
    scheduledDate: Date;
    taskText: string;
    additionalFilesUri: null;
}

export interface AppendHomeworkPageStateModel {
    data: AppendHomeworkPageResponseModel;
    task: HomeworkTask;
}

export interface HomeworkTask {
    text: string;
    scheduledDate: Date;
    subjectId: number | null;
    groupId: number | null;
}
