<template>
    <div class="schedule-list" v-if="state.data"></div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { UsualScheduleSubpageService } from '@/http/services/TeacherServices/SchedulePageServices/UsualScheduleSubpageService';
import { UsualTeacherScheduleResponseModel } from '@/http/pageModels/teacherModels/schedulePage/UsualTeacherScheduleResponseModel';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';

const state = reactive<{ data: UsualTeacherScheduleResponseModel | null }>({
    data: null,
});

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

<style lang="scss" scoped></style>
