<template>
    <div
        class="user-page"
        v-if="state.data !== null && state.selectedStatusId !== null"
    >
        <div class="user-page-header">
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
        <div class="status-setter">
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
                        isEmptySelectionAvaliable: false,
                        selectedItemId: state.selectedStatusId,
                        title: 'Статус',
                    }"
                    :on-selected="onStatusSelect"
                ></ListSelect>
            </div>
            <div class="status-setter-element">
                <img :src="speechBalloonIcon" alt="" />
                <input type="text" />
            </div>
        </div>
        <CustomButton
            :props="{
                iconName: 'person_pin_circle',
                innerText: 'Установить статус',
                size: 'full',
                type: 'filled',
            }"
        ></CustomButton>
    </div>
</template>
<script lang="ts" setup>
import { GetStudentMenuPageResponseModel } from '@/http/pageModels/studentModels/menuPage/GetStudentMenuPageResponseModel';
import { StudentStatus } from '@/http/pageModels/teacherModels/classPage/AbsentStudentsResponseModel';
import { reactive, computed, onMounted } from 'vue';
import { getStudentMenuPage } from './apiMethods';
import CustomButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import ListSelect from '@/common/components/snedson-material-components/list-select/list-select.vue';
import checkMarkIcon from '@/assets/icons/check-mark.png';
import speechBalloonIcon from '@/assets/icons/speech-balloon.png';
import { IListSelectMenuItem } from '@/common/components/snedson-material-components/list-select/list-select.types';

const state = reactive<{
    data: GetStudentMenuPageResponseModel | null;
    selectedStatusId: number | null;
}>({
    data: null,
    selectedStatusId: null,
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

const onStatusSelect = (statusId: number) => {
    state.selectedStatusId = statusId;
};

const statusesForListSelect = computed((): IListSelectMenuItem[] | null => {
    return state.data !== null
        ? state.data.allStatusesForStudents.map((value) => {
              return { id: value.statusID, title: value.statusName };
          })
        : null;
});

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
    background: var(--snotra--sys--secondary-container);
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3);
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
