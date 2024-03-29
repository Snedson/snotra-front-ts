<template>
    <div class="modify-se" v-if="state.data.modifiedState">
        <div class="modify-se__section section">
            <h2 class="section__title">Текущие данные урока:</h2>
            <universal-card
                :class="state.data.originalState.actualMse.colorSchemeName"
                :props="{
            type: 'elevated',
            title: `${state.data.originalState.actualMse.num}. ${state.data.originalState.actualMse.schoolClass.className}`,
            content: state.data.originalState.actualMse.comments as string | undefined,
            dataTags: [
                {
                    iconCompleteUrl:
                    getBaseUrl() +
                        state.data.originalState.actualMse.iconURL,
                    color: 'var(--snotra--sys--surface-variant)',
                    title: state.data.originalState.actualMse.subjectFullName,
                },
                {
                    iconCompleteUrl: timerIcon,
                    color: 'var(--snotra--sys--surface-variant)',
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
                    color: 'var(--snotra--sys--surface-variant)',
                    title: state.data.originalState.actualMse.location,
                },
                {
                    iconCompleteUrl: studentIcon,
                    color: 'var(--snotra--sys--surface-variant)',
                    title: state.data.originalState.actualMse.groupName
                        ? state.data.originalState.actualMse.groupName
                        : 'Весь класс ',
                },
                {
                    iconCompleteUrl: bellIcon,
                    color: 'var(--snotra--sys--surface-variant)',
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
            <div
                :class="[
                    'modified-data',
                    state.data.originalState.actualMse.colorSchemeName,
                    'material-card_type_elevated',
                ]"
            >
                <div class="modified-data__field field">
                    <img :src="schoolIcon" class="field__icon" />
                    <list-select
                        :props="{
                            title: 'Место проведения урока',
                            isDefaultSelectionAvaliable: false,
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
                    <text-field
                        class="field__input"
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
import TextField from '@/common/components/snedson-material-components/text-field/text-field.vue';
import { ModifySePageStateModel } from '@/http/pageModels/teacherModels/modifyScheduleElementPage/ModifySePageStateModel';
import customButton from '@/common/components/snedson-material-components/custom-button/custom-button.vue';
import patchModifyingSeService from '@/http/services/TeacherServices/ModifyScheduleElementPage/ModifyingSeService';
import { getBaseUrl } from '@/http/api/';

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

const onLocationSelection = (locationId: number | null) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    state.data.modifiedState.locationId = locationId!;
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
</style>
