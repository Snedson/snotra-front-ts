<template>
    <div class="weekdays-list">
        <UniversalCard
            :props="{
                type: 'elevated',
                icon: `${'https://mbousosh1.snotra.site'}/${day.iconURL}`,
                title: `${day.num}. ${day.subjectFullName}`,
                dataTags: [
                    {
                        color: 'white',
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
                        color: 'white',
                        title: day.location,
                        iconLocal: 'school.png',
                    },
                    {
                        color: 'white',
                        title: day.groupName ? day.groupName : 'Весь класс',
                        iconLocal: 'student.png',
                    },
                    {
                        color: 'white',
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
import $api from '@/http/api';
import router from '@/router';
import { computed, onMounted, reactive } from 'vue';
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
