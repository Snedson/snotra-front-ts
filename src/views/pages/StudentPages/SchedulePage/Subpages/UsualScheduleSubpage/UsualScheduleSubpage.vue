<template>
    <div class="weekdays-list" v-if="state.data">
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
                        title: `${use.num}. ${use.subjectFullName}`,
                        icon: getBaseUrl() + use.iconURL,
                        dataTags: [
                            {
                                iconCompleteUrl: timerIcon,
                                title: `${
                                    state.data.usps.usPs[day[0]][use.num - 1]
                                        .begin
                                } - ${
                                    state.data.usps.usPs[day[0]][use.num - 1]
                                        .end
                                } (${
                                    state.data.usps.usPs[day[0]][use.num - 1]
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
                                    state.data.usps.usPs[day[0]][use.num - 1]
                                        .breakDurationInMins
                                } мин.`,
                            },
                        ],
                    }"
                    :class="use.colorSchemeName"
                />
            </div>
        </expansion-panel>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { getUsualScheduleSubpage } from './apiMethods';
import { GetStudentUsualScheduleSubpageResponseModel } from './UsualScheduleSubpage.types';
import { WeekDays } from '@/models/ScheduleLists/WeekDaysEnum';
import expansionPanel from '@/common/components/snedson-material-components/expansion-panel/expansion-panel.vue';
import universalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import timerIcon from '@/assets/icons/emojis/time.png';
import schoolIcon from '@/assets/icons/emojis/school.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import bellIcon from '@/assets/icons/emojis/bell.png';
import { getWeekdayTitle } from '@/helpers/getWeekdayTitle';
import { getBaseUrl } from '@/http/api/';

const state = reactive<{
    data: GetStudentUsualScheduleSubpageResponseModel | null;
}>({ data: null });

onMounted(() => {
    getUsualScheduleSubpage().then((res) => {
        state.data = res.data;
        console.log(res.data);
    });
});
</script>
<style lang="scss"></style>
