<template>
    <div v-if="state.data.isDayOff">
        <p>Сегодня нерабочий день</p>
    </div>
    <div
        class="schedule-list"
        v-else-if="state.data.response && !state.data.isDayOff"
    >
        <universal-card
            v-for="mse in state.data.response.todayClasses?.mseList"
            :props="{
                content:  mse.comments as string | undefined,
                type: 'elevated-secondary',
                title: `${mse.num}. ${mse.schoolClass.className}`,
                dataTags: [
                    {
                        iconCompleteUrl: 'https://sixtyfour.snotra.site/' + mse.iconURL, 
                        color: 'var(--snotra--surfaces--surface1)', 
                        title: mse.subjectFullName,
                    },
                    {
                        iconCompleteUrl: timerIcon,
                        color: 'var(--snotra--surfaces--surface1)',
                        title: `${state.data.response.msPsForToday.todayScheduleParams[mse.num-1].begin} - ${state.data.response.msPsForToday.todayScheduleParams[mse.num-1].end} (${state.data.response.msPsForToday.todayScheduleParams[mse.num-1].durationInMins} мин.)`,
                    },
                    {
                        iconCompleteUrl: schoolIcon,
                        color: 'var(--snotra--surfaces--surface1)',
                        title: mse.location,
                    },
                    {
                        iconCompleteUrl: studentIcon,
                        color: 'var(--snotra--surfaces--surface1)',
                        title: mse.groupName ? mse.groupName : 'Весь класс ',
                    },
                    {
                        iconCompleteUrl: bellIcon,
                        color: 'var(--snotra--surfaces--surface1)',
                        title: `Перемера после: ${state.data.response.msPsForToday.todayScheduleParams[mse.num-1].breakDurationInMins} мин.`,
                    },
                ], 
                buttons: [
                    {
                        iconName: 'supervised_user_circle',
                        innerText: 'Страница класса',
                        size: 'full-resizable-to-icon-large',
                        type: 'outlined-transparent',
                    },
                    {
                        iconName: 'edit',
                        innerText: 'Изменить',
                        size: 'full',
                        type: 'filled',
                        redirectToOnClick: `/teacher/schedule/modify/${mse.mseUuid}?version=${mse.thisMseVersion}&returnTo=sn.teacher.schedule.mse`
                    }
                ]
            }"
            :key="mse.num"
        >
        </universal-card>
    </div>
</template>

<script lang="ts" setup>
import timerIcon from '@/assets/icons/emojis/time.png';
import schoolIcon from '@/assets/icons/emojis/school.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import bellIcon from '@/assets/icons/emojis/bell.png';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import getModifiedSchedule from '@/http/services/TeacherServices/SchedulePageServices/ModifiedScheduleService';
import { onMounted, reactive } from 'vue';
import { ModifiedScheduleStateModel } from '@/http/pageModels/teacherModels/schedulePage/ModifiedScheduleStateModel';

const state = reactive<{ data: ModifiedScheduleStateModel }>({
    data: {} as ModifiedScheduleStateModel,
});

onMounted(() => {
    console.log('getModifiedScheduleSubpage');
    const mseVersion = localStorage.getItem('mseVersion');
    const teacherMse = localStorage.getItem('teachersMse');
    const mspVersion = localStorage.getItem('mspVersion');
    const msps = localStorage.getItem('modifiedScheduleParams');

    console.log('getModifiedScheduleSubpage');

    getModifiedSchedule(
        {
            mseVer: mseVersion && teacherMse ? mseVersion : 'null',
            mspVer: mspVersion && msps ? mspVersion : 'null',
            useVer: 'null',
            uspVer: 'null',
        },
        state
    );
});
</script>

<style lang="scss" scoped>
.schedule-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
