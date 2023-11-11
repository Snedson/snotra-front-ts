<template>
    <div class="send-notification" v-if="state.reponse">
        <div class="send-notification__form form material-card_type_elevated">
            <h2 class="form__title">Уведомление</h2>
            <div class="form__field field">
                <img class="field__icon" :src="messageCalloutIcon" />
                <text-field
                    class="field__input"
                    :placeholder="'Введите текст уведомления'"
                    v-model="state.notification.text"
                />
            </div>
            <div class="form__field field">
                <img
                    class="field__icon field__icon_margin-top"
                    :src="studentIcon"
                />
                <list-select
                    class="field__input"
                    :props="{
                        title: 'Получатель: класс',
                        isDefaultSelectionAvaliable: true,
                        defaultSelectionTitle: 'Не выбрано',
                        selectedItemId: state.notification.schoolClassId,
                        menuItems: Object.entries(
                            state.reponse.schoolClasses
                        ).map(([id, title]) => ({ id: Number(id), title })),
                    }"
                    @selected="onClassSelection"
                />
            </div>
            <div
                class="form__field field"
                v-if="state.notification.schoolClassId"
            >
                <div class="field__icon"></div>
                <list-select
                    class="field__input"
                    :props="{
                        title: 'Получатель: группа класса',
                        isDefaultSelectionAvaliable: true,
                        defaultSelectionTitle: 'Весь класс',
                        selectedItemId: state.notification.groupId,
                        menuItems: Object.entries(
                            state.reponse.groupsByClasses[
                                state.notification.schoolClassId
                            ]
                        ).map(([id, title]) => ({ id: Number(id), title })),
                    }"
                    @selected="onGroupSelection"
                />
            </div>
        </div>
        <div class="send-notification">
            <custom-button
                :props="{
                    iconName: 'send',
                    innerText: 'Отправить',
                    size: 'full',
                    type: 'filled',
                }"
                @click="sendNotification"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import messageCalloutIcon from '@/assets/icons/emojis/messageCallout.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import ListSelect from '@/common/components/snedson-material-components/list-select/list-select.vue';
import TextField from '@/common/components/snedson-material-components/text-field/text-field.vue';
import customButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import { onMounted, reactive } from 'vue';
import { getSendNotificationPage, postSendNotifiation } from './api-methods';
import {
    NotificationForm,
    SendNotificationPageStateModel,
} from './send-notification-subpage.types';
import router from '@/router';
import { AxiosError } from 'axios';
import { EmptyResponse } from '@/models/EmptyResponse';

const state = reactive<SendNotificationPageStateModel>(
    {} as SendNotificationPageStateModel
);

const onClassSelection = (schoolClassId: number | null) => {
    if (schoolClassId == null) {
        alert('Вы должны выбрать класс-получатель');
        return;
    }
    state.notification.groupId = null;
    state.notification.schoolClassId = schoolClassId;
};

const onGroupSelection = (groupId: number | null) => {
    state.notification.groupId = groupId;
};

const sendNotification = () => {
    if (!state.notification.text) {
        alert('Вы не указали текст уведомления');
        return;
    }

    if (!state.notification.schoolClassId) {
        alert('Вы не выбрали класс, которму придет уведомление');
        return;
    }

    postSendNotifiation({
        message: state.notification.text,
        recipientClassId: state.notification.schoolClassId,
        isAnnouncement: false,
        recipientGroupId: state.notification.groupId,
        recipientStudentId: null,
    })
        .then((response) => {
            console.log(response.data.errorTextForUser);
            router.push({ name: 'sn.teacher.notifications.forStudents' });
        })
        .catch((reason: AxiosError<EmptyResponse>) => {
            alert(reason.response?.data.errorTextForUser);
        });
};

onMounted(() => {
    getSendNotificationPage().then((response) => {
        state.notification = {} as NotificationForm;
        state.reponse = response.data;
    });
});
</script>

<style scoped lang="scss">
.send-notification {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.form {
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
        &_margin-top {
            margin-top: 10px;
        }
    }
}
</style>
