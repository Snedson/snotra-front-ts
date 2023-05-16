<template>
    <div>
        <tab-menu :props="state" @change="selectTab"></tab-menu>
        <div class="subpage">
            <modified-schedule-subpage
                v-if="state.selectedTabItemId === ScheduleSubpage.Modified"
            ></modified-schedule-subpage>

            <usual-schedule-subpage
                v-else-if="state.selectedTabItemId === ScheduleSubpage.Usual"
            ></usual-schedule-subpage>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TabMenu from '@/common/components/snedson-material-components/tab-menu/tab-menu.vue';
import { ITabMenuProps } from '@/common/components/snedson-material-components/tab-menu/tab-menu.types';
import { reactive } from 'vue';
import { ScheduleSubpage } from './SchedulePage.types';
import router from '@/router';
import ModifiedScheduleSubpage from './Subpages/ModifiedScheduleSubpage/ModifiedScheduleSubpage.vue';
import UsualScheduleSubpage from './Subpages/UsualScheduleSubpage/UsualScheduleSubpage.vue';

const state = reactive<ITabMenuProps>({
    tabs: [
        {
            id: ScheduleSubpage.Modified,
            title: 'Измененное',
        },
        {
            id: ScheduleSubpage.Usual,
            title: 'Стандартное',
        },
    ],
    selectedTabItemId: ScheduleSubpage.Modified,
});

const selectTab = (tabId: ScheduleSubpage) => {
    state.selectedTabItemId = tabId;

    if (tabId == ScheduleSubpage.Modified) {
        router.push({ name: 'sn.teacher.schedule.mse' });
    } else {
        router.push({ name: 'sn.teacher.schedule.use' });
    }
};
</script>

<style lang="scss" scoped>
.subpage {
    padding-top: 30px;
}
</style>
