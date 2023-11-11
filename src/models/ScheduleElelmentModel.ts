import { BaseSchoolClassModel } from './SchoolClassModel';

interface AbstractScheduleElementModel {
    num: number;
    iconURL: string;
    subjectFullName: string;
    subjectid: number;
    schoolClass: BaseSchoolClassModel;
    locationId: number;
    location: string;
    isInSchool: true;
    hostName: string;
    isSkipped: boolean;
    groupName: string | null;
    groupId: number | null;
    alternativeGroupsLessons: {
        [key: string]: string;
    } | null;
    colorSchemeName: string;
    gradientColor1: string;
    gradientColor2: string;
}

export interface ModifiedScheduleElementModel
    extends AbstractScheduleElementModel {
    comments: string | null;
    mseUuid: string;
    thisMseVersion: string;
}

export interface UsualScheduleElementModel
    extends AbstractScheduleElementModel {}
