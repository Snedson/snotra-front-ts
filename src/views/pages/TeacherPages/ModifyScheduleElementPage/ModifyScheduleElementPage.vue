<template>
    <div class="modify-se" v-if="state.data.modifiedState">
        <div class="modify-se__section section">
            <h2 class="section__title">Текущие данные урока:</h2>
            <universal-card
                :props="{
            type: 'elevated',
            title: `${state.data.originalState.actualMse.num}. ${state.data.originalState.actualMse.schoolClass.className}`,
            content: state.data.originalState.actualMse.comments as string | undefined,
            dataTags: [
                {
                    iconCompleteUrl:
                        'https://sixtyfour.snotra.site/' +
                        state.data.originalState.actualMse.iconURL,
                    color: 'var(--snotra--surfaces--surface1)',
                    title: state.data.originalState.actualMse.subjectFullName,
                },
                {
                    iconCompleteUrl: timerIcon,
                    color: 'var(--snotra--surfaces--surface1)',
                    title: `${
                        state.data.originalState.todayScheduleParams
                            .todayScheduleParams[
                            state.data.originalState.actualMse.num - 1
                        ].begin
                    } - ${
                        state.data.originalState.todayScheduleParams
                            .todayScheduleParams[
                            state.data.originalState.actualMse.num - 1
                        ].end
                    } (${
                        state.data.originalState.todayScheduleParams
                            .todayScheduleParams[
                            state.data.originalState.actualMse.num - 1
                        ].durationInMins
                    } мин.)`,
                },
                {
                    iconCompleteUrl: schoolIcon,
                    color: 'var(--snotra--surfaces--surface1)',
                    title: state.data.originalState.actualMse.location,
                },
                {
                    iconCompleteUrl: studentIcon,
                    color: 'var(--snotra--surfaces--surface1)',
                    title: state.data.originalState.actualMse.groupName
                        ? state.data.originalState.actualMse.groupName
                        : 'Весь класс ',
                },
                {
                    iconCompleteUrl: bellIcon,
                    color: 'var(--snotra--surfaces--surface1)',
                    title: `Перемера после: ${
                        state.data.originalState.todayScheduleParams
                            .todayScheduleParams[
                            state.data.originalState.actualMse.num - 1
                        ].breakDurationInMins
                    } мин.`,
                },
            ],
        }"
            ></universal-card>
        </div>
        <div class="modify-se__section section">
            <h2 class="section__title">Новые данные урока:</h2>
            <div class="modified-data">
                <div class="modified-data__field field">
                    <img :src="schoolIcon" class="field__icon" />
                    <list-select
                        :props="{
                            title: 'Место проведения урока',
                            isEmptySelectionAvaliable: false,
                            menuItems: Object.entries(
                                state.data.originalState.locationsList
                            ).map(([id, title]) => ({ id: Number(id), title })),
                            selectedItemId: state.data.modifiedState.locationId,
                        }"
                        @selected="onLocationSelection"
                    />
                </div>
                <div class="modified-data__field field">
                    <img :src="handIcon" class="field__icon" />
                    <input
                        type="text"
                        class="field__input tmp-text-field"
                        :placeholder="'Комментарий для учащихся'"
                        v-model="state.data.modifiedState.comments"
                    />
                </div>
            </div>
        </div>
        <div class="modify-se__submit">
            <custom-button
                :props="{
                    iconName: 'check',
                    innerText: 'Сохранить изменения',
                    size: 'full',
                    type: 'filled',
                }"
                @click="saveChanges"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import timerIcon from '@/assets/icons/emojis/time.png';
import schoolIcon from '@/assets/icons/emojis/school.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import bellIcon from '@/assets/icons/emojis/bell.png';
import handIcon from '@/assets/icons/emojis/hand.png';
import getModifyScheduleElementPage from '@/http/services/TeacherServices/ModifyScheduleElementPage/ModifyScheduleElementPageService';
import router from '@/router';
import { onMounted, reactive } from 'vue';
import UniversalCard from '@/common/components/snedson-material-components/universal-card/universal-card.vue';
import ListSelect from '@/common/components/snedson-material-components/list-select/list-select.vue';
import { ModifySePageStateModel } from '@/http/pageModels/teacherModels/modifyScheduleElementPage/ModifySePageStateModel';
import customButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import patchModifyingSeService from '@/http/services/TeacherServices/ModifyScheduleElementPage/ModifyingSeService';

const state = reactive<{
    data: ModifySePageStateModel;
}>({
    data: {} as ModifySePageStateModel,
});

onMounted(() => {
    const mspVersion = localStorage.getItem('mspVersion');
    const mseGuid = router.currentRoute.value.params.mseId;
    const mseVersion = router.currentRoute.value.query.version;

    getModifyScheduleElementPage(
        {
            mseGuid: mseGuid as string,
            mspVersion: mspVersion ? mspVersion : 'null',
            thisMseVersion: mseVersion as string,
        },
        state
    );
});

const onLocationSelection = (locationId: number) => {
    state.data.modifiedState.locationId = locationId;
};

const saveChanges = () => {
    if (
        state.data.modifiedState.comments ===
            state.data.originalState.actualMse.comments &&
        state.data.modifiedState.locationId ===
            state.data.originalState.actualMse.locationId
    ) {
        alert('Вы не изменили данные. ');
        return;
    }

    const returnTo = router.currentRoute.value.query.returnTo;
    patchModifyingSeService(
        {
            locationId: state.data.modifiedState.locationId,
            comment: state.data.modifiedState.comments as string,
            mseGuid: state.data.originalState.actualMse.mseUuid,
            mseVersion: state.data.originalState.actualMse.thisMseVersion,
        },
        returnTo?.toString() as string | null
    );
};
</script>

<style lang="scss" scoped>
.modify-se {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &__section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

.section {
    &__title {
        font-weight: 400;
        font-size: 20px;
    }
}

.modified-data {
    background-color: var(--snotra--surfaces--surface1);
    border-radius: 15px;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

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
        margin-top: 7px;
    }
}

.tmp-text-field {
    width: 100%;
    height: 56px;
    outline: none;
    box-shadow: none;
    border-color: var(--snotra--sys--outline);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    padding: 0 21px;
    font-size: 16px;
    background-color: #ffffff00;
    &:focus {
        outline: none;
        box-shadow: none;
        border: none;
        border-color: var(--snotra--sys--outline);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
    }
}
</style>
