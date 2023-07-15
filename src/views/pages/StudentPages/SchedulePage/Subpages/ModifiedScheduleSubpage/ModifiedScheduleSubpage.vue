<template>
    <div class="schedule-list" v-if="state.data">
        <universal-card
            v-for="mse in state.data.msesForToday.mseList"
            :props="{
                content:  mse.comments as string | undefined,
                type: 'elevated-secondary',
                title: `${mse.num}. ${mse.subjectFullName}`,
                icon: 'https://mbousosh1.snotra.site/' + mse.iconURL,
                dataTags: [
                    {
                        iconCompleteUrl: timerIcon,
                        color: 'var(--snotra--sys--surface)', 
                        title: `${state.data.mspsForToday.todayScheduleParams[mse.num-1].begin} - ${state.data.mspsForToday.todayScheduleParams[mse.num-1].end} (${state.data.mspsForToday.todayScheduleParams[mse.num-1].durationInMins} мин.)`,
                    },
                    {
                        iconCompleteUrl: schoolIcon,
                        color: 'var(--snotra--sys--surface)', 
                        title: mse.location,
                    },
                    {
                        iconCompleteUrl: studentIcon,
                        color: 'var(--snotra--sys--surface)',
                        title: mse.groupName ? mse.groupName : 'Весь класс ',
                    },
                    {
                        iconCompleteUrl: bellIcon,
                        color: 'var(--snotra--sys--surface)',
                        title: `Перемера после: ${state.data.mspsForToday.todayScheduleParams[mse.num-1].breakDurationInMins} мин.`,
                    },
                    {
                        iconCompleteUrl: teacherIcon, 
                        color: 'var(--snotra--sys--surface)', 
                        title: mse.hostName,
                    },
                ], 
            }"
            :key="mse.num"
            :class="mse.schoolClass.colorSchemeName"
        >
        </universal-card>
    </div>
</template>
<script lang="ts" setup>
import timerIcon from '@/assets/icons/emojis/time.png';
import schoolIcon from '@/assets/icons/emojis/school.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import bellIcon from '@/assets/icons/emojis/bell.png';
import teacherIcon from '@/assets/icons/emojis/teacher.png';
import { onMounted, reactive } from 'vue';
import { getStudentModifiedScheduleSubpage } from './apiMethods';
import { GetStudentModifiedScheduleSubpageResponseModel } from './ModifiedSchedulePage.types';
import universalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';

const state = reactive<{
    data: GetStudentModifiedScheduleSubpageResponseModel | null;
}>({ data: null });

onMounted(() => {
    getStudentModifiedScheduleSubpage().then((res) => {
        state.data = res.data;
        console.log(res);
    });
});
</script>
<style lang="scss"></style>
