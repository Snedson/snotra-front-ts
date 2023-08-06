<template>
    <div class="append-homework" v-if="state.state.data">
        <div
            class="append-homework__task-data task-data material-card_type_elevated"
        >
            <h2 class="append-homework__title">Задание</h2>
            <div class="task-data__field field">
                <img class="field__icon" :src="messageCalloutIcon" />
                <text-field
                    class="field__input"
                    :placeholder="'Введите текст задания'"
                    v-model="state.state.task.text"
                />
            </div>
            <div class="task-data__field field">
                <img class="field__icon" :src="booksIcon" />
                <list-select
                    class="field__input"
                    :props="{
                        title: 'Предмет',
                        isDefaultSelectionAvaliable: true,
                        defaultSelectionTitle: 'Не выбрано',
                        menuItems: Object.entries(
                            state.state.data.avaliableSubjects
                        ).map(([id, title]) => ({ id: Number(id), title })),
                        selectedItemId: state.state.task.subjectId,
                    }"
                    @selected="onSubjectSelection"
                />
            </div>
            <div class="task-data__field field">
                <img class="field__icon" :src="studentIcon" />
                <list-select
                    class="field__input"
                    :props="{
                        title: 'Группа класса',
                        isDefaultSelectionAvaliable: true,
                        defaultSelectionTitle: 'Весь класс',
                        menuItems: Object.entries(
                            state.state.data.groupsOfClass
                        ).map(([id, title]) => ({ id: Number(id), title })),
                        selectedItemId: state.state.task.groupId,
                    }"
                    @selected="onGroupSelection"
                />
            </div>

            <div class="task-data__field field">
                <img class="field__icon" :src="calendarIcon" />
                <date-selector
                    class="field__input"
                    v-model="state.state.task.scheduledDate"
                    :props="{
                        setTodayAsMin: true,
                        maxDateDaysOffset: 14,
                    }"
                />
            </div>
        </div>
        <div class="append-homework__submit">
            <custom-button
                :props="{
                    iconName: 'add',
                    innerText: 'Добавить домашнее задание',
                    size: 'full',
                    type: 'filled',
                }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ListSelect from '@/common/components/snedson-material-components/list-select/list-select.vue';
import TextField from '@/common/components/snedson-material-components/text-field/text-field.vue';
import DateSelector from '@/common/components/snedson-material-components/date-selector/date-selector.vue';
import customButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import { onMounted, reactive } from 'vue';
import {
    AppendHomeworkPageStateModel,
    HomeworkTask,
} from './append-homework-page.types.ts';
import { getAppendHomeworkPage } from './api-methods.ts';

import messageCalloutIcon from '@/assets/icons/emojis/messageCallout.png';
import booksIcon from '@/assets/icons/emojis/books.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import calendarIcon from '@/assets/icons/emojis/calendar.png';

const state = reactive<AppendHomeworkPageStateModel>({
    state: {} as AppendHomeworkPageStateModel,
});

const onSubjectSelection = (subjectId: number | null) => {
    if (subjectId == null) {
        alert('Вы должны выбрать предмет');
        return;
    }
    state.state.task.subjectId = subjectId;
};

const onGroupSelection = (groupId: number | null) => {
    state.state.task.groupId = groupId;
};

onMounted(() => {
    getAppendHomeworkPage().then((response) => {
        state.state.task = {
            text: '',
            scheduledDate: Date,
            subjectId: null,
            groupId: null,
        };
        state.state.data = response.data;
    });
});
</script>

<style scoped lang="scss">
.append-homework {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    &__title {
        font-weight: 400;
        font-size: 20px;
    }
}

.task-data {
    border-radius: 15px;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    &__field {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }
}

.field {
    &__icon {
        width: 55px;
        height: 55px;
    }
}
</style>
