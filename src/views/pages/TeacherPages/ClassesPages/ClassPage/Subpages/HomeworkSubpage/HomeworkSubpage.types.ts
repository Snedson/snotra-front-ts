export type GetHomeworkListResponseModel = {
    homeworks: {
        [key: string]: HomeworkModel[];
    };
};

export type HomeworkModel = {
    classFullName: string;
    classId: 20;
    groupName?: string;
    groupId?: number;
    subjectName: string;
    iconURL: string;
    taskText: string;
    additionalFilesUri: string;
    appendDate: string;
    scheduledDate: string;
    authorName: string;
    authorsDutyComment?: string;
    gradientColor1: string;
    gradientColor2: string;
};
