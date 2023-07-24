<template>
    <div class="weekdays-list" v-if="state.data !== null">
        <ExpansionPanel
            :props="{ title: getWeekdayTitle(day[0] as WeekDays) }"
            v-for="day in Object.entries(state.data.usEsForClass)"
            :key="day[0]"
        >
            <div class="schedule-list">
                <universal-card
                    v-for="(use, index) in day[1]"
                    :key="index"
                    :class="use.colorSchemeName"
                    :props="{
                        type: 'filled',
                        title: `${use.num}. ${use.subjectFullName}`,
                        icon: 'https://mbousosh1.snotra.site/' + use.iconURL,
                        dataTags: [
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
                                iconLocal: 'school.png',
                                color: 'var(--snotra--sys--surface-variant)',
                                title: use.location,
                            },
                            {
                                iconLocal: 'student.png',
                                color: 'var(--snotra--sys--surface-variant)',
                                title: use.groupName
                                    ? use.groupName
                                    : 'Весь класс ',
                            },
                            {
                                iconLocal: 'bell.png',
                                color: 'var(--snotra--sys--surface-variant)',
                                title: `Перемера после: ${
                                    state.data.usPs.usPs[day[0]][use.num - 1]
                                        .breakDurationInMins
                                } мин.`,
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
import router from '@/router';
import { onMounted, reactive } from 'vue';
import { getWeekdayTitle } from '@/helpers/getWeekdayTitle';
import { getUsualTeacherScheduleSubpageByClassId } from './apiMethods';
import { UsualTeacherClassSubpageResponseModel } from './UsualTeacherClassSubpageResponseModel';
import { WeekDays } from '@/models/ScheduleLists/WeekDaysEnum';

const state = reactive<{ data: UsualTeacherClassSubpageResponseModel | null }>({
    data: null,
});

onMounted(() => {
    const classId = router.currentRoute.value.params.classId;
    getUsualTeacherScheduleSubpageByClassId(classId).then((res) => {
        state.data = res.data;
    });
});
</script>

<style lang="scss" scoped></style>
