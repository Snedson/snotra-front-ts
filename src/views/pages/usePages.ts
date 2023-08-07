import { IPages } from '@/common/types/navigation-interfaces/IPage';
import router from '@/router';

export const Pages: IPages = {
    'sn.teacher.main': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/upi.png'),
            backgroundImageShift: 57.5,
            h1: '',
            h2: '',
            h3: '',
            browserTitle: 'Главная страница',
        },
    },
    'sn.teacher.schedule.mse': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/blue/1-light.jpg'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/blue/1-dark.jpg'),
            backgroundImageShift: 0,
            h1: 'Измененное расписание классов',
            h2: 'Здесь представлено измененное расписание классов, в которых вам предстоит провести урок на 01.01.2022',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Измененное расписание классов',
        },
    },
    'sn.teacher.schedule.use': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/blue/3-light.jpg'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/blue/3-dark.jpg'),
            backgroundImageShift: 0,
            h1: 'Стандартное расписание классов',
            h2: 'Здесь представлено стандартное расписание классов по дням недели',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Стандартное расписание классов',
        },
    },
    'sn.teacher.schedule.modify': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/blue/4-light.jpg'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/blue/4-dark.jpg'),
            backgroundImageShift: 10,
            h1: 'Редактирование данных урока',
            h2: 'Здесь вы можете изменить место проведение урока и оставить комментарий, который увидят все учащиеся. Если необходимо изменить остальные данные - обратитесь к администрации школы. ',
            h3: '',
            browserTitle: 'Редактирование данных урока',
        },
    },
    'sn.teacher.classes': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/3-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/3-dark.png'),
            backgroundImageShift: 0,
            h1: 'Классы',
            h2: 'Здесь представлен список всех классов в школе',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Классы',
        },
    },
    'sn.teacher.class.allStudents': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/4-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/4-dark.png'),
            backgroundImageShift: 0,
            h1: 'Все учащиеся',
            h2: 'Список всех учащихся данном классе',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Все учащиеся',
        },
    },
    'sn.teacher.class.absentStudents': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/4-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/4-dark.png'),
            backgroundImageShift: 0,
            h1: 'Отсутствуют',
            h2: 'Список отсутствующих учеников данного класса',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Отсутствуют',
        },
    },
    'sn.teacher.class.homeworks': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/4-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/4-dark.png'),
            backgroundImageShift: 0,
            h1: 'Домашние задания',
            h2: 'Списки домашних заданий для учащихся данного класса',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Домашние задания',
        },
    },
    'sn.teacher.class.modifiedSchedule': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/4-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/4-dark.png'),
            backgroundImageShift: 0,
            h1: 'Измененное расписание',
            h2: 'Измененное расписание уроков на сегодня для учащихся данного класса',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Измененное расписание',
        },
    },
    'sn.teacher.class.usualSchedule': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/4-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/4-dark.png'),
            backgroundImageShift: 0,
            h1: 'Стандартное расписание',
            h2: 'Стандартное расписание уроков по дням недели для учащихся данного класса',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Стандартное расписание',
        },
    },
    'sn.teacher.notifications.announces': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/pink/4-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/pink/4-dark.png'),
            backgroundImageShift: 35,
            h1: 'Анонсы',
            h2: 'Здесь представлен список общешкольных анонсов. Их может добавлять только администрация школы.',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Анонсы',
        },
    },
    'sn.teacher.notifications.forStudents': {
        fabData: {
            iconName: 'add',
            callback: function () {
                console.log('FAB Callback');
            },
        },
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/pink/2-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/pink/2-dark.png'),
            backgroundImageShift: 19,
            h1: 'Уведомления',
            h2: 'Здесь представлен список уведомлений, которые вы отправили учащимся. ',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Уведомления',
        },
    },
    'sn.teacher.debug.1': {
        fabData: {
            iconName: 'question_mark',
            callback: function () {
                console.log('FAB Callback');
            },
        },
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/pink/2-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/pink/2-dark.png'),
            backgroundImageShift: 19,
            h1: 'Отладка компонентов',
            h2: 'Подстраница 1 ',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Отладка компонентов',
        },
    },
    'sn.teacher.debug.2': {
        fabData: {
            iconName: 'free_breakfast',
            callback: function () {
                console.log('FAB Callback');
            },
        },
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/pink/4-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/pink/4-dark.png'),
            backgroundImageShift: 35,
            h1: 'Отладка компонентов 2',
            h2: 'Подстраница 2 ',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Отладка компонентов 2',
        },
    },
    'sn.teacher.user': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/blue/2-light.jpg'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/blue/2-dark.jpg'),
            backgroundImageShift: 50,
            h1: 'Иван, ',
            h2: 'Это ваш профиль',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Ваш профиль',
        },
    },

    'sn.student.main': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/upi.png'),
            backgroundImageShift: 57.5,
            h1: '',
            h2: '',
            h3: '',
            browserTitle: 'Главная страница',
        },
    },
    'sn.student.schedule.mse': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/blue/1-light.jpg'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/blue/1-dark.jpg'),
            backgroundImageShift: 0,
            h1: 'Измененное расписание уроков',
            h2: 'Здесь представлено измененное расписание уроков на 01.01.2022',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Измененное расписание уроков',
        },
    },
    'sn.student.schedule.use': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/blue/3-light.jpg'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/blue/3-dark.jpg'),
            backgroundImageShift: 0,
            h1: 'Стандартное расписание уроков',
            h2: 'Здесь представлено стандартное расписание уроков по дням недели',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Стандартное расписание уроков',
        },
    },
    'sn.student.homeworks': {
        fabData: {
            iconName: 'add',
            callback: function () {
                router.push({ name: 'sn.student.homeworks.add' });
            },
        },
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/3-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/3-dark.png'),
            backgroundImageShift: 0,
            h1: 'Домашние задания',
            h2: 'Здесь представлен список домашних заданий на две недели',
            h3: 'Используйте Ctrl + F для навигации',
            browserTitle: 'Домашние задания',
        },
    },
    'sn.student.homeworks.add': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/3-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/3-dark.png'),
            backgroundImageShift: 0,
            h1: 'Добавление домашнего задания',
            h2: 'Будьте предельно внимательны при записи домашнего задания под диктовку учителя',
            h3: '',
            browserTitle: 'Добавление домашнего задания',
        },
    },
    'sn.student.notifications.announces': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/3-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/3-dark.png'),
            backgroundImageShift: 0,
            h1: 'Анонсы',
            h2: 'Здесь представлен список общешкольных анонсов. ',
            h3: '',
            browserTitle: 'Анонсы',
        },
    },
    'sn.student.notifications.fromTeachers': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/3-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/3-dark.png'),
            backgroundImageShift: 0,
            h1: 'Уведомления от учителей',
            h2: 'Здесь представлены увдомления, которые были отправлены учителями',
            h3: '',
            browserTitle: 'Уведомления от учителей',
        },
    },
    'sn.student.user': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/3-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/3-dark.png'),
            backgroundImageShift: 0,
            h1: 'Профиль',
            h2: 'Это ваш профиль',
            h3: '',
            browserTitle: 'Ваш профиль',
        },
    },
    'sn.student.user.setStatus': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/green/3-light.png'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/green/3-dark.png'),
            backgroundImageShift: 0,
            h1: 'Установка статуса посещения',
            h2: 'Установите соответствующий статус, если вы опаздываете или перестали посещать школу',
            h3: '',
            browserTitle: 'Установка статуса посещения',
        },
    },

    'sn.other.auth': {
        fabData: null,
        contentHeaderData: {
            backgroundImageUrl: require('@/assets/img/content-header-backgrounds/blue/1-light.jpg'),
            backgroundImageDarkUrl: require('@/assets/img/content-header-backgrounds/blue/1-dark.jpg'),
            backgroundImageShift: 0,
            h1: '',
            h2: '',
            h3: '',
            browserTitle: 'Авторизация...',
        },
    },
};
