import { INavigationMenu } from '@/common/types/navigation-interfaces/INavigationMenu';

export const NavigationItems: INavigationMenu = {
    teacher: {
        mainNavigationElements: [
            {
                id: 1,
                iconName: 'home',
                title: 'Главная страница',
                routeName: 'sn.teacher.home',
            },
            {
                id: 2,
                iconName: 'dashboard',
                title: 'Расписания',
                routeName: 'sn.teacher.schedule',
            },
            {
                id: 3,
                iconName: 'supervised_user_circle',
                title: 'Классы',
                routeName: 'sn.teacher.classes',
            },
            {
                id: 4,
                iconName: 'notifications',
                title: 'Уведомления',
                routeName: 'sn.teacher.notifications',
            },
            {
                id: 5,
                iconName: 'design_services',
                title: 'Отладка компонентов',
                routeName: 'sn.teacher.debug',
            },
        ],
        additionalNavigationElements: [
            {
                id: 6,
                iconName: 'account_circle',
                title: 'Профиль',
                routeName: 'sn.teacher.user',
            },
        ],
    },
    student: {
        mainNavigationElements: [
            {
                id: 1,
                iconName: 'home',
                title: 'Главная страница',
                routeName: 'sn.student.home',
            },
            {
                id: 2,
                iconName: 'dashboard',
                title: 'Расписания',
                routeName: 'sn.student.schedule',
            },
            {
                id: 3,
                iconName: 'book',
                title: 'Домашние задания',
                routeName: 'sn.student.homeworks',
            },
            {
                id: 4,
                iconName: 'notifications',
                title: 'Уведомления',
                routeName: 'sn.student.notifications',
            },
        ],
        additionalNavigationElements: [
            {
                id: 5,
                iconName: 'account_circle',
                title: 'Профиль',
                routeName: 'sn.student.user',
            },
        ],
    },
    none: {
        mainNavigationElements: [],
        additionalNavigationElements: [],
    },
};
