<template>
    <div class="weekdays-list">
        <UniversalCard
            :class="day.colorSchemeName"
            :props="{
                type: 'elevated-secondary',
                icon: `${'https://mbousosh1.snotra.site'}/${day.iconURL}`,
                title: `${day.num}. ${day.subjectFullName}`,
                content:  day.comments as string | undefined,
                buttons: [
                    {
                        iconName: 'edit',
                        innerText: 'Изменить',
                        size: 'full',
                        type: 'filled',
                        redirectToOnClick: `/teacher/schedule/modify/${day.mseUuid}?version=${day.thisMseVersion}&returnTo=sn.teacher.class.modifiedSchedule`,
                    },
                ],
                dataTags: [
                    {
                        color: 'var(--snotra--sys--surface)', 
                        title: `${
                            findScheduleParam(
                                state.data.todayScheduleParams
                                    .todayScheduleParams,
                                day.num
                            ).begin
                        } - ${
                            findScheduleParam(
                                state.data.todayScheduleParams
                                    .todayScheduleParams,
                                day.num
                            ).end
                        } (${
                            findScheduleParam(
                                state.data.todayScheduleParams
                                    .todayScheduleParams,
                                day.num
                            ).durationInMins
                        } мин.)`,
                        iconLocal: 'time.png',
                    },
                    {
                        color: 'var(--snotra--sys--surface)', 
                        title: day.location,
                        iconLocal: 'school.png',
                    },
                    {
                        color: 'var(--snotra--sys--surface)', 
                        title: day.groupName ? day.groupName : 'Весь класс',
                        iconLocal: 'student.png',
                    },
                    {
                        color: 'var(--snotra--sys--surface)', 
                        title: `Перемена после: ${
                            findScheduleParam(
                                state.data.todayScheduleParams
                                    .todayScheduleParams,
                                day.num
                            ).breakDurationInMins
                        } минут`,
                        iconLocal: 'bell.png',
                    },
                ],
            }"
            v-for="day in state.data.todayMSEForClass.mseList"
            :key="day.mseUuid"
        ></UniversalCard>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { onMounted, reactive } from 'vue';
import { GetModifiedScheduleSubpageResponseModel } from './ModifiedScheduleSubpage.types';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import { getModifiedTeacherClassScheduleSubpageByClassId } from './apiMethods';
import { findScheduleParam } from '@/helpers/findScheduleParam';

const state = reactive<{ data: GetModifiedScheduleSubpageResponseModel }>({
    data: {
        todayMSEForClass: { mseList: [], version: '' },
        todayScheduleParams: {
            todayScheduleParams: [],
        },
    },
});

onMounted(() => {
    const classId = router.currentRoute.value.params.classId;

    getModifiedTeacherClassScheduleSubpageByClassId(classId).then((res) => {
        state.data = res.data;
    });
});
</script>

<style lang="scss" scoped></style>
