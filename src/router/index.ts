import {
    createRouter,
    createWebHistory,
    RouteLocationNormalized,
    RouteRecordRaw,
} from 'vue-router';
import { Pages } from '@/views/pages/usePages';
import TeacherHomePage from '@/views/pages/TeacherPages/HomePage/HomePage.vue';
import TeacherSchedulePage from '@/views/pages/TeacherPages/SchedulePage/SchedulePage.vue';
import TeacherModifyScheduleElementPage from '@/views/pages/TeacherPages/ModifyScheduleElementPage/ModifyScheduleElementPage.vue';
import TeacherClassesListPage from '@/views/pages/TeacherPages/ClassesPages/ClassesListPage/ClassesListPage.vue';
import TeacherClassPage from '@/views/pages/TeacherPages/ClassesPages/ClassPage/ClassPage.vue';
import TeacherNotificationPage from '@/views/pages/TeacherPages/NotificationPage/NotificationPage.vue';
import TeacherDebugPage from '@/views/pages/TeacherPages/DebugPage/DebugPage.vue';
import TeacherUserPage from '@/views/pages/TeacherPages/UserPage/UserPage.vue';
import StudentHomePage from '@/views/pages/StudentPages/HomePage/HomePage.vue';
import StudentSchedulePage from '@/views/pages/StudentPages/SchedulePage/SchedulePage.vue';
import StudentNotificationPage from '@/views/pages/StudentPages/NotificationPage/NotificationPage.vue';
import AuthComponent from '@/common/components/helper-components/auth-component/auth-component.vue';
import HomeworkPageVue from '@/views/pages/StudentPages/HomeworkPage/HomeworkPage.vue';
import AppendHomeworkPage from '@/views/pages/StudentPages/HomeworkPage/AppendHomeworkPage/AppendHomeworkPage.vue';
import StudentUserPage from '@/views/pages/StudentPages/UserPage/UserPage.vue';
import StudentSetStatusPage from '@/views/pages/StudentPages/UserPage/SetStatusPage.vue';

const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     redirect: () => {
    //         window.location.href = 'https://auth.snotra.site/';
    //         return '';
    //     },
    // },
    {
        path: '/post-auth',
        meta: { role: 'none' },
        name: 'sn.other.auth',
        component: AuthComponent,
    },
    {
        path: '/teacher',
        meta: { role: 'teacher' },
        redirect: '/teacher/main',
        children: [
            {
                path: 'main',
                name: 'sn.teacher.main',
                meta: { id: 1 },
                component: TeacherHomePage,
            },
            {
                path: 'schedule',
                name: 'sn.teacher.schedule',
                meta: { id: 2 },
                redirect: '/teacher/schedule/modified',
                children: [
                    {
                        path: 'modified',
                        component: TeacherSchedulePage,
                        name: 'sn.teacher.schedule.mse',
                    },
                    {
                        path: 'usual',
                        component: TeacherSchedulePage,
                        name: 'sn.teacher.schedule.use',
                    },
                    {
                        path: 'modify',
                        redirect: '/teacher/schedule/modified',
                        name: 'sn.teacher.schedule.modify',
                        children: [
                            {
                                path: ':mseId',
                                component: TeacherModifyScheduleElementPage,
                                name: 'sn.teacher.schedule.modify',
                            },
                        ],
                    },
                ],
            },
            {
                path: 'classes/',
                name: 'sn.teacher.classes',
                meta: { id: 3 },
                component: TeacherClassesListPage,
            },
            {
                path: 'classes/:classId',
                name: 'sn.teacher.class',
                meta: { id: 3 },
                redirect: (to) => {
                    return {
                        name: 'sn.teacher.class.allStudents',
                        classId: to.params.classId,
                    };
                },
                children: [
                    {
                        path: 'allStudents',
                        component: TeacherClassPage,
                        name: 'sn.teacher.class.allStudents',
                    },
                    {
                        path: 'absentStudents',
                        component: TeacherClassPage,
                        name: 'sn.teacher.class.absentStudents',
                    },
                    {
                        path: 'homeworks',
                        component: TeacherClassPage,
                        name: 'sn.teacher.class.homeworks',
                    },
                    {
                        path: 'modifiedSchedule',
                        component: TeacherClassPage,
                        name: 'sn.teacher.class.modifiedSchedule',
                    },
                    {
                        path: 'usualSchedule',
                        component: TeacherClassPage,
                        name: 'sn.teacher.class.usualSchedule',
                    },
                ],
            },
            {
                path: 'notifications',
                name: 'sn.teacher.notifications',
                meta: { id: 4 },
                redirect: '/teacher/notifications/announces',
                children: [
                    {
                        path: 'announces',
                        component: TeacherNotificationPage,
                        name: 'sn.teacher.notifications.announces',
                    },
                    {
                        path: 'forStudents',
                        component: TeacherNotificationPage,
                        name: 'sn.teacher.notifications.forStudents',
                    },
                ],
            },
            {
                path: 'debug',
                name: 'sn.teacher.debug',
                meta: { id: 5 },
                redirect: '/teacher/debug/1',
                children: [
                    {
                        path: '1',
                        component: TeacherDebugPage,
                        name: 'sn.teacher.debug.1',
                    },
                    {
                        path: '2',
                        component: TeacherDebugPage,
                        name: 'sn.teacher.debug.2',
                    },
                ],
            },
            {
                path: 'user',
                name: 'sn.teacher.user',
                meta: { id: 6 },
                component: TeacherUserPage,
            },
        ],
    },
    {
        path: '/student',
        meta: { role: 'student' },
        redirect: '/student/home',
        children: [
            {
                path: 'home',
                name: 'sn.student.main',
                meta: { id: 1 },
                component: StudentHomePage,
            },
            {
                path: 'schedule',
                name: 'sn.student.schedule',
                meta: { id: 2 },
                redirect: '/student/schedule/modified',
                children: [
                    {
                        path: 'modified',
                        component: StudentSchedulePage,
                        name: 'sn.student.schedule.mse',
                    },
                    {
                        path: 'usual',
                        component: StudentSchedulePage,
                        name: 'sn.student.schedule.use',
                    },
                ],
            },
            {
                path: 'homeworks',
                name: 'sn.student.homeworks',
                meta: { id: 3 },
                component: HomeworkPageVue,
            },
            {
                path: 'homeworks/add',
                name: 'sn.student.homeworks.add',
                component: AppendHomeworkPage,
            },
            {
                path: 'notifications',
                name: 'sn.student.notifications',
                meta: { id: 4 },
                redirect: '/student/notifications/announces',
                children: [
                    {
                        path: 'announces',
                        component: StudentNotificationPage,
                        name: 'sn.student.notifications.announces',
                    },
                    {
                        path: 'fromTeachers',
                        component: StudentNotificationPage,
                        name: 'sn.student.notifications.fromTeachers',
                    },
                ],
            },
            {
                path: 'user',
                meta: { id: 5 },
                children: [
                    {
                        path: '',
                        component: StudentUserPage,
                        name: 'sn.student.user',
                    },
                    {
                        path: 'setStatus',
                        component: StudentSetStatusPage, // Change to StudentSetStatusPage when created
                        name: 'sn.student.user.setStatus',
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
        window.document.title =
            Pages[to.name as string].contentHeaderData.browserTitle +
            ' - Snotra ';
        next();
    }
);

export default router;
