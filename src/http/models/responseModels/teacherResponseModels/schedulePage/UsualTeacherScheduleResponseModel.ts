import { UsualScheduleElementModel } from '@/models/ScheduleElelmentModel';
import { ScheduleParamsModel } from '@/models/ScheduleParamsModel';

export interface UsualTeacherScheduleResponseModel {
    uses: {
        usEsForClass: {
            [key in WeekDays]: UsualScheduleElementModel[];
        };
        version: string;
    };
    usPs: {
        usPs: {
            [key in WeekDays]: ScheduleParamsModel[];
        };
        version: string;
    };
}

export enum WeekDays {
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
}

// {
//     "uses": {
//     "usEsForClass": {
//         "monday": [
//             {
//                 "num": 1,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 20,
//                     "className": "11 Б",
//                     "classHomeLocationId": 14,
//                     "classHomeLocationName": "Кабинет 14",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 2,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 20,
//                     "className": "11 Б",
//                     "classHomeLocationId": 14,
//                     "classHomeLocationName": "Кабинет 14",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 5,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             }
//         ],
//             "tuesday": [
//             {
//                 "num": 1,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 1,
//                     "className": "5 А",
//                     "classHomeLocationId": 23,
//                     "classHomeLocationName": "Кабинет 23",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 3,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 3,
//                     "className": "5 В",
//                     "classHomeLocationId": 29,
//                     "classHomeLocationName": "Кабинет 29",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 4,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 5,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             }
//         ],
//             "wednesday": [
//             {
//                 "num": 1,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 4,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 3,
//                     "className": "5 В",
//                     "classHomeLocationId": 29,
//                     "classHomeLocationName": "Кабинет 29",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 5,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 1,
//                     "className": "5 А",
//                     "classHomeLocationId": 23,
//                     "classHomeLocationName": "Кабинет 23",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 6,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             }
//         ],
//             "thursday": [
//             {
//                 "num": 3,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 3,
//                     "className": "5 В",
//                     "classHomeLocationId": 29,
//                     "classHomeLocationName": "Кабинет 29",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 4,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 5,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 1,
//                     "className": "5 А",
//                     "classHomeLocationId": 23,
//                     "classHomeLocationName": "Кабинет 23",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             }
//         ],
//             "friday": [
//             {
//                 "num": 1,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 4,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 1,
//                     "className": "5 А",
//                     "classHomeLocationId": 23,
//                     "classHomeLocationName": "Кабинет 23",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 5,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 3,
//                     "className": "5 В",
//                     "classHomeLocationId": 29,
//                     "classHomeLocationName": "Кабинет 29",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 7,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             }
//         ],
//             "saturday": [
//             {
//                 "num": 1,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 3,
//                     "className": "5 В",
//                     "classHomeLocationId": 29,
//                     "classHomeLocationName": "Кабинет 29",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 2,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 14,
//                     "className": "9 Б",
//                     "classHomeLocationId": 4,
//                     "classHomeLocationName": "Кабинет 4",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             },
//             {
//                 "num": 3,
//                 "iconURL": "subjectIcons/math.png",
//                 "subjectFullName": "Алгебра",
//                 "subjectid": 2,
//                 "schoolClass": {
//                     "classId": 1,
//                     "className": "5 А",
//                     "classHomeLocationId": 23,
//                     "classHomeLocationName": "Кабинет 23",
//                     "isMockClass": false
//                 },
//                 "locationId": 15,
//                 "location": "Кабинет 15",
//                 "isInSchool": true,
//                 "hostName": "Васильева Софья Николаевна19",
//                 "isSkipped": false,
//                 "groupName": null,
//                 "groupId": null,
//                 "alternativeGroupsLessons": null,
//                 "gradientColor1": "79CBCA",
//                 "gradientColor2": "E684AE"
//             }
//         ]
//     },
//     "version": "c13eaf10ca"
// },
//     "usPs": {
//     "usPs": {
//         "monday": [
//             {
//                 "num": 1,
//                 "durationInMins": 40,
//                 "begin": "8:30",
//                 "end": "9:10",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 2,
//                 "durationInMins": 40,
//                 "begin": "9:20",
//                 "end": "10:0",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 3,
//                 "durationInMins": 40,
//                 "begin": "10:15",
//                 "end": "10:55",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 4,
//                 "durationInMins": 40,
//                 "begin": "11:10",
//                 "end": "11:50",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 5,
//                 "durationInMins": 40,
//                 "begin": "12:5",
//                 "end": "12:45",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 6,
//                 "durationInMins": 40,
//                 "begin": "13:0",
//                 "end": "13:40",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 7,
//                 "durationInMins": 40,
//                 "begin": "13:50",
//                 "end": "14:30",
//                 "breakDurationInMins": 0
//             }
//         ],
//             "tuesday": [
//             {
//                 "num": 1,
//                 "durationInMins": 40,
//                 "begin": "8:30",
//                 "end": "9:10",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 2,
//                 "durationInMins": 40,
//                 "begin": "9:20",
//                 "end": "10:0",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 3,
//                 "durationInMins": 40,
//                 "begin": "10:15",
//                 "end": "10:55",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 4,
//                 "durationInMins": 40,
//                 "begin": "11:10",
//                 "end": "11:50",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 5,
//                 "durationInMins": 40,
//                 "begin": "12:5",
//                 "end": "12:45",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 6,
//                 "durationInMins": 40,
//                 "begin": "13:0",
//                 "end": "13:40",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 7,
//                 "durationInMins": 40,
//                 "begin": "13:50",
//                 "end": "14:30",
//                 "breakDurationInMins": 0
//             }
//         ],
//             "wednesday": [
//             {
//                 "num": 1,
//                 "durationInMins": 40,
//                 "begin": "8:30",
//                 "end": "9:10",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 2,
//                 "durationInMins": 40,
//                 "begin": "9:20",
//                 "end": "10:0",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 3,
//                 "durationInMins": 40,
//                 "begin": "10:15",
//                 "end": "10:55",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 4,
//                 "durationInMins": 40,
//                 "begin": "11:10",
//                 "end": "11:50",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 5,
//                 "durationInMins": 40,
//                 "begin": "12:5",
//                 "end": "12:45",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 6,
//                 "durationInMins": 40,
//                 "begin": "13:0",
//                 "end": "13:40",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 7,
//                 "durationInMins": 40,
//                 "begin": "13:50",
//                 "end": "14:30",
//                 "breakDurationInMins": 0
//             }
//         ],
//             "thursday": [
//             {
//                 "num": 1,
//                 "durationInMins": 40,
//                 "begin": "8:30",
//                 "end": "9:10",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 2,
//                 "durationInMins": 40,
//                 "begin": "9:20",
//                 "end": "10:0",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 3,
//                 "durationInMins": 40,
//                 "begin": "10:15",
//                 "end": "10:55",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 4,
//                 "durationInMins": 40,
//                 "begin": "11:10",
//                 "end": "11:50",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 5,
//                 "durationInMins": 40,
//                 "begin": "12:5",
//                 "end": "12:45",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 6,
//                 "durationInMins": 40,
//                 "begin": "13:0",
//                 "end": "13:40",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 7,
//                 "durationInMins": 40,
//                 "begin": "13:50",
//                 "end": "14:30",
//                 "breakDurationInMins": 0
//             }
//         ],
//             "friday": [
//             {
//                 "num": 1,
//                 "durationInMins": 40,
//                 "begin": "8:30",
//                 "end": "9:10",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 2,
//                 "durationInMins": 40,
//                 "begin": "9:20",
//                 "end": "10:0",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 3,
//                 "durationInMins": 40,
//                 "begin": "10:15",
//                 "end": "10:55",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 4,
//                 "durationInMins": 40,
//                 "begin": "11:10",
//                 "end": "11:50",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 5,
//                 "durationInMins": 40,
//                 "begin": "12:5",
//                 "end": "12:45",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 6,
//                 "durationInMins": 40,
//                 "begin": "13:0",
//                 "end": "13:40",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 7,
//                 "durationInMins": 40,
//                 "begin": "13:50",
//                 "end": "14:30",
//                 "breakDurationInMins": 0
//             }
//         ],
//             "saturday": [
//             {
//                 "num": 1,
//                 "durationInMins": 30,
//                 "begin": "8:30",
//                 "end": "9:10",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 2,
//                 "durationInMins": 30,
//                 "begin": "9:25",
//                 "end": "10:5",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 3,
//                 "durationInMins": 30,
//                 "begin": "10:20",
//                 "end": "11:0",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 4,
//                 "durationInMins": 30,
//                 "begin": "11:15",
//                 "end": "11:55",
//                 "breakDurationInMins": 15
//             },
//             {
//                 "num": 5,
//                 "durationInMins": 30,
//                 "begin": "12:10",
//                 "end": "12:50",
//                 "breakDurationInMins": 10
//             },
//             {
//                 "num": 6,
//                 "durationInMins": 30,
//                 "begin": "13:0",
//                 "end": "13:40",
//                 "breakDurationInMins": 0
//             }
//         ]
//     },
//     "version": "ef603f1da9"
// }
// }
