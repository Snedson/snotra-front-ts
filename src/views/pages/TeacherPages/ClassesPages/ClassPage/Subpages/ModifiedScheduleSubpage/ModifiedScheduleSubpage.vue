<template>
    <div class="weekdays-list">
        <UniversalCard
            :props="{
                type: 'elevated',
                icon: `${getBaseUrl()}${day.iconURL}`,
                title: `${day.num}. ${day.schoolClass.className}`,
                dataTags: [
                    {
                        color: 'white',
                        title: day.subjectFullName,
                        iconCompleteUrl: `${getBaseUrl}${day.iconURL}`,
                    },
                    {
                        color: 'white',
                        title: day.location,
                        iconLocal: 'school.png',
                    },
                    {
                        color: 'white',
                        title: day.groupName ? day.groupName : 'Весь класс',
                        iconLocal: 'student.png',
                    },
                ],
            }"
            v-for="day in state.data.todayMSEForClass.mseList"
            :key="day.mseUuid"
        ></UniversalCard>
    </div>
</template>

<script lang="ts" setup>
import $api, { getBaseUrl, getRole } from '@/http/api';
import router from '@/router';
import { onMounted, reactive } from 'vue';
import { GetModifiedScheduleSubpageResponseModel } from './ModifiedScheduleSubpage.types';
import ExpansionPanel from '@/common/components/snedson-material-components/expansion-panel/expansion-panel.vue';
import { WeekDays } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';

const state = reactive<{ data: GetModifiedScheduleSubpageResponseModel }>({
    data: {
        todayMSEForClass: { mseList: [], version: '' },
        todayScheduleParams: null,
    },
});

const getWeekdayTitle = (weekday: WeekDays): string => {
    switch (weekday) {
        case WeekDays.Monday:
            return 'Понедельник';
        case WeekDays.Tuesday:
            return 'Вторник';
        case WeekDays.Wednesday:
            return 'Среда';
        case WeekDays.Thursday:
            return 'Четверг';
        case WeekDays.Friday:
            return 'Пятница';
        case WeekDays.Saturday:
            return 'Суббота';
        case WeekDays.Sunday:
            return 'Воскресенье';
    }
};

onMounted(() => {
    const classId = router.currentRoute.value.params.classId;

    $api.get<GetModifiedScheduleSubpageResponseModel>(
        `/api/Teacher/MSEForClassPage?classId=${classId}`
    ).then((res) => {
        state.data = res.data;
        console.log(res);
    });
});
</script>

<style lang="scss" scoped></style>
