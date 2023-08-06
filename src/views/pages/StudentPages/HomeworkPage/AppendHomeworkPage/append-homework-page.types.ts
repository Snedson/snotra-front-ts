export interface AppendHomeworkPageResponseModel {
    avaliableSubjects: {
        [key: number]: string[];
    };
    classId: number;
    groupsOfClass: {
        [key: number]: string[];
    };
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
