export type GetAddingHomeworkPageResponseModel = {
    avaliableSubjects: {
        [key: string]: string;
    };
    classId: number;
    groupsOfClass: {
        [key: string]: string;
    };
};
