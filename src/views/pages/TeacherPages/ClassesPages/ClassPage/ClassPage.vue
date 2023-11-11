<template>
    <div>
        <tab-menu :props="state" @change="selectTab"></tab-menu>
        <div class="subpage">
            <all-students-subpage
                v-if="state.selectedTabItemId === ClassSubpage.AllStudents"
            ></all-students-subpage>
            <absent-students-subpage
                v-if="state.selectedTabItemId === ClassSubpage.AbsentStudents"
            ></absent-students-subpage>
            <homework-subpage
                v-if="state.selectedTabItemId === ClassSubpage.Homework"
            ></homework-subpage>
            <modified-schedule-subpage
                v-if="state.selectedTabItemId === ClassSubpage.ModifiedSchedule"
            ></modified-schedule-subpage>
            <usual-schedule-subpage
                v-if="state.selectedTabItemId === ClassSubpage.UsualSchedule"
            ></usual-schedule-subpage>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ITabMenuProps } from '@/common/components/snedson-material-components/tab-menu/tab-menu.types';
import TabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import router from '@/router';
import AllStudentsSubpage from './Subpages/AllStudentsSubpage/AllStudentsSubpage.vue';
import AbsentStudentsSubpage from './Subpages/AbsentStudentsSubpage/AbsentStudentsSubpage.vue';
import HomeworkSubpage from './Subpages/HomeworkSubpage/HomeworkSubpage.vue';
import ModifiedScheduleSubpage from './Subpages/ModifiedScheduleSubpage/ModifiedScheduleSubpage.vue';
import UsualScheduleSubpage from './Subpages/UsualScheduleSubpage/UsualScheduleSubpage.vue';
import { reactive } from 'vue';
import { ClassSubpage } from './ClassPage.types';

const state = reactive<ITabMenuProps>({
    tabs: [
        {
            id: ClassSubpage.AllStudents,
            title: 'Все учащиеся',
        },
        {
            id: ClassSubpage.AbsentStudents,
            title: 'Сегодня отсутствуют',
        },
        {
            id: ClassSubpage.Homework,
            title: 'Домашние задания',
        },
        {
            id: ClassSubpage.ModifiedSchedule,
            title: 'Расписание - измененное',
        },
        {
            id: ClassSubpage.UsualSchedule,
            title: 'Расписание - стандартное',
        },
    ],
    selectedTabItemId: ClassSubpage.AllStudents,
});

const selectTab = (tabId: ClassSubpage) => {
    state.selectedTabItemId = tabId;

    switch (tabId) {
        case ClassSubpage.AllStudents: {
            router.push({ name: 'sn.teacher.class.allStudents' });
            break;
        }
        case ClassSubpage.AbsentStudents: {
            router.push({ name: 'sn.teacher.class.absentStudents' });
            break;
        }
        case ClassSubpage.Homework: {
            router.push({ name: 'sn.teacher.class.homeworks' });
            break;
        }
        case ClassSubpage.ModifiedSchedule: {
            router.push({ name: 'sn.teacher.class.modifiedSchedule' });
            break;
        }
        case ClassSubpage.UsualSchedule: {
            router.push({ name: 'sn.teacher.class.usualSchedule' });
            break;
        }
    }
};
</script>

<style lang="scss" scoped>
.subpage {
    padding-top: 30px;
}
</style>
