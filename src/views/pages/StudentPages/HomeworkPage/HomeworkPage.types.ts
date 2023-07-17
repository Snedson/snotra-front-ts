export type GetHomeworkPageResponseModel = {
    homeworkVersion: string;
    homework: {
        [key: string]: Homework[];
    };
};

export type Homework = {
    classFullName: string;
    classId: number;
    groupName: string;
    groupId: number;
    subjectName: string;
    iconURL: string;
    taskText: string;
    additionalFilesUri: string;
    appendDate: string;
    scheduledDate: string;
    authorName: string;
    authorsDutyComment: string;
    colorSchemeName: string;
    gradientColor1: string;
    gradientColor2: string;
};
