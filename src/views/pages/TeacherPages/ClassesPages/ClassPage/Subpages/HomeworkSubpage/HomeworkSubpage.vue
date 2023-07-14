<template>
    <div class="homework-list-cont">
        <ExpansionPanel
            v-for="homework in Object.entries(state.data.homeworks)"
            :props="{
                title: `На ${new Date(homework[0]).toLocaleDateString()}`,
            }"
            :key="homework[0]"
        >
            <div class="homework-list">
                <UniversalCard
                    v-for="(homeworkElement, index) in homework[1]"
                    :key="index"
                    :props="{
                        type: 'elevated',
                        content: homeworkElement.taskText,
                        dataTags: [
                            {
                                title: homeworkElement.subjectName,
                                color: 'white',
                                iconCompleteUrl: `${'https://mbousosh1.snotra.site'}/${
                                    homeworkElement.iconURL
                                }`,
                            },
                            {
                                title: homeworkElement.groupName
                                    ? homeworkElement.groupName
                                    : 'Весь класс',
                                color: 'white',
                                iconLocal: 'student.png',
                            },
                            {
                                title: `Было задано: ${new Date(
                                    homeworkElement.appendDate
                                ).toLocaleDateString()}`,
                                color: 'white',
                                iconLocal: 'calendar.png',
                            },
                            {
                                title: `Задание добавил: ${homeworkElement.authorName}`,
                                color: 'white',
                                iconLocal: 'student.png',
                            },
                        ],
                    }"
                ></UniversalCard>
            </div>
        </ExpansionPanel>
    </div>
</template>

<script lang="ts" setup>
import ExpansionPanel from '@/common/components/snedson-material-components/expansion-panel/expansion-panel.vue';
import $api from '@/http/api';
import { onMounted, reactive } from 'vue';
import { GetHomeworkListResponseModel } from './HomeworkSubpage.types';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import router from '@/router';
import { getTeacherClassPageHomeworkSubpage } from './apiMethods';

const state = reactive<{ data: GetHomeworkListResponseModel }>({
    data: { homeworks: {} },
});

onMounted(() => {
    const classId = router.currentRoute.value.params.classId;
    getTeacherClassPageHomeworkSubpage(classId).then((res) => {
        state.data = res.data;
    });
});
</script>

<style lang="scss" scoped>
.homework-list-cont {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.homework-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
