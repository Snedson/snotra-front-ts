<template>
    <div class="adding-homework-page" v-if="!!state.data">
        <div class="homework-setter">
            <div
                class="homework-setter-element"
                v-if="state.selectedSubjectId !== null"
            >
                <div class="homework-setter-element__image-cont">
                    <img :src="algebraIcon" alt="" />
                </div>
                <ListSelect
                    :props="{
                        menuItems: currentAvaliableSubjects,
                        title: 'Предмет',
                        isEmptySelectionAvaliable: false,
                        selectedItemId: state.selectedSubjectId,
                    }"
                    :on-selected="onSubjectSelect"
                ></ListSelect>
            </div>
            <div class="homework-setter-element">
                <div class="homework-setter-element__image-cont">
                    <img :src="messageCalloutIcon" alt="" />
                </div>
                <input type="text" />
            </div>
            <div
                class="homework-setter-element"
                v-if="state.selectedGroupId !== null"
            >
                <div class="homework-setter-element__image-cont">
                    <img :src="studentIcon" alt="" />
                </div>
                <ListSelect
                    :props="{
                        menuItems: currentClassGroups,
                        isEmptySelectionAvaliable: false,
                        selectedItemId: state.selectedGroupId,
                        title: 'Группа учеников',
                    }"
                    :on-selected="onGroupSelect"
                ></ListSelect>
            </div>
            <div class="homework-setter-element">
                <div class="homework-setter-element__image-cont">
                    <img :src="calendarIcon" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import algebraIcon from '@/assets/icons/emojis/algebra.png';
import messageCalloutIcon from '@/assets/icons/emojis/messageCallout.png';
import studentIcon from '@/assets/icons/emojis/student.png';
import calendarIcon from '@/assets/icons/emojis/calendar.png';
import ListSelect from '@/common/components/snedson-material-components/list-select/list-select.vue';
import { computed, onMounted, reactive } from 'vue';
import { GetAddingHomeworkPageResponseModel } from './AddingHomeworkPage.types';
import { IListSelectMenuItem } from '@/common/components/snedson-material-components/list-select/list-select.types';
import { getAddingHomeworkPage } from './apiMethods';

const state = reactive<{
    data: GetAddingHomeworkPageResponseModel | null;
    selectedSubjectId: number | null;
    selectedGroupId: number | null;
}>({
    data: null,
    selectedSubjectId: null,
    selectedGroupId: null,
});

const onSubjectSelect = (subjectId: number) => {
    state.selectedSubjectId = subjectId;
};

const onGroupSelect = (groupId: number) => {
    state.selectedGroupId = groupId;
};

const currentAvaliableSubjects = computed((): IListSelectMenuItem[] => {
    if (!state.data) {
        return [];
    }

    return Object.entries(state.data.avaliableSubjects).map((value) => ({
        id: Number(value[0]),
        title: value[1],
    }));
});

const currentClassGroups = computed((): IListSelectMenuItem[] => {
    if (!state.data) {
        return [];
    }

    return Object.entries(state.data.groupsOfClass).map((value) => ({
        id: Number(value[0]),
        title: value[1],
    }));
});

onMounted(() => {
    getAddingHomeworkPage().then((res) => {
        state.data = res.data;
        state.selectedSubjectId = Number(
            Object.entries(res.data.avaliableSubjects)[0][0]
        );
        state.selectedGroupId = Number(
            Object.entries(res.data.groupsOfClass)[0][0]
        );
    });
});
</script>
<style lang="scss">
.homework-setter {
    display: flex;
    padding: 25px 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    padding: 25px 20px;
    background: var(--snotra--sys--secondary-container);
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
}

.homework-setter-element {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    align-self: stretch;
    &__image-cont {
        img {
            width: 55px;
            height: 55px;
        }
    }

    .list-select {
        margin-top: 0;
    }
}
</style>
