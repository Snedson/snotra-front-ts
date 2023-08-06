<template>
    <div class="homework-page" v-if="state.data !== null">
        <div class="weekdays-list">
            <ExpansionPanel
                v-for="(day, dayIndex) in Object.entries(state.data.homework)"
                :key="dayIndex"
                :props="{ title: new Date(day[0]).toLocaleDateString() }"
            >
                <div class="homework-list">
                    <UniversalCard
                        :class="homework.colorSchemeName"
                        :props="{
                            type: 'filled',
                            content: homework.taskText,
                            dataTags: [
                                {
                                    color: 'var(--snotra--sys--surface)',
                                    title: homework.subjectName,
                                    iconCompleteUrl:
                                        'https://mbousosh1.snotra.site/' +
                                        homework.iconURL,
                                },
                                {
                                    color: 'var(--snotra--sys--surface)',
                                    title: homework.groupName,
                                    iconLocal: 'student.png',
                                },
                                {
                                    color: 'var(--snotra--sys--surface)',
                                    title: `Задание добавлено: ${new Date(
                                        homework.appendDate
                                    ).toLocaleDateString()}`,
                                    iconLocal: 'calendar.png',
                                },
                                {
                                    color: 'var(--snotra--sys--surface)',
                                    title: `Задание добавил: ${homework.authorName}`,
                                    iconLocal: 'student.png',
                                },
                            ],
                        }"
                        v-for="(homework, homeworkIndex) in day[1]"
                        :key="homeworkIndex"
                    ></UniversalCard>
                </div>
            </ExpansionPanel>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { GetHomeworkPageResponseModel } from './HomeworkPage.types';
import { getHomeworkPage } from './apiMethods';
import ExpansionPanel from '@/common/components/snedson-material-components/expansion-panel/expansion-panel.vue';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';

const state = reactive<{ data: GetHomeworkPageResponseModel | null }>({
    data: null,
});

onMounted(() => {
    getHomeworkPage().then((res) => {
        state.data = res.data;
    });
});
</script>
<style lang="scss">
.weekdays-list {
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
