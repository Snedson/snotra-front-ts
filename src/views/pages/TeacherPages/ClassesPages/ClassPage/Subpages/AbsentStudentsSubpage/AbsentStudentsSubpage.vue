<template>
    <div class="absent-students-list">
        <universal-card
            v-for="studentStatus in state.data"
            v-bind:key="studentStatus.studentId"
            :props="{
                type: 'outlined',
                content: studentStatus.studentFullName,
                dataTags: [
                    {
                        iconCompleteUrl: lateIcon,
                        title: studentStatus.statusName,
                        color: 'var(--snotra--sys--surface-variant)',
                    },
                    {
                        iconCompleteUrl: calendarIcon,
                        title: `Статус установлен: ${moment(
                            studentStatus.dateOfAppend
                        ).format('DD.MM.YYYY')}`,
                        color: 'var(--snotra--sys--surface-variant)',
                    },
                    {
                        iconCompleteUrl: messageCalloutIcon,
                        title: `Сообщение: ${studentStatus.comment}`,
                        color: 'var(--snotra--sys--surface-variant)',
                    },
                ],
            }"
        >
        </universal-card>
    </div>
</template>

<script lang="ts" setup>
import lateIcon from '@/assets/icons/emojis/late.png';
import calendarIcon from '@/assets/icons/emojis/calendar.png';
import messageCalloutIcon from '@/assets/icons/emojis/messageCallout.png';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import { StudentStatus } from '@/http/pageModels/teacherModels/classPage/AbsentStudentsResponseModel';
import { AbsentStudentsService } from '@/http/services/TeacherServices/ClassPageServices/AbsentStudentsService';
import router from '@/router';
import { onMounted, reactive } from 'vue';
import moment from 'moment';

const state = reactive<{ data: StudentStatus[] }>({
    data: [],
});

onMounted(() => {
    const classId = router.currentRoute.value.params.classId;
    AbsentStudentsService.getAbsentStudents(+classId).then((response) => {
        state.data = AbsentStudentsService.handleClassAbsentStudents(
            +classId,
            response.data
        );
    });
});
</script>

<style lang="scss" scoped>
.absent-students-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
