import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TeacherHomePage from "@/views/pages/TeacherPages/HomePage/HomePage.vue";
import TeacherSchedulePage from "@/views/pages/TeacherPages/SchedulePage/SchedulePage.vue";
import TeacherModifyScheduleElementPage from "@/views/pages/TeacherPages/ModifyScheduleElementPage/ModifyScheduleElementPage.vue";
import TeacherClassesListPage from "@/views/pages/TeacherPages/ClassesPages/ClassesListPage/ClassesListPage.vue";
import TeacherClassPage from "@/views/pages/TeacherPages/ClassesPages/ClassPage/ClassPage.vue";
import TeacherNotificationPage from "@/views/pages/TeacherPages/NotificationPage/NotificationPage.vue";
import TeacherDebugPage from "@/views/pages/TeacherPages/DebugPage/DebugPage.vue";
import TeacherUserPage from "@/views/pages/TeacherPages/UserPage/UserPage.vue";

import StudentHomePage from "@/views/pages/StudentPages/HomePage/HomePage.vue";
import StudentSchedulePage from "@/views/pages/StudentPages/SchedulePage/SchedulePage.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: `/home`
  },
  {
    path: '/teacher',
    meta: { role: 'teacher' },
    redirect: '/teacher/home',
    children: [
        {
            path: 'home',
            name: 'sn.teacher.home',
            component: TeacherHomePage,
        },
        {
            path: 'schedule',
            name: 'sn.teacher.schedule',
            redirect: '/teacher/schedule/modified',
            children: [
                { path:'modified', component: TeacherSchedulePage, name: 'sn.teacher.schedule.mse' },
                { path:'usual', component: TeacherSchedulePage, name: 'sn.teacher.schedule.use' },
                { path: 'modify', component: TeacherModifyScheduleElementPage, name: 'sn.teacher.schedule.modify' }
            ]
        },
        {
            path: 'classes/',
            name: 'sn.teacher.classes',
            component: TeacherClassesListPage,
        }, 
        {
            path: 'classes/:classId',
            name: 'sn.teacher.class',
            redirect: to => { return { name: 'sn.teacher.class.allStudents', classId: to.params.classId  } },
            children: [
                { path:'allStudents', component: TeacherClassPage, name: 'sn.teacher.class.allStudents' },
                { path:'absentStudents', component: TeacherClassPage, name: 'sn.teacher.class.absentStudents' },
                { path:'homeworks', component: TeacherClassPage, name: 'sn.teacher.class.homeworks' },
                { path:'modifiedSchedule', component: TeacherClassPage, name: 'sn.teacher.class.modifiedSchedule' },
                { path:'usualSchedule', component: TeacherClassPage, name: 'sn.teacher.class.usualSchedule' },
            ]
        }, 
        {
            path: 'notifications',
            name: 'sn.teacher.notifications',
            redirect: '/teacher/notifications/announces',
            children: [
                { path:'announces', component: TeacherNotificationPage, name: 'sn.teacher.notifications.announces' },
                { path:'forStudents', component: TeacherNotificationPage, name: 'sn.teacher.notifications.forStudents' },
                
            ]
        },
        {
            path: 'debug',
            name: 'sn.teacher.debug',
            redirect: '/teacher/debug/1',
            children: [
                { path:'1', component: TeacherDebugPage, name: 'sn.teacher.debug.1' },
                { path:'2', component: TeacherDebugPage, name: 'sn.teacher.debug.2' },
                
            ]
        },
        {
            path: 'user',
            name: 'sn.teacher.user',
            component: TeacherUserPage,
        },
    ]
  },
  {
    path: '/student',
    meta: { role: 'student' },
    redirect: '/student/home',
    children: [
        {
            path: 'home',
            name: 'sn.student.home',
            component: StudentHomePage,
        },
        {
            path: 'schedule',
            name: 'sn.student.schedule',
            redirect: '/student/schedule/modified',
            children: [
                { path:'modified', /* Временно: */ component: StudentSchedulePage , name: 'sn.student.schedule.mse' },
            ]
        },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
