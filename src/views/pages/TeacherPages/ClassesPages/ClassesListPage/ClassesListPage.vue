<template>
    <div class="classes-page" v-if="state.schoolClasses">
        <ul
            v-for="(Classes, GradeNumber) in state.schoolClasses"
            :key="GradeNumber"
            class="classes-page__grade-group grade-group"
        >
            <h2 class="grade-group__title">{{ GradeTitles[GradeNumber] }}</h2>
            <li
                v-for="schoolClass in Classes"
                :key="schoolClass.classId"
                class="grade-group__item"
            >
                <minor-card
                    :props="{
                        title: schoolClass.className,
                        to: `/teacher/classes/${schoolClass.classId}/allStudents`,
                        icon: 'supervised_user_circle',
                    }"
                    :class="schoolClass.colorSchemeName"
                />
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import MinorCard from '@/common/components/snedson-material-components/minor-card/minor-card.vue';
import { SchoolClassModel } from '@/models/SchoolClassModel';
import { onMounted, reactive } from 'vue';
import { getSchoolClassesPage } from './api-methods';
import { GradeTitles, SchoolClassesPageState } from './ClassesListPage.types';

const state = reactive<{
    schoolClasses: SchoolClassesPageState;
}>({
    schoolClasses: {},
});

onMounted(() => {
    getSchoolClassesPage().then((res) => {
        state.schoolClasses = groupSchoolClassesByGrade(res.data.schoolClasses);
    });
});

const groupSchoolClassesByGrade = (
    classes: SchoolClassModel[]
): SchoolClassesPageState => {
    const groupedClasses: SchoolClassesPageState = {};

    classes
        .filter((sc) => !sc.isMockClass)
        .forEach((schoolClass) => {
            const gradeNumber = schoolClass.gradeNumber;
            if (groupedClasses[gradeNumber]) {
                groupedClasses[gradeNumber].push(schoolClass);
            } else {
                groupedClasses[gradeNumber] = [schoolClass];
            }
        });

    return groupedClasses;
};
</script>

<style lang="scss" scoped>
.classes-page {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
}

.grade-group {
    display: flex;
    flex-direction: column;
    width: calc(50% - (15px / 2));
    gap: 15px;
    margin-bottom: 10px;

    &__title {
        font-size: 25px;
    }
}

@media (max-width: 800px) {
    .classes-page {
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .grade-group {
        width: 100%;
    }
}
</style>
