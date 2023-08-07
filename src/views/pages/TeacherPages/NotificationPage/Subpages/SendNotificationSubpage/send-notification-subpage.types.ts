export interface SendNotificationPageResponseModel {
    schoolClasses: {
        [key: number]: string;
    };
    groupsByClasses: {
        [key: number]: {
            [key: number]: string;
        };
    };
}

export interface SendNotificationPageStateModel {
    reponse: SendNotificationPageResponseModel;
    notification: NotificationForm;
}

export interface NotificationForm {
    text: string;
    schoolClassId: number | null;
    groupId: number | null;
    studentId: number | null;
}

export interface SendNotificationRequestModel {
    isAnnouncement: boolean;
    message: string;
    audienceClassId: number;
    audienceGroupId: number | null;
    audienceStudentId: string | null;
}
