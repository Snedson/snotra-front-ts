export interface SetStatusResponse {
    teacherRecievers: { [key: string]: boolean } | null;
    isOverrideAtTheSameDayAvaliable: boolean;
    studentCantOverrideDescription: string | null;
    deleteRecordsAutomaticly: boolean;
}

export const isSetStatusResponse = (arg: any): arg is SetStatusResponse => {
    return true;
};
