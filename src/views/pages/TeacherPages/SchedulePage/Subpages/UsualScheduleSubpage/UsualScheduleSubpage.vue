<template>
    <div class="weekdays-list" v-if="!!state.data">
        <expansion-panel
            v-for="day in Object.entries(state.data.uses.usEsForClass)"
            :key="day[0]"
            :props="{ title: getWeekdayTitle(day[0] as WeekDays) }"
        >
            <div class="schedule-list">
                <universal-card
                    v-for="use in day[1]"
                    :key="use.num"
                    :props="{
                        type: 'filled',
                        title: `${use.num}. ${use.schoolClass.className}`,
                        dataTags: [
                            {
                                iconCompleteUrl: getBaseUrl() + use.iconURL,
                                color: 'var(--snotra--sys--surface-variant)',
                                title: use.subjectFullName,
                            },
                            {
                                iconLocal: 'time.png',
                                title: `${
                                    state.data.usPs.usPs[day[0]][use.num - 1]
                                        .begin
                                } - ${
                                    state.data.usPs.usPs[day[0]][use.num - 1]
                                        .end
                                } (${
                                    state.data.usPs.usPs[day[0]][use.num - 1]
                                        .durationInMins
                                } мин.)`,
                                color: 'var(--snotra--sys--surface-variant)',
                            },
                            {
                                iconCompleteUrl: schoolIcon,
                                color: 'var(--snotra--sys--surface-variant)',
                                title: use.location,
                            },
                            {
                                iconCompleteUrl: studentIcon,
                                color: 'var(--snotra--sys--surface-variant)',
                                title: use.groupName
                                    ? use.groupName
                                    : 'Весь класс ',
                            },
                            {
                                iconCompleteUrl: bellIcon,
                                color: 'var(--snotra--sys--surface-variant)',
                                title: `Перемера после: ${
                                    state.data.usPs.usPs[day[0]][use.num - 1]
                                        .breakDurationInMins
                                } мин.`,
                            },
                        ],
                        buttons: [
                            {
                                iconName: 'supervised_user_circle',
                                innerText: 'Страница класса',
                                size: 'full-resizable-to-icon-large',
                                redirectToOnClick: `/teacher/classes/${use.schoolClass.classId}/allStudents`,
                                type: 'outlined-transparent',
                            },
                        ],
                    }"
                    :class="use.schoolClass.colorSchemeName"
                />
            </div>
        </expansion-panel>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { UsualScheduleSubpageService } from '@/http/services/TeacherServices/SchedulePageServices/UsualScheduleSubpageService';
import { UsualTeacherScheduleResponseModel } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import ExpansionPanel from '@/common/components/snedson-material-components/expansion-panel/expansion-panel.vue';
import timerIcon from '@/assets/icons/emojis/time.png';
import schoolIcon from '@/assets/icons/emojis/school.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import bellIcon from '@/assets/icons/emojis/bell.png';
import { WeekDays } from '@/models/ScheduleLists/WeekDaysEnum';
import { getBaseUrl } from '@/http/api/';

const state = reactive<{ data: UsualTeacherScheduleResponseModel | null }>({
    data: null,
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
    UsualScheduleSubpageService.getUsualSchedulePage({
        mseVer: 'string',
        mspVer: 'string',
        useVer: 'string',
        uspVer: 'string',
    }).then((response) => {
        state.data = response.data;
        console.log(response.data);
    });
});
</script>

<style lang="scss">
.weekdays-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
