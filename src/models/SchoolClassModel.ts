export interface BaseSchoolClassModel {
    classId: number;
    className: string;
    classHomeLocationId: number;
    classHomeLocationName: string;
    isMockClass: boolean;
    colorSchemeName: string;
}

export interface SchoolClassModel extends BaseSchoolClassModel {
    gradientColor1: string;
    gradientColor2: string;
}
