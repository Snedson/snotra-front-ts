import { WeekDays } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';

export type GetStudentUsualScheduleSubpageResponseModel = {
    uses: {
        usEsForClass: {
            [key in WeekDays]: StudentUSE[];
        };
        version: string;
    };
    usps: {
        usPs: {
            [key in WeekDays]: StudentUsualSchedulaParam[];
        };
        version: string;
    };
};

export type StudentUSE = {
    num: number;
    iconURL: string;
    subjectFullName: string;
    subjectid: number;
    schoolClass: {
        classId: number;
        className: string;
        classHomeLocationId: number;
        classHomeLocationName: string;
        isMockClass: boolean;
        colorSchemeName: string;
    };
    locationId: number;
    location: string;
    isInSchool: boolean;
    hostName: string;
    isSkipped: boolean;
    groupName: string;
    groupId: number | null;
    alternativeGroupsLessons: {
        [key: string]: string;
    };
    colorSchemeName: string;
    gradientColor1: string;
    gradientColor2: string;
};

export type StudentUsualSchedulaParam = {
    num: number;
    durationInMins: number;
    begin: string;
    end: string;
    breakDurationInMins: number;
};
