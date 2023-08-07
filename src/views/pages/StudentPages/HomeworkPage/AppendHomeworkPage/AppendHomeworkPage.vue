<template>
    <div class="append-homework" v-if="state.data">
        <div
            class="append-homework__task-data task-data material-card_type_elevated"
        >
            <h2 class="append-homework__title">Задание</h2>
            <div class="task-data__field field">
                <img class="field__icon" :src="messageCalloutIcon" />
                <text-field
                    class="field__input"
                    :placeholder="'Введите текст задания'"
                    v-model="state.task.text"
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
                            state.data.avaliableSubjects
                        ).map(([id, title]) => ({ id: Number(id), title })),
                        selectedItemId: state.task.subjectId,
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
                        menuItems: Object.entries(state.data.groupsOfClass).map(
                            ([id, title]) => ({ id: Number(id), title })
                        ),
                        selectedItemId: state.task.groupId,
                    }"
                    @selected="onGroupSelection"
                />
            </div>

            <div class="task-data__field field">
                <img class="field__icon" :src="calendarIcon" />
                <date-selector
                    class="field__input"
                    v-model="state.task.scheduledDate"
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
                @click="appendHomework"
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
import { AppendHomeworkPageStateModel } from './append-homework-page.types';
import {
    getAppendHomeworkPage,
    postAppendHomeworkElement,
} from './api-methods';
import router from '@/router';

import messageCalloutIcon from '@/assets/icons/emojis/messageCallout.png';
import booksIcon from '@/assets/icons/emojis/books.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import calendarIcon from '@/assets/icons/emojis/calendar.png';
import { AxiosError } from 'axios';
import { EmptyResponse } from '@/models/EmptyResponse';

const state = reactive<AppendHomeworkPageStateModel>(
    {} as AppendHomeworkPageStateModel
);

const onSubjectSelection = (subjectId: number | null) => {
    if (subjectId == null) {
        alert('Вы должны выбрать предмет');
        return;
    }
    state.task.subjectId = subjectId;
};

const onGroupSelection = (groupId: number | null) => {
    state.task.groupId = groupId;
};

const appendHomework = () => {
    if (!state.task.text) {
        alert('Вы не записали текст задания');
        return;
    }

    if (!state.task.subjectId) {
        alert('Вы не выбрали предемет, для которого доавбляется задание');
        return;
    }

    if (state.task.scheduledDate.getDate <= new Date().getDate) {
        alert('Вы не указали дату, на которое задана домашная работа');
        return;
    }

    postAppendHomeworkElement({
        classId: state.data.classId,
        groupId: state.task.groupId,
        subjectId: state.task.subjectId,
        scheduledDate: state.task.scheduledDate,
        taskText: state.task.text,
        additionalFilesUri: null,
    })
        .then((response) => {
            console.log(response.data.errorTextForUser);
            router.push({ name: 'sn.student.homeworks' });
        })
        .catch((reason: AxiosError<EmptyResponse>) => {
            alert(reason.response?.data.errorTextForUser);
        });
};

onMounted(() => {
    getAppendHomeworkPage().then((response) => {
        state.task = {
            text: '',
            scheduledDate: new Date(),
            subjectId: null,
            groupId: null,
        };
        state.data = response.data;
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
