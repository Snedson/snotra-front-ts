<template>
    <div class="weekdays-list" v-if="state.data !== null">
        <ExpansionPanel
            :props="{ title: getWeekdayTitle(day[0]) }"
            v-for="day in Object.entries(state.data.usEsForClass)"
            :key="day[0]"
        >
            <div class="schedule-list">
                <universal-card
                    v-for="(use, index) in day[1]"
                    :key="index"
                    :props="{
                        type: 'filled',
                        title: `${use.num}. ${use.schoolClass.className}`,
                        dataTags: [
                            {
                                iconCompleteUrl:
                                    'https://sixtyfour.snotra.site/' +
                                    use.iconURL,
                                color: 'var(--snotra--surfaces--surface1)',
                                title: use.subjectFullName,
                            },
                            {
                                iconLocal: 'time.png',
                                title: state.data.usPs.usPs[day[0]][use.num - 1]
                                    .begin,
                                color: 'var(--snotra--surfaces--surface1)',
                            },
                            {
                                iconLocal: 'school.png',
                                color: 'var(--snotra--surfaces--surface1)',
                                title: use.location,
                            },
                            {
                                iconLocal: 'student.png',
                                color: 'var(--snotra--surfaces--surface1)',
                                title: use.groupName
                                    ? use.groupName
                                    : 'Весь класс ',
                            },
                            {
                                iconLocal: 'bell.png',
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
        </ExpansionPanel>
    </div>
</template>

<script lang="ts" setup>
import ExpansionPanel from '@/common/components/snedson-material-components/expansion-panel/expansion-panel.vue';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import $api, { getBaseUrl } from '@/http/api';
import {
    UsualTeacherScheduleResponseModel,
    WeekDays,
} from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';
import { UsualScheduleElementModel } from '@/models/ScheduleElelmentModel';
import { ScheduleParamsModel } from '@/models/ScheduleParamsModel';
import router from '@/router';
import { onMounted, reactive } from 'vue';
import { getWeekdayTitle } from '@/helpers/getWeekdayTitle';

type UsualTeacherClassSubpageResponseModel = {
    usEsForClass: {
        [key in WeekDays]: UsualScheduleElementModel[];
    };
    usPs: {
        usPs: {
            [key in WeekDays]: ScheduleParamsModel[];
        };
        version: string;
    };
};

const state = reactive<{ data: UsualTeacherClassSubpageResponseModel | null }>({
    data: null,
});

onMounted(() => {
    const classId = router.currentRoute.value.params.classId;
    $api.get<UsualTeacherClassSubpageResponseModel>(
        `/api/Teacher/USEForClassPage?classId=${classId}`
    ).then((res) => {
        state.data = res.data;
        console.log(res);
    });
});
</script>

<style lang="scss" scoped></style>
