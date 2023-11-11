<template>
    <div class="schedule-list">
        <TabMenu
            :props="{
                tabs: [
                    { id: ScheduleSubpage.Modified, title: 'Изменённое' },
                    { id: ScheduleSubpage.Usual, title: 'Стандартное' },
                ],
                selectedTabItemId: ScheduleSubpage.Modified,
            }"
            @change="selectTab"
        ></TabMenu>
        <div class="subpage">
            <ModifiedScheduleSubpage
                v-if="state.selectTabId === ScheduleSubpage.Modified"
            />
            <UsualScheduleSubpage
                v-else-if="state.selectTabId === ScheduleSubpage.Usual"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import UsualScheduleSubpage from './Subpages/UsualScheduleSubpage/UsualScheduleSubpage.vue';
import ModifiedScheduleSubpage from './Subpages/ModifiedScheduleSubpage/ModifiedScheduleSubpage.vue';
import TabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import { reactive } from 'vue';
import { ScheduleSubpage } from './SchedulePage.types';
import router from '@/router';

const state = reactive<{ selectTabId: number }>({
    selectTabId: ScheduleSubpage.Modified,
});

const selectTab = (tabId: number) => {
    state.selectTabId = tabId;
    if (tabId == ScheduleSubpage.Modified) {
        router.push({ name: 'sn.student.schedule.mse' });
    } else {
        router.push({ name: 'sn.student.schedule.use' });
    }
};
</script>

<style lang="scss" scoped></style>
