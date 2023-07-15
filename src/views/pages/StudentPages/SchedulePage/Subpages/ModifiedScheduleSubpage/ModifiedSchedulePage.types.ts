import { MseListModel } from '@/models/ScheduleLists/MseListModel';
import { MspListModel } from '@/models/ScheduleLists/MspListModel';

export type GetStudentModifiedScheduleSubpageResponseModel = {
    msesForToday: {
        mseList: StudentMSE[];
        version: string;
    };
    mspsForToday: MspListModel;
};

export type StudentMSE = {
    comments: string;
    mseUuid: string;
    thisMseVersion: string;
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
    groupName: string | null;
    groupId: string | null;
    alternativeGroupsLessons: { [key: string]: string } | null;
    colorSchemeName: string;
    gradientColor1: string;
    gradientColor2: string;
};

// {
//   "msesForToday": {
//     "mseList": [
//       {
//         "comments": "Не забудьте принести на урок конституцию",
//         "mseUuid": "f2bce388-afac-4673-86d2-e9d07df39152",
//         "thisMseVersion": "49e5b2dc4b",
//         "num": 1,
//         "iconURL": "subjectIcons/eltsin.png",
//         "subjectFullName": "Обществознание",
//         "subjectid": 10,
//         "schoolClass": {
//           "classId": 20,
//           "className": "11 Б",
//           "classHomeLocationId": 14,
//           "classHomeLocationName": "Кабинет 14",
//           "isMockClass": false,
//           "colorSchemeName": "sn-mdcs-academic-green-3-killarney"
//         },
//         "locationId": 15,
//         "location": "Кабинет 15",
//         "isInSchool": true,
//         "hostName": "Глуполицкий Александр Севастьянович",
//         "isSkipped": false,
//         "groupName": null,
//         "groupId": null,
//         "alternativeGroupsLessons": null,
//         "colorSchemeName": "sn-mdcs-ruthenian-blue",
//         "gradientColor1": "0061a3",
//         "gradientColor2": "0061a3"
//       },
//       {
//         "comments": "Не забудьте взять с собой циркуль!",
//         "mseUuid": "37d33bd7-28f0-4b02-b907-6cf0a8003438",
//         "thisMseVersion": "219de31f52",
//         "num": 2,
//         "iconURL": "subjectIcons/math.png",
//         "subjectFullName": "Алгебра",
//         "subjectid": 2,
//         "schoolClass": {
//           "classId": 20,
//           "className": "11 Б",
//           "classHomeLocationId": 14,
//           "classHomeLocationName": "Кабинет 14",
//           "isMockClass": false,
//           "colorSchemeName": "sn-mdcs-academic-green-3-killarney"
//         },
//         "locationId": 3,
//         "location": "Кабинет 3",
//         "isInSchool": true,
//         "hostName": "Васильева Софья Николаевна",
//         "isSkipped": false,
//         "groupName": "Физико-Информат группа 11 \"Б\"",
//         "groupId": null,
//         "alternativeGroupsLessons": {},
//         "colorSchemeName": "sn-mdcs-cupid",
//         "gradientColor1": "8f427b",
//         "gradientColor2": "8f427b"
//       },
//       {
//         "comments": null,
//         "mseUuid": "527c6acd-c41b-4b38-98d6-387cc176d219",
//         "thisMseVersion": "5c0eccdaf2",
//         "num": 3,
//         "iconURL": "subjectIcons/flag_ru.png",
//         "subjectFullName": "Русский язык",
//         "subjectid": 17,
//         "schoolClass": {
//           "classId": 20,
//           "className": "11 Б",
//           "classHomeLocationId": 14,
//           "classHomeLocationName": "Кабинет 14",
//           "isMockClass": false,
//           "colorSchemeName": "sn-mdcs-academic-green-3-killarney"
//         },
//         "locationId": 4,
//         "location": "Кабинет 4",
//         "isInSchool": true,
//         "hostName": "Сарновский Андрей Николаевич",
//         "isSkipped": false,
//         "groupName": null,
//         "groupId": null,
//         "alternativeGroupsLessons": null,
//         "colorSchemeName": "sn-mdcs-mindaro",
//         "gradientColor1": "5a6400",
//         "gradientColor2": "5a6400"
//       },
//       {
//         "comments": "Hej",
//         "mseUuid": "f99ce694-8224-42fd-81f0-e1a67765cad5",
//         "thisMseVersion": "2d3f52dfcc",
//         "num": 4,
//         "iconURL": "subjectIcons/letters.png",
//         "subjectFullName": "Родной язык",
//         "subjectid": 15,
//         "schoolClass": {
//           "classId": 20,
//           "className": "11 Б",
//           "classHomeLocationId": 14,
//           "classHomeLocationName": "Кабинет 14",
//           "isMockClass": false,
//           "colorSchemeName": "sn-mdcs-academic-green-3-killarney"
//         },
//         "locationId": 4,
//         "location": "Кабинет 4",
//         "isInSchool": true,
//         "hostName": "Сарновский Андрей Николаевич",
//         "isSkipped": false,
//         "groupName": null,
//         "groupId": null,
//         "alternativeGroupsLessons": null,
//         "colorSchemeName": "sn-mdcs-energy-yellow",
//         "gradientColor1": "676000",
//         "gradientColor2": "676000"
//       },
//       {
//         "comments": null,
//         "mseUuid": "219e58a8-c670-452b-b47e-55f4b3fae7d4",
//         "thisMseVersion": "5c3ba1e897",
//         "num": 5,
//         "iconURL": "subjectIcons/physics.png",
//         "subjectFullName": "Физика - Углубленная группа",
//         "subjectid": 38,
//         "schoolClass": {
//           "classId": 20,
//           "className": "11 Б",
//           "classHomeLocationId": 14,
//           "classHomeLocationName": "Кабинет 14",
//           "isMockClass": false,
//           "colorSchemeName": "sn-mdcs-academic-green-3-killarney"
//         },
//         "locationId": 13,
//         "location": "Кабинет 13",
//         "isInSchool": true,
//         "hostName": "Викторов Павел Андреевич",
//         "isSkipped": false,
//         "groupName": "Физико-Информат группа 11 \"Б\"",
//         "groupId": null,
//         "alternativeGroupsLessons": {
//           "Социально-Экон. группа 11 \"Б\"": "Право - Профильная группа, Кабинет 10, Глуполицкий Александр Севастьянович",
//           "Химико-Биологич группа 11 \"Б\"": "Химия - Углубленная группа, Кабинет 2, Левандовский Дмитрий Владимирович"
//         },
//         "colorSchemeName": "sn-mdcs-sea-buckthorn",
//         "gradientColor1": "8e4f00",
//         "gradientColor2": "8e4f00"
//       },
//       {
//         "comments": null,
//         "mseUuid": "191770d4-29e9-4bf9-86f3-faff532cf824",
//         "thisMseVersion": "172b57d324",
//         "num": 6,
//         "iconURL": "subjectIcons/physics.png",
//         "subjectFullName": "Физика - Углубленная группа",
//         "subjectid": 38,
//         "schoolClass": {
//           "classId": 20,
//           "className": "11 Б",
//           "classHomeLocationId": 14,
//           "classHomeLocationName": "Кабинет 14",
//           "isMockClass": false,
//           "colorSchemeName": "sn-mdcs-academic-green-3-killarney"
//         },
//         "locationId": 13,
//         "location": "Кабинет 13",
//         "isInSchool": true,
//         "hostName": "Викторов Павел Андреевич",
//         "isSkipped": false,
//         "groupName": "Физико-Информат группа 11 \"Б\"",
//         "groupId": null,
//         "alternativeGroupsLessons": {
//           "Социально-Экон. группа 11 \"Б\"": "Право - Профильная группа, Кабинет 10, Глуполицкий Александр Севастьянович",
//           "Химико-Биологич группа 11 \"Б\"": "Химия - Углубленная группа, Кабинет 2, Левандовский Дмитрий Владимирович"
//         },
//         "colorSchemeName": "sn-mdcs-sea-buckthorn",
//         "gradientColor1": "8e4f00",
//         "gradientColor2": "8e4f00"
//       },
//       {
//         "comments": null,
//         "mseUuid": "4dd6bc2e-ad46-4441-8d0f-17f9ac41f329",
//         "thisMseVersion": "b0f27b7276",
//         "num": 7,
//         "iconURL": "subjectIcons/physicalEducation.png",
//         "subjectFullName": "Физкультура",
//         "subjectid": 12,
//         "schoolClass": {
//           "classId": 20,
//           "className": "11 Б",
//           "classHomeLocationId": 14,
//           "classHomeLocationName": "Кабинет 14",
//           "isMockClass": false,
//           "colorSchemeName": "sn-mdcs-academic-green-3-killarney"
//         },
//         "locationId": 1,
//         "location": "Кабинет 1",
//         "isInSchool": true,
//         "hostName": "Бартон Владимир Михайлович",
//         "isSkipped": false,
//         "groupName": "Физкультура - Юноши 11 \"Б\"",
//         "groupId": null,
//         "alternativeGroupsLessons": {
//           "Физкультура - Девушки 11 \"Б\"": "Физкультура, Кабинет 1, Барановская Ирина Викторовна"
//         },
//         "colorSchemeName": "sn-mdcs-minsk",
//         "gradientColor1": "5d51ae",
//         "gradientColor2": "5d51ae"
//       }
//     ],
//     "version": "d18d3d8f02"
//   },
//   "mspsForToday": {
//     "todayScheduleParams": [
//       {
//         "num": 1,
//         "durationInMins": 40,
//         "begin": "7:30",
//         "end": "9:10",
//         "breakDurationInMins": 10
//       },
//       {
//         "num": 2,
//         "durationInMins": 40,
//         "begin": "9:20",
//         "end": "10:0",
//         "breakDurationInMins": 15
//       },
//       {
//         "num": 3,
//         "durationInMins": 40,
//         "begin": "10:15",
//         "end": "10:55",
//         "breakDurationInMins": 15
//       },
//       {
//         "num": 4,
//         "durationInMins": 40,
//         "begin": "11:10",
//         "end": "11:50",
//         "breakDurationInMins": 15
//       },
//       {
//         "num": 5,
//         "durationInMins": 40,
//         "begin": "12:5",
//         "end": "12:45",
//         "breakDurationInMins": 15
//       },
//       {
//         "num": 6,
//         "durationInMins": 40,
//         "begin": "13:0",
//         "end": "13:40",
//         "breakDurationInMins": 10
//       },
//       {
//         "num": 7,
//         "durationInMins": 40,
//         "begin": "13:50",
//         "end": "14:30",
//         "breakDurationInMins": 0
//       }
//     ],
//     "version": "da35def931"
//   }
// }
