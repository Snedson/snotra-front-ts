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
    recipientClassId: number;
    recipientGroupId: number | null;
    recipientStudentId: string | null;
}
