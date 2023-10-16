<template>
    <div
        class="user-page"
        v-if="state.data !== null && state.selectedStatusId !== null"
    >
        <div class="user-page-header material-card_type_outlined">
            <div class="user-page-header__avatar"></div>
            <div class="user-page-header__data">
                <h1 class="user-page-header__name">
                    {{ state.data.name }} {{ state.data.surname }}
                </h1>
                <div class="user-page-header__status">
                    <img
                        :src="`https://mbousosh1.snotra.site/${currentStatus?.iconURL}`"
                        alt=""
                        class="user-page-header__status-icon"
                    />
                    <p class="user-page-header__status-text">
                        {{ currentStatus?.statusName }}
                    </p>
                </div>
            </div>
        </div>
        <div class="status-setter material-card_type_elevated">
            <div class="status-setter-element">
                <img
                    :src="checkMarkIcon"
                    alt=""
                    class="status-setter-element__icon"
                />
                <ListSelect
                    :props="{
                        menuItems: statusesForListSelect
                            ? statusesForListSelect
                            : [],
                        isDefaultSelectionAvaliable: false,
                        selectedItemId: state.selectedStatusId,
                        title: 'Статус',
                    }"
                    @selected="onStatusSelect"
                ></ListSelect>
            </div>
            <div class="status-setter-element">
                <img :src="speechBalloonIcon" alt="" />
                <text-field
                    type="text"
                    :placeholder="'Коротко опишите причину...'"
                    v-model="state.comment"
                />
            </div>
        </div>
        <custom-button
            :props="{
                iconName: 'person_pin_circle',
                innerText: 'Установить статус',
                size: 'full',
                type: 'filled',
            }"
            @click="setStatus"
        />
    </div>
</template>
<script lang="ts" setup>
import { GetStudentMenuPageResponseModel } from '@/http/pageModels/studentModels/menuPage/GetStudentMenuPageResponseModel';
import { StudentStatus } from '@/http/pageModels/teacherModels/classPage/AbsentStudentsResponseModel';
import { reactive, computed, onMounted } from 'vue';
import { getStudentMenuPage, postSetStatus } from './apiMethods';
import CustomButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import ListSelect from '@/common/components/snedson-material-components/list-select/list-select.vue';
import checkMarkIcon from '@/assets/icons/check-mark.png';
import speechBalloonIcon from '@/assets/icons/speech-balloon.png';
import { IListSelectMenuItem } from '@/common/components/snedson-material-components/list-select/list-select.types';
import TextField from '@/common/components/snedson-material-components/text-field/text-field.vue';

const state = reactive<{
    data: GetStudentMenuPageResponseModel | null;
    selectedStatusId: number | null;
    comment: string;
}>({
    data: null,
    selectedStatusId: null,
    comment: '',
});

const currentStatus = computed((): StudentStatus | null => {
    if (!state.data) {
        return null;
    }

    return state.data?.allStatusesForStudents[
        state.data.allStatusesForStudents.findIndex(
            (value) => value.statusID === state.data?.currentStatusID
        )
    ];
});

const onStatusSelect = (statusId: number | null) => {
    state.selectedStatusId = statusId;
};

const statusesForListSelect = computed((): IListSelectMenuItem[] | null => {
    return state.data !== null
        ? state.data.allStatusesForStudents.map((value) => {
              return { id: value.statusID, title: value.statusName };
          })
        : null;
});

const setStatus = () => {
    if (state.data?.currentStatusID == state.selectedStatusId) {
        alert('У вас уже установлен данный статус');
        return;
    }

    if (state.selectedStatusId) {
        postSetStatus({
            statusId: state.selectedStatusId,
            comment: state.comment,
        });
    }
};

onMounted(() => {
    getStudentMenuPage().then((res) => {
        state.data = res.data;
        state.selectedStatusId = res.data.currentStatusID;
    });
});
</script>
<style lang="scss" scoped>
.status-setter {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px 20px;
    border-radius: 15px;
}

.status-setter-element {
    display: flex;
    flex-direction: row;
    gap: 15px;

    .list-select {
        margin-top: 0;
    }

    &__icon {
        width: 55px;
        height: 55px;
    }
}
</style>
