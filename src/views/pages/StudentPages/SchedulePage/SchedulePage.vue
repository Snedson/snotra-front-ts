<template>
    <div class="schedule-list">
        <TabMenu
            :props="{
                tabs: [
                    { id: 1, title: 'Изменённое' },
                    { id: 2, title: 'Стандартное' },
                ],
                selectedTabItemId: 1,
            }"
            @change="selectTab"
        ></TabMenu>
        <div class="subpage">
            <UsualScheduleSubpage v-if="state.selectTabId === 2" />
            <ModifiedScheduleSubpage v-if="state.selectTabId === 1" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import UsualScheduleSubpage from './Subpages/UsualScheduleSubpage/UsualScheduleSubpage.vue';
import ModifiedScheduleSubpage from './Subpages/ModifiedScheduleSubpage/ModifiedScheduleSubpage.vue';
import TabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import { reactive } from 'vue';

const state = reactive<{ selectTabId: number }>({ selectTabId: 1 });

const selectTab = (tabId: number) => {
    state.selectTabId = tabId;
};
</script>

<style lang="scss" scoped></style>
