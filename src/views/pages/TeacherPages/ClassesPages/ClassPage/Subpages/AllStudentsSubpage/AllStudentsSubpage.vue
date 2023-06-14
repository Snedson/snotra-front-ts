<template>
    <div class="students-list">
        <universal-card
            v-for="student in state.data"
            v-bind:key="student.studentId"
            :props="{
                type: 'outlined',
                content: student.getFullName,
            }"
        >
        </universal-card>
    </div>
</template>

<script lang="ts" setup>
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import { Student } from '@/http/pageModels/teacherModels/classPage/AllStudentsResponseModel';
import { AllStudentsService } from '@/http/services/TeacherServices/ClassPageServices/AllStudentsService';
import router from '@/router';
import { onMounted, reactive } from 'vue';

const state = reactive<{ data: Student[] }>({
    data: [],
});

onMounted(() => {
    const classId = router.currentRoute.value.params.classId;

    AllStudentsService.getAllStudents(+classId).then((response) => {
        state.data = response.data.students;
    });
});
</script>

<style lang="scss" scoped>
.students-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
