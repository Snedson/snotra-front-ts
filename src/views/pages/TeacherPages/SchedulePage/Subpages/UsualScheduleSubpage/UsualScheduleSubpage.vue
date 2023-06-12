<template>
    <div class="weekdays-list" v-if="!!state.data">
        <expansion-panel
            v-for="day in Object.entries(state.data.uses.usEsForClass)"
            :key="day[0]"
            :props="{ title: getWeekdayTitle(day[0]) }"
        >
            <div class="schedule-list">
                <universal-card
                    v-for="use in day[1]"
                    :key="use.num"
                    :props="{
                        type: 'elevated-secondary',
                        title: `${use.num}. ${use.schoolClass.className}`,
                        icon: `https://sixtyfour.snotra.site/${use.iconURL}`,
                        dataTags: [
                            {
                                iconCompleteUrl:
                                    'https://sixtyfour.snotra.site/' +
                                    use.iconURL,
                                color: 'var(--snotra--surfaces--surface1)',
                                title: use.subjectFullName,
                            },
                            {
                                iconCompleteUrl: timerIcon,
                                title: state.data.usPs.usPs[day[0]][use.num - 1]
                                    .begin,
                                color: 'var(--snotra--surfaces--surface1)',
                            },
                            {
                                iconCompleteUrl: schoolIcon,
                                color: 'var(--snotra--surfaces--surface1)',
                                title: use.location,
                            },
                            {
                                iconCompleteUrl: studentIcon,
                                color: 'var(--snotra--surfaces--surface1)',
                                title: use.groupName
                                    ? use.groupName
                                    : 'Весь класс ',
                            },
                            {
                                iconCompleteUrl: bellIcon,
                                color: 'var(--snotra--surfaces--surface1)',
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
                                type: 'outlined-transparent',
                            },
                        ],
                    }"
                />
            </div>
        </expansion-panel>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { UsualScheduleSubpageService } from '@/http/services/TeacherServices/SchedulePageServices/UsualScheduleSubpageService';
import {
    UsualTeacherScheduleResponseModel,
    WeekDays,
} from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import ExpansionPanel from '@/common/components/snedson-material-components/expansion-panel/expansion-panel.vue';
import timerIcon from '@/assets/icons/emojis/time.png';
import schoolIcon from '@/assets/icons/emojis/school.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import bellIcon from '@/assets/icons/emojis/bell.png';

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

<style lang="scss" scoped>
.weekdays-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
